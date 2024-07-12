package Actions;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.json.JSONObject;

import com.opensymphony.xwork2.ActionSupport;

import DAO.CredentialsAccessObject;

public class AdminSignUpAction extends ActionSupport{
	HttpServletRequest request = ServletActionContext.getRequest();
	HttpServletResponse response = ServletActionContext.getResponse();
	public String execute() throws Exception{
		String adminName = request.getParameter("admin_name");
		String email = request.getParameter("email");
		String phoneNo = request.getParameter("phone_no");
		String password = request.getParameter("password");
		JSONObject adminDetails =  new JSONObject();
		adminDetails.put("admin_name", adminName);
		adminDetails.put("email", email);
		adminDetails.put("phone_no", phoneNo);
		adminDetails.put("password", password);
		boolean adminCreated = CredentialsAccessObject.addAdmin(adminDetails);
		if(adminCreated) {
			return LOGIN;
		}
		return NONE;
	}
}
