package Actions;
import java.io.BufferedReader;
import java.io.InputStreamReader;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.json.JSONObject;

import com.opensymphony.xwork2.ActionSupport;

import DAO.CredentialsAccessObject;

public class AddUserAction extends ActionSupport{
	
	HttpServletRequest request = ServletActionContext.getRequest();
	HttpServletResponse response = ServletActionContext.getResponse();
	
	public String execute() throws Exception{
		BufferedReader reader = new BufferedReader(new InputStreamReader(request.getInputStream()));
		String requestBody = "";
		while(reader.ready()) {
			requestBody+=reader.readLine();
		}
		JSONObject requestJson = new JSONObject(requestBody);
		boolean userApproved = CredentialsAccessObject.addUser(requestJson);
		JSONObject responseJson = new JSONObject();
		if(userApproved) {
			responseJson.put("UserApproved", true);
			responseJson.put("Statement", "None");
		}
		else {
			responseJson.put("UserApproved", false);
			responseJson.put("Statement", "No Such Requested User");
		}
		response.getWriter().write(responseJson.toString());
		return NONE;
	}
}
