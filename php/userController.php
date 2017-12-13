<?php
/*
	How to test:
	Use restful api tester
	base url: all artists
	base url/id: single artist
	base url?bname: search
	base url?random: random number
*/
session_start();



include_once 'createfunctions.php';
include_once 'readfunctions.php';
include_once 'updateFunctions.php';
include_once 'deletefunctions.php';
include_once 'randomfunctions.php';
include_once 'getAll.php';
include_once 'searchFunctions.php';
include_once 'userFavorites.php';

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


$lastitem = end(explode('/',$_SERVER['PATH_TRANSLATED']));
//print $lastitem;
//print_r($lastitem);
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
	//Check if uname already exists, it it does return false
	$uname = $_POST['username'];
	$password = $_POST['password'];
	//print_r($uname);
	//print_r($password);
	$badresult = $conn->query("
				SELECT COUNT(*)
				FROM Accounts
				WHERE Accounts.uname='$uname'");
	$nummatch = $badresult->fetch_array()[0];
	//print_r($nummatch);
	if($nummatch>0) //query returns anything means username already exists
	{ print json_encode(false); }
	else
	{
		createUser($conn,$uname,$password,null,null,null);
		print json_encode(true);
	}
	//singup / create user - and return successful
	
}
elseif ($_SERVER['REQUEST_METHOD'] === 'GET')
{
	require_once('authenticate.php'); //user must be logged in to continue
	
	header('Content-type: application/json');
	
	if ( empty($_SERVER['PATH_INFO'])) //only 1 item, return everything - will gets mess it up?
	{
		
	}
	elseif ( $lastitem === 'venues' || $lastitem === 'artists' )//asking for all favorite artists or venues
	{
		//print "HERE";
		//header('Content-type: application/json');
		
		
		if($lastitem === 'venues')
		{
			if ( isset($_GET['random']))
			{
				//print "NOW HERE";
				//print_r($_GET['random']);
				print randomUserVenues($conn,(int) $_SESSION['accid'],(int) $_GET['random']);
			}
			else //get venues
			{
				print allUserVenues($conn,$_SESSION['accid']);
			}
		}
		else
		{
			//print "HERE";
			if ( isset($_GET['random']))
			{
				//print "NOW HERE";
				//print_r($_GET['random']);
				print randomUserArtists($conn,(int) $_SESSION['accid'],(int) $_GET['random']);
			}
			else{
			//get artists
				print allUserArtists($conn,(int)$_SESSION['accid']);
			}
		}
				
	}
	else
	{
		//not the right amount in the path - check
	}
}
elseif ($_SERVER['REQUEST_METHOD'] === 'PUT')
{
	//update something user related
}
elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE')
{
	//delete something
}
else
{
	//failure, not valid http method
}


$conn->close();


?>