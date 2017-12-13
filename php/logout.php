<?php
session_start();

unset($_SESSION['username']);
unset($_SESSION['authsalt']);
unset($_SESSION['accid']);

header('Content-type: application/json');
print(json_encode(true));
?>