package Actions;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import DAO.DataAccessObject;

public class GetUserProducts extends ActionSupport{
	
	public String execute() throws Exception{
		
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpServletResponse response = ServletActionContext.getResponse();
		
		int userId = (int) request.getAttribute("userId");
		String productsArrayJson = DataAccessObject.getProductsOfUser(userId);
		response.getWriter().write(productsArrayJson);
		return NONE;
		
	}
}
