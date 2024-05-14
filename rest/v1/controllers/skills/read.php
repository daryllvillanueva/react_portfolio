<?php
$conn = null;
$conn = checkDbConnection();
$skills = new Skills($conn);
$error = [];
$returnData = [];

if (empty($_GET)) {
    $query = checkReadAll($skills);
    http_response_code(200);
    getQueriedData($query);
}

checkEndpoint();