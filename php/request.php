<?php
require_once "dbwrapper.php";
use DBWrapper\db;

class request {
    public $res;
    public $path;
    public $request_method;

    public function __construct() {
        $this->res  = json_decode(file_get_contents("php://input"), true);
        $this->path = explode('/', $_SERVER['REQUEST_URI']);
        $this->request_method = $this->path[3];
        $this->checkRequest();
    }

    function checkRequest() {
        if($this->request_method == "add") {
            $this->postRequest();
        } else if($this->request_method == "get") {
            $this->getRequest();
        } 
        else if($this->request_method == "delete") {
            $this->deleteRequest();
        }
    }

    function postRequest() {
        $product = new Product();
        $product->setName($this->res["name"]);
        $product->setPrice($this->res["price"]);
        $product->setSku($this->res["sku"]);
        $product->addProduct();
    
        if($this->res['productType']=="dvd") {
            $dvd = new dvd($this->res["sku"], $this->res["size"]);
            $dvd->addDvd();
        } else if($this->res['productType']=="furniture") {
            $furniture = new Furniture($this->res['sku'], $this->res['height'], $this->res['width'], $this->res['length']);
            $furniture->addFurniture();
        } else if($this->res['productType']=="book") {
            $book = new Book($this->res['sku'], $this->res['weight']);
            $book->addBook();
        }
    }

    function getRequest() {
        $db = new db("localhost", "id20140945_root", "(-&no2y!v_nI4yOo", "id20140945_scandiweb");
        $dvd_data = $db->select("products.*, dvds.size", "dvds INNER JOIN products on products.sku= dvds.sku", 1);
        $furniture_data = $db->select("products.*, furniture.height, furniture.width, furniture.length", "furniture INNER JOIN products on products.sku = furniture.sku", 1);
        $book_data = $db->select("products.*, books.weight", "books INNER JOIN products on products.sku= books.sku", 1);
        $all_data[]= $dvd_data;
        $all_data[]= $furniture_data; 
        $all_data[]= $book_data; 
    
        echo json_encode($all_data);
    }

    function deleteRequest() {
        $sku = $this->path[5];
        $product_type = $this->path[4];
        if($product_type == "dvd") {
            DVD::deleteDvd($sku);
            $product = new Product();
            $product->deleteProduct($sku);
        } else if($product_type == "furniture") {
            Furniture::deleteFurniture($sku);
            $product = new Product();
            $product->deleteProduct($sku);
        } else if($product_type == "book") {
            Book::deleteBook($sku);
            $product = new Product();
            $product->deleteProduct($sku);
        }
    }
}


?>