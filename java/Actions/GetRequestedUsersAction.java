package Actions;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import DAO.DataAccessObject;

public class GetRequestedUsersAction extends ActionSupport{
	HttpServletRequest request = ServletActionContext.getRequest();
	HttpServletResponse response = ServletActionContext.getResponse();
	
	public String execute() throws Exception{
		String responseJsonString = DataAccessObject.getRequestedUsers();
		response.getWriter().write(responseJsonString);
		return NONE;
	}
}
