package Models;

import java.util.HashMap;

import org.json.JSONArray;
import org.json.JSONObject;

public class LRUCache{

    private HashMap<Integer, Node> cache = new HashMap<>();
    private int capacity = 7;
    private Node head, tail;

    public LRUCache(){
        this.head = new Node();
        this.tail = new Node();
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.head.prev = null;
        this.tail.next = null;
    }

    public void removeNode(Node node){
        Node left = node.prev;
        Node right = node.next;

        left.next = right;
        right.prev = left;

        node.prev = null;
        node.next =null;
    }

    public void addNode(Node node){
        node.next = this.head.next;
        node.prev = this.head;

        this.head.next.prev = node;
        this.head.next = node;
    }

    public void moveToFront(Node node){
        removeNode(node);
        addNode(node);
    }

    private void printList() {
        Node node = head.next;
        System.out.print("List: ");
        while (node != null && node != tail) {
            System.out.print(node.key+":"+node.value + " -> ");
            System.out.println();
            node = node.next;
        }
        System.out.println("TAIL");
    }

    public JSONObject get(int key){
        Node node = cache.get(key);
        if(node!=null){
            moveToFront(node);
            return node.value;
        }
        return null;

    }

    public void put(int key, JSONObject value){
        Node node = cache.get(key);
        if(node!=null){
            node.value = value;
            moveToFront(node);
        }
        else{
            Node newNode = new Node();
            newNode.key = key;
            newNode.value = value;
            if(capacity==cache.size()){
                Node lru = this.tail.prev;
                cache.remove(lru.key);
                removeNode(lru);
            }
            cache.put(key, newNode);
            addNode(newNode);
        }
    }

    public JSONArray toJson(){
        JSONArray productArray = new JSONArray();
        if(this.head==null){
            return null;
        }
        else if(this.head.next==null){
            return null;
        }
        else{
            Node node = this.head.next;
            while(node!=null && node!=tail){
                productArray.put(node.value);
                node = node.next;
            }
            return productArray;
        }

    }
}