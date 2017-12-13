<?php
/*
	How to test:
	Use restful api tester
	base url: all artists
	base url/id: single artist
	base url?bname: search
	base url?random: random number
*/


include_once 'createfunctions.php';
include_once 'readfunctions.php';
include_once 'updateFunctions.php';
include_once 'deletefunctions.php';
include_once 'randomfunctions.php';
include_once 'getAll.php';
include_once 'searchFunctions.php';

$servername = 'classroom.cs.unc.edu';
$username   = 'gibsonb';
$password   = 'zDpjelCQeho=\~*UbH,"';
$dbname     = 'gibsonbdb';

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


/*

	POST: create
		brings you to landing page for making an artist (headers
	GET: read 
		If no extra path info	: return al artists
		if /idnum 				: return artist with that id
		if ?bname=... 			: return search results on that parameter
		if ?random=num			: return 
	PUT: update
		brings you to a similar landing page for updating info (last)
	DELETE: delete
		removes the artist from the based on id - only possible with ID
*/


$lastitem = pathinfo($_SERVER['PATH_INFO']);
/*
print_r('pathinfo:'.$_SERVER['PATH_INFO']);
print '<br>';
print_r($lastitem);
print '<br> basename: ';
print_r(((int) basename($_SERVER['PATH_INFO'])));
print '<br> GET count: ';
print_r(count($_GET));
print '<br> GET vals';
print_r($_GET);
print '<br>';
print_r(isset($_GET['bname']));
print '<br>';
print_r( $_GET['bname']);
print '<br>';
//print 'HERE';
*/

if ($_SERVER['REQUEST_METHOD'] === 'POST')
{
	print_r(var_dump($_POST));
	$fkartid  = (int) mysqli_real_escape_string($conn,$_POST['fkartid']);
	$fkvid    = (int) mysqli_real_escape_string($conn,$_POST['fkvid']);
	$edate    = mysqli_real_escape_string($conn,$_POST['edate']);
	$etime    = mysqli_real_escape_string($conn,$_POST['etime']);
	$price    = (int) mysqli_real_escape_string($conn,$_POST['price']);
	$head     = (int) mysqli_real_escape_string($conn,$_POST['head']);
	
	createEvent($conn,$fkartid,$fkvid,$edate,$etime,$price,$head);
	
}
elseif ($_SERVER['REQUEST_METHOD'] === 'GET')
{
	header('Content-type: application/json');
	
	if ( empty($_SERVER['PATH_INFO'])) //only 1 item, return everything - will gets mess it up?
	{
		//No search for events

		if ( isset($_GET['random']))
			{ //get random number of values
				print randomEvents($conn, (int) mysqli_real_escape_string($conn,$_GET['random']));
				
			}
		else
		{
			print getAllEvents($conn); //get all artists and return
		}
		
	}
	elseif ( ((int) basename($_SERVER['PATH_INFO'])) > 0 )//id here, must be greater than 0 can be id or GET params
	{
		//1) Check for id and 
		$curid = (int) basename($_SERVER['PATH_INFO']);
		print getEventInfo($curid,$conn);
				
	}
	else
	{
		//not the right amount in the path - check
	}
}
elseif ($_SERVER['REQUEST_METHOD'] === 'PUT')
{
	//redirect to update artist page - if it's ever made
}
elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE')
{
	//do path parsing and delete artist
}
else
{
	//failure, not valid http method
}


$conn->close();


?>