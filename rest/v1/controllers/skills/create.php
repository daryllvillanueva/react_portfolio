<?php
$conn = null;
$conn = checkDbConnection();
$skills = new Skills($conn);
if (array_key_exists("skillsid", $_GET)) {
    checkEndpoint();
}
checkPayload($data);
$skills->skills_title = checkIndex($data, "skills_title");
$skills->skills_image= checkIndex($data, "skills_image");
$skills->skills_created = date("Y-m-d H:i:s");
$skills->skills_datetime = date("Y-m-d H:i:s");

// istitleExist($skills, $skills->skills_title);

$query = checkCreate($skills);
returnSuccess($skills, "skills", $query);