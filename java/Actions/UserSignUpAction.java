package Actions;
import java.io.BufferedReader;
import java.io.InputStreamReader;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.json.JSONObject;

import com.opensymphony.xwork2.ActionSupport;

import DAO.CredentialsAccessObject;

public class UserSignUpAction extends ActionSupport{
	
	HttpServletRequest request = ServletActionContext.getRequest();
	HttpServletResponse response = ServletActionContext.getResponse();
	
	public String execute() throws Exception{
	    
		BufferedReader requestBody = new BufferedReader(new InputStreamReader(request.getInputStream()));
		String requestString = "";
		while(requestBody.ready()) {
			requestString+=requestBody.readLine();
		}
		JSONObject userDetails =  new JSONObject(requestString);
		boolean requestCreated = CredentialsAccessObject.addRequestedUser(userDetails);
		JSONObject responseObject = new JSONObject();
		response.setContentType("application/json");
		if(requestCreated) {
			responseObject.put("requestRegistered", true);
			responseObject.put("error", "none");
		}
		else {
			responseObject.put("requestRegistered", false);
			responseObject.put("error", "Already a User is Existing with your Credentials");
		}
		response.getWriter().write(responseObject.toString());
		return NONE;
	}
	
}
