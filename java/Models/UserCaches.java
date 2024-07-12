package Models;

import java.util.HashMap;

public class UserCaches {
    public static HashMap<Integer, LRUCache> userCaches = new HashMap<>();

    public static void addUserCache(Integer userId, LRUCache cache){
        userCaches.put(userId, cache);
    }

    public static LRUCache getUserCache(Integer userId){
        if(userCaches.get(userId)!=null){
            return userCaches.get(userId);
        }
        userCaches.put(userId, new LRUCache());
        return userCaches.get(userId);
    }
}
