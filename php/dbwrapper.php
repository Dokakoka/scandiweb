<?php
namespace DBWrapper;

class db {
    public $connection;
    public $sql;

    public function __construct($host, $user, $password, $database, $port=3306) {
        $this->connection = mysqli_connect($host, $user, $password, $database, $port);
    }

    public function select($columns, $table, $condition){
        $query = mysqli_query($this->connection, "SELECT $columns FROM $table Where $condition");
        $data = [];
        while($row = mysqli_fetch_assoc($query)) {
            $data[]= $row;
        }
        return $data;
    }

    public function insert($table, $data) {
        $columns="";
        $values="";
        foreach ($data as $key =>$value) {
            $columns .= "$key,";
            $values.="'$value',";
        }
        $columns = rtrim($columns, ",");
        $values = rtrim($values, ",");

        $this->sql = "INSERT INTO $table ($columns) Values ($values)";
        return $this;
    }

    public function delete($table, $condition) {
        $this->sql = "DELETE FROM $table Where $condition";
        return $this;
    }

    public function excute() {
        mysqli_query($this->connection, $this->sql);
        if(mysqli_affected_rows($this->connection)>0) {
            return true;
        } else {
            return false;
        }
    }
}