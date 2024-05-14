<?php
require '../../core/header.php';
require '../../core/functions.php';
require '../../models/Skills.php';
// check database connection
$conn = null;
$conn = checkDbConnection();
// make instance of classes
$skills = new Skills($conn);
// get payload
$body = file_get_contents("php://input");
$data = json_decode($body, true);

// // validate api key
if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
    checkApiKey();
    checkPayload($data);
    // get data
    $skills->skills_search = $data["searchValue"];
    checkKeyword($skills->skills_search);
    $query = checkSearch($skills);
    http_response_code(200);
    getQueriedData($query);
    // return 404 error if endpoint not available
    checkEndpoint();
}

http_response_code(200);
// when authentication is cancelled
// header('HTTP/1.0 401 Unauthorized');
checkAccess();