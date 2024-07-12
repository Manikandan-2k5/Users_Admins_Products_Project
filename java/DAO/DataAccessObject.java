package DAO;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONObject;

import Models.LRUCache;

public class DataAccessObject {
	
	public static String getAllProducts() {
		JSONObject recordJson = new JSONObject();
		JSONArray resultJsonArray = new JSONArray();
		JSONObject noRecordsJson = new JSONObject();
		String resultStringJson = null;
		String query = "SELECT products.product_id, products.product_name, products.product_price, products.product_brand, products.product_origin FROM products";
		try(Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			ResultSet resultSet = cursor.executeQuery();
			if(resultSet.isBeforeFirst()) {
				ResultSetMetaData metaData = resultSet.getMetaData();
				int columnCount = metaData.getColumnCount();
				while(resultSet.next()) {
					for(int i=1; i<=columnCount; i++) {
						recordJson.put(metaData.getColumnName(i), resultSet.getString(i));
					}
					resultJsonArray.put(recordJson);
					recordJson = new JSONObject();
				}
				resultStringJson = resultJsonArray.toString();
			}
			else {
				noRecordsJson.put("Error", "No Records Found");
				noRecordsJson.put("isError", true);
				resultStringJson = noRecordsJson.toString();
			}
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		return resultStringJson;
	}
	
	public static String getProductsOfUser(int user_id) {
		JSONObject recordJson = new JSONObject();
		JSONArray resultJsonArray = new JSONArray();
		JSONObject noRecordsJson = new JSONObject();
		String resultStringJson = null;
		String query = "SELECT products.product_id, products.product_name, products.product_price, products.product_brand, products.product_origin FROM products JOIN users ON products.user_id = users.user_id WHERE users.user_id = ?";
		try(Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			cursor.setInt(1,user_id);
			ResultSet resultSet = cursor.executeQuery();
			if(resultSet.isBeforeFirst()) {
				ResultSetMetaData metaData = resultSet.getMetaData();
				int columnCount = metaData.getColumnCount();
				while(resultSet.next()) {
					for(int i=1; i<=columnCount; i++) {
						recordJson.put(metaData.getColumnName(i), resultSet.getString(i));
					}
					resultJsonArray.put(recordJson);
					recordJson = new JSONObject();
				}
				resultStringJson = resultJsonArray.toString();
			}
			else {
				noRecordsJson.put("Error", "No Records Found");
				noRecordsJson.put("isError", true);
				resultStringJson = noRecordsJson.toString();
			}
		}
		catch (Exception e) {
			e.printStackTrace();
		}
		return resultStringJson;
	}
	
	public static String getMRSProductsOfUser(int user_id) {
		JSONObject recordJson = new JSONObject();
		JSONArray resultJsonArray = new JSONArray();
		JSONObject noRecordsJson = new JSONObject();
		String resultStringJson = null;
		String query = "SELECT products.product_id, products.product_name, products.product_price, products.product_brand, products.product_origin FROM mrs_products JOIN users ON mrs_products.user_id = users.user_id JOIN products ON products.product_id = mrs_products.product_id WHERE users.user_id = ? ORDER BY mrs_products.priority";
		try (Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			cursor.setInt(1,user_id);
			ResultSet resultSet = cursor.executeQuery();
			if(resultSet.isBeforeFirst()) {
				ResultSetMetaData metaData = resultSet.getMetaData();
				int columnCount = metaData.getColumnCount();
				while(resultSet.next()) {
					for(int i=1; i<=columnCount; i++) {
						recordJson.put(metaData.getColumnName(i), resultSet.getString(i));
					}
					resultJsonArray.put(recordJson);
					recordJson = new JSONObject();
				}
				resultStringJson = resultJsonArray.toString();
			}
			else {
				noRecordsJson.put("Error", "No Records Found");
				noRecordsJson.put("isError", true);
				resultStringJson = noRecordsJson.toString();
			}
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
		return resultStringJson;
		
	}

	public static LRUCache getMRSProductsCache(int user_id) {
		LRUCache userCache = new LRUCache();
		String query = "SELECT products.product_id, products.product_name, products.product_price, products.product_brand, products.product_origin FROM mrs_products JOIN users ON mrs_products.user_id = users.user_id JOIN products ON products.product_id = mrs_products.product_id WHERE users.user_id = ? ORDER BY mrs_products.priority DESC";
		try (Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			cursor.setInt(1,user_id);
			ResultSet resultSet = cursor.executeQuery();
			if(resultSet.isBeforeFirst()) {
				ResultSetMetaData metaData = resultSet.getMetaData();
				int columnCount = metaData.getColumnCount();
				while(resultSet.next()) {
					int key = 0;
					JSONObject recordJson = new JSONObject();
					for(int i=1; i<=columnCount; i++) {
						if(i==1){
							key = resultSet.getInt(i);
						}
						recordJson.put(metaData.getColumnName(i), resultSet.getString(i));
					}
					userCache.put(key, recordJson);
				}
				return userCache;
			}
			else {
				return new LRUCache();
			}
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
		return new LRUCache();
		
	}
	
	public static String getRequestedUsers() {
		JSONArray requestedUsers = new JSONArray();
		JSONObject userRecord = new JSONObject();
		String resultString=  null;
		String query = "SELECT name, email, phone_no, password FROM users WHERE user_type = 'REQUESTED'";
		try (Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			ResultSet resultSet = cursor.executeQuery();
			if(resultSet.isBeforeFirst()) {
				ResultSetMetaData metaData = resultSet.getMetaData();
				int columnCount = metaData.getColumnCount();
				while(resultSet.next()) {
					for(int i=1; i<=columnCount; i++) {
						userRecord.put(metaData.getColumnName(i), resultSet.getString(i));
					}
					requestedUsers.put(userRecord);
					userRecord = new JSONObject();
				}
				resultString = requestedUsers.toString();
			}
			else {
				JSONObject noUsersJson = new JSONObject();
				noUsersJson.put("Statement", "No Requested Users");
				resultString = noUsersJson.toString();
			}
			return resultString;
		} 
		catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

	public static boolean isMrsProductExists(int userId, int productId){
		String query = "SELECT products.product_id, products.product_name, products.product_price, products.product_brand, products.product_origin FROM mrs_products JOIN users ON mrs_products.user_id = users.user_id JOIN products ON products.product_id = mrs_products.product_id WHERE users.user_id = ? AND mrs_products.product_id = ? ORDER BY mrs_products.priority";
		try (Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			cursor.setInt(1,userId);
			cursor.setInt(2,productId);
			boolean recordExists = cursor.executeQuery().next();
			return recordExists;
		}
		catch(Exception e){
			e.printStackTrace();
			return false;
		}
	}

	public static int getProductPriority(int userId, int productId){
		String query = "SELECT mrs_products.priority FROM mrs_products JOIN users ON mrs_products.user_id = users.user_id JOIN products ON products.product_id = mrs_products.product_id WHERE users.user_id = ? AND mrs_products.product_id = ? ORDER BY mrs_products.priority";
		try (Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			cursor.setInt(1,userId);
			cursor.setInt(2,productId);
			ResultSet resultSet = cursor.executeQuery();
			int priority = 0;
			if(resultSet.next()){
				priority = resultSet.getInt(1);;
			}
			return priority;
		}
		catch(Exception e){
			e.printStackTrace();
			return 0;
		}
	}

	public static int getUserMrsProductsCount(int userId){
		String query = "SELECT COUNT(*) FROM mrs_products WHERE user_id = ?";
		int noOfMrsProducts = 0;
		try (Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			cursor.setInt(1,userId);
			ResultSet resultSet = cursor.executeQuery();
			if(resultSet.next()){
				noOfMrsProducts = resultSet.getInt(1);
			}
			return noOfMrsProducts;
		}
		catch(Exception e){
			e.printStackTrace();
			return -1;
		}
	}

	public static void deleteLowestPriorityProduct(int userId){
		String query = "DELETE FROM mrs_products WHERE user_id = ? AND priority = 7";
		try (Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			cursor.setInt(1,userId);
			cursor.executeUpdate();
		}
		catch(Exception e){
			e.printStackTrace();
		}
	}

	public static void updateUserProductPriority(int userId, int productId){
		if(isMrsProductExists(userId, productId)){
			int priority = getProductPriority(userId, productId);
			String query1 = "UPDATE mrs_products SET mrs_products.priority = mrs_products.priority+1 WHERE mrs_products.user_id = ? AND mrs_products.priority < ?";
			String query2 = "UPDATE mrs_products SET mrs_products.priority = 1 WHERE mrs_products.product_id = ? AND mrs_products.user_id = ?";
			try(Connection connection = ConnectionPool.getConnection()){
				PreparedStatement cursor = connection.prepareStatement(query1);
				cursor.setInt(1, userId);
				cursor.setInt(2, priority);
				cursor.executeUpdate();
				cursor = connection.prepareStatement(query2);
				cursor.setInt(1, productId);
				cursor.setInt(2, userId);
				cursor.executeUpdate();
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
		else{
			int noOfMrsProducts = getUserMrsProductsCount(userId);
			if(noOfMrsProducts>=7){
				deleteLowestPriorityProduct(userId);
			}
			String query1 = "UPDATE mrs_products SET mrs_products.priority = mrs_products.priority+1 WHERE mrs_products.user_id = ?";
			String query2 = "INSERT INTO mrs_products values (?, ?, 1)";
			try(Connection connection = ConnectionPool.getConnection()){
				PreparedStatement cursor = connection.prepareStatement(query1);
				cursor.setInt(1, userId);
				cursor.executeUpdate();
				cursor = connection.prepareStatement(query2);
				cursor.setInt(1, userId);
				cursor.setInt(2, productId);
				cursor.executeUpdate();
			}
			catch(Exception e){
				e.printStackTrace();
			}
		}
	}

	public static boolean addProduct(int userId, JSONObject productDetails){
		String query = "INSERT INTO products(product_name, user_id, product_price, product_brand, product_origin) VALUE(?, ?, ?, ?, ?)";
		try(Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			cursor.setString(1, productDetails.getString("product_name"));
			cursor.setInt(2, userId);
			cursor.setInt(3, productDetails.getInt("product_price"));
			cursor.setString(4, productDetails.getString("product_brand"));
			cursor.setString(5, productDetails.getString("product_origin"));
			cursor.executeUpdate();
			return true;
		}
		catch(Exception e){
			e.printStackTrace();
			return false;
		}
	}

	public static boolean updateProduct(int userId, JSONObject productDetails){
		String query = "UPDATE products SET product_name = ?, product_price = ?, product_brand = ?, product_origin = ? WHERE product_id = ?";
		try(Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			cursor.setString(1, productDetails.getString("product_name"));
			cursor.setInt(2, productDetails.getInt("product_price"));
			cursor.setString(3, productDetails.getString("product_brand"));
			cursor.setString(4, productDetails.getString("product_origin"));
			cursor.setInt(5, Integer.parseInt(productDetails.getString("product_id")));
			cursor.executeUpdate();
			return true;
		}
		catch(Exception e){
			e.printStackTrace();
			return false;
		}
	}

	public static boolean deleteProduct(int productId){
		String query = "DELETE FROM products WHERE product_id = ?";
		try(Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			cursor.setInt(1,productId);
			cursor.executeUpdate();
			return true;
		}
		catch(Exception e){
			e.printStackTrace();
			return false;
		}
	}

	public static ArrayList<int[]> getMRSProductUserAndPriority(int productId){
		ArrayList<int[]> userAndPriorityJson = new ArrayList<int[]>();
		String query = "SELECT user_id, priority FROM mrs_products WHERE product_id = ?";
		try(Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			cursor.setInt(1,productId);
			ResultSet resultSet = cursor.executeQuery();
			if(resultSet.isBeforeFirst()){
				while(resultSet.next()){
					int[] userAndPriority = new int[2];
					userAndPriority[0] = resultSet.getInt(1);
					userAndPriority[1] = resultSet.getInt(2);
					userAndPriorityJson.add(userAndPriority);
				}
				return userAndPriorityJson;
			}
			return null;
		}
		catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}

	public static boolean updateUserPrioritiesAfterDelete(int productId){
		ArrayList<int[]> userAndPriorityJson = getMRSProductUserAndPriority(productId);
		String query = "UPDATE mrs_products SET priority = priority-1 WHERE user_id = ? AND priority > ?";
		if(userAndPriorityJson==null || userAndPriorityJson.size()==0){
			return false;
		}
		try(Connection connection = ConnectionPool.getConnection()){
			PreparedStatement cursor = connection.prepareStatement(query);
			for(int[] userAndPriority: userAndPriorityJson){
				cursor.setInt(1,userAndPriority[0]);
				cursor.setInt(2,userAndPriority[1]);
				cursor.executeUpdate();
			}
			return true;
		}
		catch(Exception e){
			e.printStackTrace();
			return false;
		}
	}
}
