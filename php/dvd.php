<?php
use DBWrapper\db;

require_once "product.php";

class DVD extends Product
{
    protected $size;

    public function __construct($sku, $size)
    {
        $this->sku = $sku;
        $this->size = $size;
    }

    public function setSize($size)
    {
        $this->size = $size;
    }

    public function getSize()
    {
        return $this->size;
    }

    public function addDvd() {
        $dvd_data["sku"]=$this->getSku();
        $dvd_data["size"]=$this->getSize();
        $db = new db("localhost", "id20140945_root", "(-&no2y!v_nI4yOo", "id20140945_scandiweb");
        $db->insert("dvds", $dvd_data)->excute();
    }

    static function deleteDvd($sku) {
        $db = new db("localhost", "id20140945_root", "(-&no2y!v_nI4yOo", "id20140945_scandiweb");
        $db->delete("dvds", "sku='$sku'")->excute();
    }
}