package Actions;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.json.JSONObject;

import com.opensymphony.xwork2.ActionSupport;

import DAO.CredentialsAccessObject;

public class BeforeLoginAction extends ActionSupport{
    public String execute() throws Exception{
        HttpServletRequest request = ServletActionContext.getRequest();
		HttpServletResponse response = ServletActionContext.getResponse();
		Cookie[] cookies = request.getCookies();
		String session = null;
		String browserSession = (String)(request.getSession().getAttribute("browserSession"));
        if(cookies!=null) {
			for(Cookie cookie: cookies) {
				if(cookie.getName().equals("session")) {
					session = cookie.getValue();
				}
			}
		}
		if(session!=null && browserSession!=null) {
			String userRole = CredentialsAccessObject.alreadyLoggedIn(session, browserSession);
			response.getWriter().write(new JSONObject().put("user_type", userRole).toString());
		}
        else{
            response.getWriter().write(new JSONObject().put("Info", "No Session").toString());
        }
        return NONE;
    }
}
