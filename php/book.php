<?php

use DBWrapper\db;

class Book extends Product
{
    protected $weight;

    public function __construct($sku, $weight)
    {
        $this->sku = $sku;
        $this->weight = $weight;
    }

    public function addBook() {
        $book_data["sku"]=$this->getSku();
        $book_data["weight"]=$this->getWeight();
        $db = new db("localhost", "id20140945_root", "(-&no2y!v_nI4yOo", "id20140945_scandiweb");
        $db->insert("books", $book_data)->excute();
    }

    static function deleteBook($sku) {
        $db = new db("localhost", "id20140945_root", "(-&no2y!v_nI4yOo", "id20140945_scandiweb");
        $db->delete("books", "sku='$sku'")->excute();
    }

    public function setWeight($weight)
    {
        $this->weight = $weight;
    }

    public function getWeight()
    {
        return $this->weight;
    }
}