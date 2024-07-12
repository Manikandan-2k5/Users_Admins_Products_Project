package Actions;

import java.io.BufferedReader;
import java.io.InputStreamReader;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.json.JSONObject;

import com.opensymphony.xwork2.ActionSupport;

import DAO.DataAccessObject;

public class DeleteProductAction extends ActionSupport{

    public String execute() throws Exception{
        HttpServletRequest request = ServletActionContext.getRequest();
        HttpServletResponse response = ServletActionContext.getResponse();

        BufferedReader reader = new BufferedReader(new InputStreamReader(request.getInputStream()));
        String requestString = "";

        while(reader.ready()){
            requestString+=reader.readLine();
        }

        JSONObject requestJson = new JSONObject(requestString);
        DataAccessObject.updateUserPrioritiesAfterDelete(Integer.parseInt(requestJson.getString("product_id")));
        boolean success = DataAccessObject.deleteProduct(Integer.parseInt(requestJson.getString("product_id")));

        if(success){
            response.getWriter().write(new JSONObject().put("deletion", true).toString());
        }    
        else{
            response.getWriter().write(new JSONObject().put("deletion", false).put("error", "Some error occured while deletion of product.").toString());
        }
        return NONE;
    }
}

