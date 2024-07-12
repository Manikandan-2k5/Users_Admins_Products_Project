package DAO;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import org.json.JSONObject;

public class CredentialsAccessObject {

	public static boolean addAdmin(JSONObject adminDetails) {
		String adminName = adminDetails.getString("admin_name");
		String email = adminDetails.getString("email");
		String phoneNo = adminDetails.getString("phone_no");
		String password = adminDetails.getString("password");
		boolean isAlreadyExists = isAlreadyUser(email, phoneNo);
		if(isAlreadyExists) {
			return false;
		}
		else {
			String query = "INSERT INTO users(name, email, phone_no, password, user_type) VALUES (?,?,?,?, ?)";
			try (Connection connection = ConnectionPool.getConnection()){
				PreparedStatement cursor = connection.prepareStatement(query);
				cursor.setString(1, adminName);
				cursor.setString(2, email);
				cursor.setString(3, phoneNo);
				cursor.setString(4, password);
				cursor.setString(5, "ADMIN");
				cursor.executeUpdate();
				return true;
			} 
			catch (Exception e) {
				e.printStackTrace();
			}
			return false;
		}
	}
	
	public static boolean addUser(JSONObject userDetails) {
		String email = userDetails.getString("email");
		String phoneNo = userDetails.getString("phone_no");
		String query = "UPDATE users SET user_type = 'USER' WHERE email = ? AND phone_no = ?";
		try (Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			cursor.setString(1, email);
			cursor.setString(2, phoneNo);
			int isApproved = cursor.executeUpdate();
			if(isApproved==0) {
				return false;
			}
			return true;
		} 
		catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	public static boolean addRequestedUser(JSONObject userDetails) {
		String userName = userDetails.getString("name");
		String email = userDetails.getString("email");
		String phoneNo = userDetails.getString("phone_no");
		String password = userDetails.getString("password");
		boolean isAlreadyExists = isAlreadyUser(email, phoneNo);
		if(isAlreadyExists) {
			return false;
		}
		else{
			String query = "INSERT INTO users(name, email, phone_no, password, user_type) VALUES (?,?,?,?, ?)";
			try (Connection connection = ConnectionPool.getConnection()){
				PreparedStatement cursor = connection.prepareStatement(query);
				cursor.setString(1, userName);
				cursor.setString(2, email);
				cursor.setString(3, phoneNo);
				cursor.setString(4, password);
				cursor.setString(5, "REQUESTED");
				cursor.executeUpdate();
				return true;
			}
			catch (Exception e) {
				e.printStackTrace();
			}
			return false;
		}
	}
	
	public static int getUserId(String email) {
		String query = "SELECT user_id FROM users WHERE email = ?";
		try (Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			cursor.setString(1, email);
			ResultSet resultSet = cursor.executeQuery();
			if(resultSet.isBeforeFirst()) {
				resultSet.next();
				return resultSet.getInt(1);
			}
			else {
				return -1;
			}
		}
		catch(Exception e) {
			e.printStackTrace();
			return -1;
		}
	}
	
	public static boolean isUser(String email, String password) {
		String query = "SELECT * FROM users WHERE email = ? AND password = ? AND user_type = 'USER'";
		try (Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			cursor.setString(1,email);
			cursor.setString(2, password);
			ResultSet resultSet = cursor.executeQuery();
			if(resultSet.next()) {
				return true;
			}
			else {
				return false;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}
	
	public static boolean isAdmin(String email, String password) {
		String query = "SELECT * FROM users WHERE email = ? AND password = ? AND user_type = 'ADMIN'";
		try (Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			cursor.setString(1,email);
			cursor.setString(2, password);
			ResultSet resultSet = cursor.executeQuery();
			if(resultSet.next()) {
				return true;
			}
			else {
				return false;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}
	
	public static boolean isRequestedUser(String email, String password) {
		String query = "SELECT * FROM users WHERE email = ? AND password = ? AND user_type = 'REQUESTED'";
		try (Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			cursor.setString(1,email);
			cursor.setString(2, password);
			ResultSet resultSet = cursor.executeQuery();
			if(resultSet.next()) {
				return true;
			}
			else {
				return false;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}
	
	public static boolean isAlreadyUser(String email, String phoneNo) {
		String query = "SELECT * FROM users WHERE email = ? OR phone_no = ?";
		try (Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			cursor.setString(1,email);
			cursor.setString(2,phoneNo);
			ResultSet resultSet = cursor.executeQuery();
			if(resultSet.next()) {
				return true;
			}
			else {
				return false;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return false;
	}
	
	public static boolean removeRequestedUser(String email, String phoneNo) {
		String query = "DELETE FROM users WHERE email = ?";
		try (Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			cursor.setString(1,email);
			cursor.executeUpdate();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	public static boolean validateAdminSession(String session, String browserSession) {
			
		String query = "SELECT * FROM users JOIN user_sessions ON users.user_id = user_sessions.user_id WHERE users.user_type = 'ADMIN' AND user_sessions.session_data = ? AND user_sessions.browser_session = ?";
		try (Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			cursor.setString(1,session);
			cursor.setString(2,browserSession);
			ResultSet resultSet = cursor.executeQuery();
			if(resultSet.next()) {
				return true;
			}
			return false;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}
	
	public static boolean validateUserSession(String session,  String browserSession) {
		
		String query = "SELECT * FROM users JOIN user_sessions ON users.user_id = user_sessions.user_id WHERE users.user_type = 'USER' AND user_sessions.session_data = ? AND user_sessions.browser_session = ?";
		try (Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			cursor.setString(1,session);
			cursor.setString(2,browserSession);
			ResultSet resultSet = cursor.executeQuery();
			if(resultSet.next()) {
				return true;
			}
			return false;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	public static boolean addUserSession(String email, String sessionHash, String browserSession) {
		
		String query = "INSERT INTO user_sessions(user_id, session_data, browser_session) VALUES (? , ?, ?)";
		try (Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			int userId = getUserId(email);
			if(userId!=-1) {
				cursor.setInt(1,userId);
				cursor.setString(2, sessionHash);
				cursor.setString(3, browserSession);
				int rowsAffected = cursor.executeUpdate();
				if(rowsAffected==1) {
					return true;
				}
				return false;
			}
			return false;
		} 
		catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	public static int getUserIdBySession(String session) {
		String query = "SELECT user_id FROM user_sessions WHERE session_data = ?";
		try (Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			cursor.setString(1, session);
			ResultSet resultSet = cursor.executeQuery();
			if(resultSet.isBeforeFirst()) {
				resultSet.next();
				return resultSet.getInt(1);
			}
			else {
				return -1;
			}
		}
		catch(Exception e) {
			e.printStackTrace();
			return -1;
		}
	}

	public static boolean checkSessionExists(String session){
		String query = "SELECT session_data FROM user_sessions where session_data = ?";
		try (Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			cursor.setString(1, session);
			ResultSet resultSet = cursor.executeQuery();
			if(resultSet.next()) {
				return true;
			}
			else {
				return false;
			}
		}
		catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	public static boolean checkBrowserSessionExists(String browserSession) {
		String query = "SELECT browser_session FROM user_sessions where browser_session = ?";
		try (Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			cursor.setString(1, browserSession);
			ResultSet resultSet = cursor.executeQuery();
			if(resultSet.next()) {
				return true;
			}
			else {
				return false;
			}
		}
		catch(Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	public static String alreadyLoggedIn(String session, String browserSession){
		String query = "SELECT users.user_type FROM user_sessions JOIN users ON users.user_id = user_sessions.user_id WHERE browser_session = ? AND session_data = ?";
		try (Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			cursor.setString(1, browserSession);
			cursor.setString(2, session);
			ResultSet resultSet = cursor.executeQuery();
			if(resultSet.isBeforeFirst()) {
				resultSet.next();
				return resultSet.getString(1);
			}
			else {
				return "No Session";
			}
		}
		catch(Exception e) {
			e.printStackTrace();
			return "Error Occured";
		}
	}

	public static void logoutUser(String session, String browserSession) {
		String query = "DELETE FROM user_sessions WHERE browser_session = ? AND session_data = ?";
		try (Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			cursor.setString(1, browserSession);
			cursor.setString(2, session);
			cursor.executeUpdate();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
	

}
