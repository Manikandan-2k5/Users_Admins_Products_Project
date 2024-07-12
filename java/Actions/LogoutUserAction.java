package Actions;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import DAO.CredentialsAccessObject;

public class LogoutUserAction extends ActionSupport{
    HttpServletRequest request = ServletActionContext.getRequest();
	HttpServletResponse response = ServletActionContext.getResponse();
    public String execute() throws Exception{
		Cookie[] cookies = request.getCookies();
		String session = null;
		HttpSession httpSession = request.getSession();
        Object attribute = httpSession.getAttribute("browserSession");
        String browserSession = attribute.toString();
        request.getSession().removeAttribute("browserSession");
		if(cookies!=null) {
			for(Cookie cookie: cookies) {
				if(cookie.getName().equals("session")) {
					session = cookie.getValue();
				}
			}
		}
		Cookie cookie = new Cookie("session", "");
		cookie.setDomain("localhost");
		cookie.setPath("/");
		cookie.setMaxAge(0);
		response.addCookie(cookie);
        CredentialsAccessObject.logoutUser(session, browserSession);
        return NONE;
    }
}
