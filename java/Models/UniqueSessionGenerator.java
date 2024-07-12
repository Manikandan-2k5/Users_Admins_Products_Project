package Models;

public class UniqueSessionGenerator {
    static String chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUWXYZ1234567890!@#$%^&*()";
    static int sessionLength = 32;

    public static String generateSession(){
        String session = "";
        for(int i=0; i<sessionLength; i++){
            int randomIndex = (int)(Math.random()*chars.length());
            session+=chars.charAt(randomIndex)+"";
        }
        return session;
    }
}
