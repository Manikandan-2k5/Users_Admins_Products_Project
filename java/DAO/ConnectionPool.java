package DAO;
import java.sql.Connection;
import java.sql.SQLException;

import org.apache.tomcat.dbcp.dbcp2.BasicDataSource;

public class ConnectionPool {
	
	private static final String JDBC_URL = "jdbc:mysql://127.0.0.1:3306/users_admins_portal_db";
	private static final String USERNAME = "manikandans";
	private static final String PASSWORD = "mani@sql";
	private static BasicDataSource dataSource;
	
	static {
		dataSource = new BasicDataSource();
		dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver"); 
		dataSource.setUrl(JDBC_URL);
		dataSource.setUsername(USERNAME);
		dataSource.setPassword(PASSWORD);
		dataSource.setInitialSize(3);
		dataSource.setMaxTotal(5);
		String resultProperties = "useAffectedRows=true";
		dataSource.setConnectionProperties(resultProperties);
	}
	
	public static Connection getConnection() throws SQLException{
		return dataSource.getConnection();
	}
	
}
