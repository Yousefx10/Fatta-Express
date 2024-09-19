<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Simulate a simple request handler
$request_method = $_SERVER['REQUEST_METHOD'];
switch ($request_method) {
    case 'GET':
        echo json_encode(["message" => "Fatta Express API"]);
        break;
    case 'POST':
        handleOrder();
        break;
    default:
        http_response_code(405); // Method Not Allowed
        break;
}

function handleOrder() {
    $data = json_decode(file_get_contents("php://input"));
    
    if (!empty($data->meal) && !empty($data->customer)) {
        // Here you can add logic to process the order and store it in the database
        echo json_encode(["message" => "Order received", "order" => $data]);
    } else {
        echo json_encode(["message" => "Invalid order data"]);
    }
}
?>
