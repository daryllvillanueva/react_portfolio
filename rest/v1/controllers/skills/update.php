<?php
$conn = null;
$conn = checkDbConnection();
$skills = new Skills($conn);
$error = [];
$returnData = [];
if (array_key_exists("skillsid", $_GET)) {
    checkPayload($data);
    $skills->skills_aid = $_GET['skillsid'];
    $skills->skills_title = checkIndex($data, "skills_title");
    $skills->skills_image = checkIndex($data, "skills_image");
    $skills->skills_datetime = date("Y-m-d H:i:s");

    checkId($skills->skills_aid);
    // $skills_title_old = checkIndex($data, "skills_title_old");
    // comparetitle($skills, $skills_title_old, $skills->skills_title);
    $query = checkUpdate($skills);
    returnSuccess($skills, "skills", $query);
}

checkEndpoint();