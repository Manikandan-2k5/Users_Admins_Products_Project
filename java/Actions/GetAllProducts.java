package Actions;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

import DAO.DataAccessObject;

public class GetAllProducts extends ActionSupport{
	public String execute() throws Exception{
		
		HttpServletResponse response = ServletActionContext.getResponse();
		
		String productsArrayJson = DataAccessObject.getAllProducts();
		response.getWriter().write(productsArrayJson);
		return NONE;
		
	}
}
