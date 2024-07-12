package Actions;
import java.io.BufferedReader;
import java.io.InputStreamReader;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.json.JSONObject;

import com.opensymphony.xwork2.ActionSupport;

import DAO.CredentialsAccessObject;
import Models.UniqueSessionGenerator;

public class UserLoginAction extends ActionSupport{
	
	HttpServletRequest request = ServletActionContext.getRequest();
	HttpServletResponse response = ServletActionContext.getResponse();
	
	public String execute() throws Exception{
		String requestBody = "";
		BufferedReader reader = new BufferedReader(new InputStreamReader(request.getInputStream()));
		while(reader.ready()) {	
			requestBody+=reader.readLine();
		}
		JSONObject requestJson = new JSONObject(requestBody);
		String email = requestJson.getString("email");
		String password = requestJson.getString("password");
		boolean isUser = CredentialsAccessObject.isUser(email, password);
		JSONObject responseObject = new JSONObject();
		String session = UniqueSessionGenerator.generateSession();
		String browserSession = UniqueSessionGenerator.generateSession();
		if(isUser) {
			while(CredentialsAccessObject.checkSessionExists(session)){
				session = UniqueSessionGenerator.generateSession();
			}
			while(CredentialsAccessObject.checkBrowserSessionExists(browserSession)){
				browserSession = UniqueSessionGenerator.generateSession();
			}
			request.getSession().setAttribute("browserSession", browserSession);
			request.getSession().setMaxInactiveInterval(24 * 60 * 60);
			CredentialsAccessObject.addUserSession(email, session, browserSession);
			Cookie sessionCookie = new Cookie("session", session);
			sessionCookie.setDomain("localhost");
			sessionCookie.setPath("/");
			sessionCookie.setMaxAge(86400);
			response.addCookie(sessionCookie);
			responseObject.put("logged_in", true);
		}
		else {
			responseObject.put("logged_in", false);
		}
		response.getWriter().write(responseObject.toString());
		return NONE;
	}
	
}
