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
	$result = $conn->query("
		SELECT *
		FROM Artists
		WHERE Artists.bname='$searchval'
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
		print "No upcoming events for $$searchval";
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
	
	return array('artistinfo' => $info, 'events' => $upcoming); 
	//TODO check how to actually return all these json objects efficiently
	
	
}
elseif($type=='Venue')
{
	//Expects the Venue search options to be different set of info
	$vname = $_GET['vname'];
	$vcity = $_GET['vcity'];
	$vstate= $_GET['vstate'];
	
	//Do all error cases and check for any nulls/empty
	
	
	
	
	
}


?>


</body>
</html> 


