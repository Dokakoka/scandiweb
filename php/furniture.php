<?php

use DBWrapper\db;

class Furniture extends Product
{
    protected $height;
    protected $width;
    protected $length;

    public function __construct($sku, $height, $width, $length)
    {
        $this->sku = $sku;
        $this->height = $height;
        $this->width = $width;
        $this->length = $length;
    }

    public function addFurniture() {
        $furniture_data["sku"]=$this->getSku();
        $furniture_data["height"]=$this->getHeight();
        $furniture_data["width"]=$this->getWidth();
        $furniture_data["length"]=$this->getLength();
        $db = new db("localhost", "id20140945_root", "(-&no2y!v_nI4yOo", "id20140945_scandiweb");
        $db->insert("furniture", $furniture_data)->excute();
    }

    static function deleteFurniture($sku) {
        $db = new db("localhost", "id20140945_root", "(-&no2y!v_nI4yOo", "id20140945_scandiweb");
        $db->delete("furniture", "sku='$sku'")->excute();
    }

    public function setHeight($height)
    {
        $this->height = $height;
    }

    public function getHeight()
    {
        return $this->height;
    }

    public function setWidth($width)
    {
        $this->width = $width;
    }

    public function getWidth()
    {
        return $this->width;
    }

    public function setLength($length)
    {
        $this->length = $length;
    }

    public function getLength()
    {
        return $this->length;
    }

}
