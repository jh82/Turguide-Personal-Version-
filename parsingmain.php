<html>
<body>

<?
$servername = 'classroom.cs.unc.edu';
$username   = 'gibsonb';
$password   = 'zDpjelCQeho=\~*UbH,"';
$dbname     = 'gibsonbdb';

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//If artist: just given bandname + type
//If Venue: given venuename, city, or state, all space seperated
//TODO: SQL_ESCAPE_STRING for all these

$searchval = $_GET['searchval'];
$type  = $_GET['type']; //'Artist','Venue' - 'Event' later b/c no easy main 'key'



if($type == 'Artist')
{
	//CHECK - artist will need to be modified to return more than 1 artist with same name
	$result = $conn->query("
		SELECT *
		FROM Artists
		WHERE Artists.bname='$searchval'
		LIMIT 1
		");
	if(!$result) //query failed b/c bad search term
	{
		print "QUERY FAILED. GIVE THEM SOME ERROR STUFF";
	}
	
	
	$rarr = $result->fetch_assoc();
	
	$artkey = $rarr['artid'];
	
	$eresult = $conn->query("
		SELECT Events.evid
		FROM Events
		WHERE Events.fk_artid=$artkey
		ORDER BY Events.edate
		LIMIT 5
		");
	if(!$eresult)
	{
		print "No upcoming events for $searchval";
	}
	else
	{
		$upcoming = array();
		while($row = $eresult->fetch_row())
		{
			$upcoming[] = getEventInfo($row[0],$conn);
		}
	}
	
	$info = getArtistInfo($artkey,$conn);
	
	return json_encode(array('artistinfo' => $info, 'events' => $upcoming)); 
	//TODO check how to actually return all these json objects efficiently
	
	
}
elseif($type=='Venue')
{
	//Expects the Venue search options to be different set of info
	$vname = $_GET['vname'];
	$vcity = $_GET['vcity'];
	$vstate= $_GET['vstate'];
	
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
	if($vname==='' && vcity==='') //only state
	{
				
		//TODO how to retreive more than 1 page of results
		$vresult = $conn->query("
			SELECT Venues.vid
			FROM Venues
			WHERE Venues.vstate='$vstate'
			LIMIT 10
			");
		
		while($row = $vresult.fetch_row())
		{
			$vidstoget[] = $row[0];
			print $row[0]; //check
		}
	}
	elseif($vname==='' && vstate==='') //only city
	{
				//TODO how to retreive more than 1 page of results - maybe make js deal with it
		$vresult = $conn->query("
			SELECT Venues.vid
			FROM Venues
			WHERE Venues.vcity='$vcity'
			LIMIT 10
			");
		
		while($row = $vresult.fetch_row())
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
		
		while($row = $vresult.fetch_row())
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
		
		while($row = $vresult.fetch_row())
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
		
		while($row = $vresult.fetch_row())
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
		
		while($row = $vresult.fetch_row())
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
		
		while($row = $vresult.fetch_row())
		{
			$vidstoget[] = $row[0];
			print $row[0]; //check
		}
	}
	
	foreach ($vidstoget as $curvid)
	{
		returnedvs[] = getVenueInfo($curvid,$conn);
	}
	
	return json_encode(array('allvenues'=>$returnedvs));
}
	
	
	


			
	
	
	
	
	



?>


</body>
</html> 


