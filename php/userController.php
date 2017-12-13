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


$lastitem = end(explode('/',$_SERVER['PATH_TRANSLATED'])); //The id in post, type in get
$secondlast = explode('/',$_SERVER['PATH_TRANSLATED'])[count(explode('/',$_SERVER['PATH_TRANSLATED']))-2]; //type in post, nothing in get
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
	header('Content-type: application/json');
	//print_r(explode('/',$_SERVER['PATH_TRANSLATED']));
	//print_r($lastitem);
	//print_r($secondlast);
	//add new favorites row (venues or artists)
	if ($lastitem === 'artists' || $lastitem === 'venues')
	{
		//$fk_item = (int) $lastitem;
		if($lastitem === 'artists')
		{
			//print 'HERE';
			print addFavoriteArtist($conn,(int) $_SESSION['accid'],(int) $_POST['artid']);
			
		}
		else
		{
			print addFavoriteVenue($conn,(int) $_SESSION['accid'],(int) $_POST['venid']);
		}
	}
	else
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
			createUser($conn,$uname,$password,null,null,null,0);
			print json_encode(true);
		}
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
	elseif((((int)$lastitem) > 0) && $secondlast=== 'artists') //last item is id
	{
		$action = $_GET['action'];
		if($action === 'delete')
		{
			print deleteFavArtist($conn,(int) $_SESSION['accid'],(int)$lastitem);
		}
		//not the right amount in the path - check
	}
}
elseif ($_SERVER['REQUEST_METHOD'] === 'PUT')
{
	require_once('authenticate.php'); //user must be logged in to continue
	
	header('Content-type: application/json');
	//Password is assumed to not be set
	//update user info
	parse_str(file_get_contents("php://input"),$post_vars);
	$newhome  = $post_vars['home'];
	$newfname = $post_vars['fname'];
	$newlname = $post_vars['lname'];
	//$newpassword = $post_vars['password'];
	
	print updateAccount($conn, (int) $_SESSION['accid'],$newfname,$newlname,$newhome);
	
}
elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE')
{
	header('Content-type: application/json');
	//print_r(explode('/',$_SERVER['PATH_TRANSLATED']));
	//print_r($lastitem);
	//print_r($secondlast);
	//add new favorites row (venues or artists)
	if ($secondlast === 'artists' || $secondlast === 'venues')
	{
		$fk_item = (int) $lastitem;
		if($secondlast === 'artists')
		{
			//print 'HERE';
			deleteFavArtist($conn,(int) $_SESSION['accid'],$fk_item);
			
		}
		else
		{
			deleteFavVenue($conn,(int) $_SESSION['accid'],$fk_item);
		}
	}
	//delete something
}
else
{
	//failure, not valid http method
}


$conn->close();


?>