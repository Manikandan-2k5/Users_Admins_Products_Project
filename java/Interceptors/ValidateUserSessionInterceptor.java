package Interceptors;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.json.JSONObject;

import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.Interceptor;

import DAO.CredentialsAccessObject;

public class ValidateUserSessionInterceptor implements Interceptor {

	@Override
	public void destroy() {
		
	}

	@Override
	public void init() {
		
	}

	@Override
	public String intercept(ActionInvocation invocation) throws Exception {
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpServletResponse response = ServletActionContext.getResponse();
		Cookie[] cookies = request.getCookies();
		String session = null;
		String browserSession =(String) (request.getSession().getAttribute("browserSession"));
		if(cookies!=null) {
			for(Cookie cookie: cookies) {
				if(cookie.getName().equals("session")) {
					session = cookie.getValue();
				}
			}
		}
		if(session!=null && browserSession!=null) {
			boolean isValidSession = CredentialsAccessObject.validateUserSession(session, browserSession);
			if(isValidSession) {
				request.setAttribute("userId", CredentialsAccessObject.getUserIdBySession(session));
				return invocation.invoke();
			}
			else {
				response.getWriter().write((new JSONObject().put("validation", false).put("log", "Not a Valid Session")).toString());
				return Action.NONE; 
			}
		}
		response.getWriter().write((new JSONObject().put("validation", false).put("log", "No Session")).toString());
		return Action.NONE;
	}
}
