package Actions;

import java.io.BufferedReader;
import java.io.InputStreamReader;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.json.JSONObject;

import com.opensymphony.xwork2.ActionSupport;

import DAO.DataAccessObject;

public class UpdateProductPriority extends ActionSupport{
    public String execute() throws Exception{

        HttpServletRequest request = ServletActionContext.getRequest();
        HttpServletResponse response = ServletActionContext.getResponse();

        BufferedReader reader = new BufferedReader(new InputStreamReader(request.getInputStream()));
        String requestJsonString = "";
        while(reader.ready()){
            requestJsonString+=reader.readLine();
        }
        JSONObject requestJson = new JSONObject(requestJsonString);
        int productId = Integer.parseInt(requestJson.getString("productId"));
        DataAccessObject.updateUserProductPriority(Integer.parseInt(request.getAttribute("userId").toString()), productId);
        response.getWriter().write(new JSONObject().put("Updation", "success").toString());
        return NONE;
    }
}
