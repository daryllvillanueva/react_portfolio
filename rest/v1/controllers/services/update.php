<?php
$conn = null;
$conn = checkDbConnection();
$services = new Services($conn);
$error = [];
$returnData = [];
if (array_key_exists("servicesid", $_GET)) {
    checkPayload($data);
    $services->services_aid = $_GET['servicesid'];
    $services->services_title = checkIndex($data, "services_title");
    $services->services_image = checkIndex($data, "services_image");
    $services->services_datetime = date("Y-m-d H:i:s");

    checkId($services->services_aid);
    // $services_title_old = checkIndex($data, "services_title_old");
    // comparetitle($services, $services_title_old, $services->services_title);
    $query = checkUpdate($services);
    returnSuccess($services, "services", $query);
}

checkEndpoint();