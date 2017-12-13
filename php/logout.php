<?php
session_start();

unset($_SESSION['username']);
unset($_SESSION['authsalt']);
unset($_SESSION['accid']);

if (isset($_COOKIE['LOGIN_AUTH']))
{
	setcookie('LOGIN_AUTH', $auth_cookie_val, time()-7000000, '/', 'wwwp.cs.unc.edu', true);
}

header('Content-type: application/json');
print(json_encode(true));
?>