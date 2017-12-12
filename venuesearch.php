<?php
include_once 'php/readfunctions.php';

$servername = 'classroom.cs.unc.edu';
$username   = 'gibsonb';
$password   = 'zDpjelCQeho=\~*UbH,"';
$dbname     = 'gibsonbdb';

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//Expects the Venue search options to be different set of info
	$vname = mysqli_real_escape_string($conn,$_GET['vname']);
	$vcity = mysqli_real_escape_string($conn,$_GET['vcity']);
	$vstate= mysqli_real_escape_string($conn,$_GET['vstate']);
	
	$vidstoget = array();
	$returnedvs = array();
	//Do all error cases and check for any nulls/empty
	/*Cases:
		  vname, vcity, vstate
		x vname, vcity
		x vname, vstate
		x vcity, vstate
		x vcity
		x vstate
		x vname
	*/
	if($vname=='' && $vcity=='') //only state
	{
				
		//TODO how to retreive more than 1 page of results
		$vresult = $conn->query("
			SELECT Venues.vid
			FROM Venues
			WHERE Venues.vstate='$vstate'
			LIMIT 10
			");
		
		while($row = $vresult->fetch_row())
		{
			$vidstoget[] = $row[0];
			print $row[0]; //check
		}
	}
	elseif($vname==='' && $vstate==='') //only city
	{
				//TODO how to retreive more than 1 page of results - maybe make js deal with it
		$vresult = $conn->query("
			SELECT Venues.vid
			FROM Venues
			WHERE Venues.vcity='$vcity'
			LIMIT 10
			");
		
		while($row = $vresult->fetch_row())
		{
			$vidstoget[] = $row[0];
			print $row[0]; //check
		}
	}
	elseif($vcity==='' && $vstate==='')//only name
	{
						//TODO how to retreive more than 1 page of results
		$vresult = $conn->query("
			SELECT Venues.vid
			FROM Venues
			WHERE Venues.vname='$vname'
			LIMIT 10
			");
		
		while($row = $vresult->fetch_row())
		{
			$vidstoget[] = $row[0];
			print $row[0]; //check
		}
		
	}
	elseif($vname==='') //city and state
	{
						//TODO how to retreive more than 1 page of results
		$vresult = $conn->query("
			SELECT Venues.vid
			FROM Venues
			WHERE Venues.vcity='$vcity'
			AND Venues.vstate='$vstate'
			LIMIT 10
			");
		
		while($row = $vresult->fetch_row())
		{
			$vidstoget[] = $row[0];
			print $row[0]; //check
		}
	}
	elseif($vstate==='') //city and name
	{
				$vresult = $conn->query("
			SELECT Venues.vid
			FROM Venues
			WHERE Venues.vcity='$vcity'
			AND Venues.vname='$vname'
			LIMIT 10
			");
		
		while($row = $vresult->fetch_row())
		{
			$vidstoget[] = $row[0];
			print $row[0]; //check
		}
	}
	elseif($vcity==='') //name and state
	{		
		$vresult = $conn->query("
			SELECT Venues.vid
			FROM Venues
			WHERE Venues.vname='$vname'
			AND Venues.vstate='$vstate'
			LIMIT 10
			");
		
		while($row = $vresult->fetch_row())
		{
			$vidstoget[] = $row[0];
			print $row[0]; //check
		}
	}
	else //name, city, and state
	{
			$vresult = $conn->query("
			SELECT Venues.vid
			FROM Venues
			WHERE Venues.vcity='$vcity'
			AND Venues.vstate='$vstate'
			AND Venues.vname='$vname'
			LIMIT 10
			");
		
		while($row = $vresult->fetch_row())
		{
			$vidstoget[] = $row[0];
			print $row[0]; //check
		}
	}
	
	foreach ($vidstoget as $curvid)
	{
		$returnedvs[] = getVenueInfo($curvid,$conn);
	}
	
	print json_encode(array('allvenues'=>$returnedvs));
	return json_encode(array('allvenues'=>$returnedvs));
}


?>