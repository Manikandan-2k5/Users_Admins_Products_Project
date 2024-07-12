package Actions;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.json.JSONObject;

import com.opensymphony.xwork2.ActionSupport;

import DAO.DataAccessObject;

public class GetMRSProducts extends ActionSupport{
	public String execute() throws Exception{
		
		HttpServletRequest request = ServletActionContext.getRequest();
		HttpServletResponse response = ServletActionContext.getResponse();
		
		int userId = (int) request.getAttribute("userId");
		String productsArrayJson = DataAccessObject.getMRSProductsOfUser(userId);
		if(productsArrayJson!=null){
			response.getWriter().write(productsArrayJson);
		}
		else{
			response.getWriter().write((new JSONObject().put("isError", true)).toString());
		}
		return NONE;
		
	}
}
