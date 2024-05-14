<?php
$conn = null;
$conn = checkDbConnection();
$skills = new Skills($conn);
$error = [];
$returnData = [];
if (array_key_exists("skillsid", $_GET)) {
    $skills->skills_aid = $_GET['skillsid'];
    checkId($skills->skills_aid);

    $query = checkDelete($skills);
    returnSuccess($skills, "skills", $query);
}

checkEndpoint();