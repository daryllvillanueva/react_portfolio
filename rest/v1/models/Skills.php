<?php

class Skills {
    public $skills_aid;
    public $skills_title;
    public $skills_image;
    public $skills_datetime;
    public $skills_created;
    

    public $skills_search;

    public $connection;
    public $lastInsertedId;
    public $tblSkills;

    public function __construct($db) {
        $this->connection = $db;
        $this->tblSkills = "skills";
    }

    public function create() {
        try {
            $sql= "insert into {$this->tblSkills} ";
            $sql .= "( skills_title, ";
            $sql .= "skills_image,";
            $sql .= "skills_created,";
            $sql .= "skills_datetime ) values (";
            $sql .= ":skills_title,";
            $sql .= ":skills_image,";
            $sql .= ":skills_created,";
            $sql .= ":skills_datetime )";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "skills_title" => $this->skills_title,
                "skills_image" => $this->skills_image,
                "skills_created" => $this->skills_created,
                "skills_datetime" => $this->skills_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex){
            $query = false;
        }

        return $query;
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblSkills} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function delete()
    {
        try {
            $sql = "delete from {$this->tblSkills} ";
            $sql .= "where skills_aid = :skills_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "skills_aid" => $this->skills_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function update()
    {
        try {
            $sql = "update {$this->tblSkills} set ";
            $sql .= "skills_title = :skills_title, ";
            $sql .= "skills_image = :skills_image, ";
            $sql .= "skills_datetime = :skills_datetime ";
            $sql .= "where skills_aid  = :skills_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "skills_title" => $this->skills_title,
                "skills_image" => $this->skills_image,
                "skills_datetime" => $this->skills_datetime,
                "skills_aid" => $this->skills_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function active()
    {
        try {
            $sql = "update {$this->tblSkills} set ";
            $sql .= "skills_is_active = :skills_is_active, ";
            $sql .= "skills_datetime = :skills_datetime ";
            $sql .= "where skills_aid  = :skills_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "skills_is_active" => $this->skills_is_active,
                "skills_datetime" => $this->skills_datetime,
                "skills_aid" => $this->skills_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function search()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblSkills} ";
            $sql .= "where skills_title like :skills_title ";
            $sql .= "order by skills_is_active desc, ";
            $sql .= "skills_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "skills_title" => "%{$this->skills_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}   