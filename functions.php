<?php
//TODO Split into seperate functions that can do URL parsing for the data


$servername = 'classroom.cs.unc.edu';
$username   = 'gibsonb';
$password   = 'zDpjelCQeho=\~*UbH,"';
$dbname     = 'gibsonbdb';

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//Write all of the PHP insert functions here for use later, including passed in values

//Gets all the info about an artist and [returns JSON-encoded data]
function getArtistInfo($artid, $server)
{
	$result = $server->query("SELECT *
						FROM Artists
						WHERE Artists.artid=$artid
						");
	//if query fails
	if(!$result)
	{
		print "GETARTIST FAILURE!";
		return null;
	}
	else
	{
		$rarr = $result->fetch_assoc();
		
		$artinfo->bandname = $rarr["bname"];
		$artinfo->website  = $rarr["website"];
		$artinfo->origin   = $rarr["origin"];
		$artinfo->members  = $rarr["origin"];
		$artinfo->imgurl   = $rarr["imgurl"];
		
		
		//TODO Do we want to include any event info here? upcoming, etc?
		print json_encode($artinfo);
		
		return json_encode($artinfo);
	}	
}

//Get all the info about a venue and [return JSON-encoded data]
function getVenueInfo($venid,$server)
{
	$result = $server->query("SELECT *
						FROM Venues
						WHERE Venues.vid=$venid
						");
	//if query fails
	if(!$result)
	{
		print "GETARTIST FAILURE!";
		return null;
	}
	else
	{
		$rarr = $result->fetch_assoc();
		
		$veninfo->vname  = $rarr["vname"];
		$veninfo->vcity  = $rarr["vcity"];
		$veninfo->vstate = $rarr["vstate"];
		$veninfo->maxcap = $rarr["maxcap"];
		
		print json_encode($artinfo);
		
		return json_encode($artinfo);
	}
}

//Gets all event info needed for an event. More complicated set of query due to fk and multiple artist queries needed. Takes in 1 id to get the other identifying info and calculates the rest
function getEventInfo($evid,$server)
{
	$result = $server->query("SELECT *
						FROM Events
						WHERE Events.vid=$evid
						");
	//if query fails
	if(!$result)
	{
		print "GETEVENT FAILURE!";
		return null;
	}
	else
	{
		/*Necessary steps:
		1) get initial query info like time, venue, and date to look for other artists
		2) loop through all artist ids from the query
		3) retrieve artist names for all these and place into object (including headliner category)
		4) get the venue info similarly
		5) add other info to object
		6) JSON and return it
		*/
		
		$rarr = $result->fetch_assoc();
		
		$edate = $rarr["edate"];
		$etime = $rarr["etime"];
		$venid = $rarr["fk_vid"];
		
		$allartids = $server->query("
				SELECT Events.fk_artid
				FROM Events
				WHERE Events.edate='$edate'
				AND Events.etime= '$etime'
				AND Events.fk_vid='$venid'
				");
		if(!$allartids)
		{ print "NO OTHER ARTISTS";
		}
		else
		{
			foreach($allartists.fetch_array() as $curartid)
			{
				//get the artist names here
			}
		}
		$veninfo =  $server->query("
				SELECT Venues.vname, Venues.vcity, Venues.vstate
				FROM Venues
				WHERE Venues.vid=$venid
						");
		$venname = $veninfo.fetch_array()[0];
		$vencity = $veninfo.fetch_array()[1];
		$venstate= $veninfo.fetch_array()[2];
		
		$outinfo->edate = $edate;
		$outinfo->etime = $etime;
		$outinfo->vname = $venname;
		$outinfo->vcity = $vencity;
		$outinfo->vstate= $venstate;
		$outinfo->price = $rarr["price"];
		
		//TODO artists output, incl headlining info
		
		return json_encode($outinfo);
		
		
	}
				
		
	
	
	
	
}













?>