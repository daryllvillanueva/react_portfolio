<?php
require '../../core/header.php';
require '../../core/functions.php';
require '../../models/Skills.php';

$conn = null;
$conn = checkDbConnection();

$skills = new Skills($conn);

$body = file_get_contents("php://input");
$data = json_decode($body, true);


if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    if (array_key_exists("skillsid", $_GET)) {

        checkPayload($data);
        $skills->skills_aid = $_GET['skillsid'];
        $skills->skills_is_active = trim($data["isActive"]);
        $skills->skills_datetime = date("Y-m-d H:i:s");
        checkId($skills->skills_aid);
        $query = checkActive($skills);
        http_response_code(200);
        returnSuccess($skills, "skills", $query);
    }
    checkEndpoint();
}

http_response_code(200);
// header('HTTP/1.0 401 Unauthorized');
checkAccess();