package Actions;

import java.io.BufferedReader;
import java.io.InputStreamReader;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.json.JSONObject;

import com.opensymphony.xwork2.ActionSupport;

import DAO.DataAccessObject;

public class CreateProductAction extends ActionSupport{

    public String execute() throws Exception{
        HttpServletRequest request = ServletActionContext.getRequest();
        HttpServletResponse response = ServletActionContext.getResponse();

        BufferedReader reader = new BufferedReader(new InputStreamReader(request.getInputStream()));
        String requestString = "";

        while(reader.ready()){
            requestString+=reader.readLine();
        }

        JSONObject requestJson = new JSONObject(requestString);
        boolean success = DataAccessObject.addProduct(Integer.parseInt(request.getAttribute("userId").toString()), requestJson);

        if(success){
            response.getWriter().write(new JSONObject().put("creation", true).toString());
        }    
        else{
            response.getWriter().write(new JSONObject().put("creation", false).put("error", "Some error occured while creation of product.").toString());
        }
        return NONE;
    }
}

