<?php
use DBWrapper\db;

class Product
{
    public $sku;
    public $name;
    public $price;

    function addProduct() {
        $product_data["name"] = $this->getName();
        $product_data["price"] = $this->getPrice();
        $product_data["sku"] = $this->getSku();
        $db = new db("localhost", "id20140945_root", "(-&no2y!v_nI4yOo", "id20140945_scandiweb");
        $db->insert("products", $product_data)->excute();
    }

    function deleteProduct($sku) {
        $db = new db("localhost", "id20140945_root", "(-&no2y!v_nI4yOo", "id20140945_scandiweb");
        $db->delete("products", "sku='$sku'")->excute();
    }

    public function setSku($sku)
    {
        $this->sku = $sku;
    }

    public function getSku()
    {
        return $this->sku;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setPrice($price)
    {
        $this->price = $price;
    }

    public function getPrice()
    {
        return $this->price;
    }
}