<?php
//TODO Split into seperate functions that can do URL parsing for the data


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
		//return json_encode (new stdClass); //This is an empty json b/c it failed
	}
	else
	{
		$rarr = $result->fetch_assoc();
		
		$artinfo->bandname = $rarr["bname"];
		$artinfo->website  = $rarr["website"];
		$artinfo->origin   = $rarr["origin"];
		$artinfo->members  = $rarr["members"];
		$artinfo->imgurl   = $rarr["imgurl"];
		
		//TODO Do we want to include any event info here? upcoming, etc?

		//print json_encode($artinfo);
		//header("Access-Control-Allow-Origin: *");
		//header("Content-type: application/json");
		
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
		print "GET VENUE FAILURE!";
		return json_encode (new stdClass); //This is an empty json b/c it failed
	}
	else
	{
		$rarr = $result->fetch_assoc();
		
		$veninfo->vname  = $rarr["vname"];
		$veninfo->vcity  = $rarr["vcity"];
		$veninfo->vstate = $rarr["vstate"];
		$veninfo->maxcap = $rarr["maxcap"];
		
		//header("Access-Control-Allow-Origin: *");
		//header("Content-type: application/json");
		//print json_encode($veninfo);
		
		return json_encode($veninfo);
	}
}

//Gets all event info needed for an event. More complicated set of query due to fk and multiple artist queries needed. Takes in 1 id to get the other identifying info and calculates the rest
function getEventInfo($evid,$server)
{
	$result = $server->query("SELECT *
						FROM Events
						WHERE Events.evid=$evid
						");
	//if query fails
	if(!$result)
	{
		print "GETEVENT FAILURE 1!";
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
		
		$arrartists = array();
		$arrheadliners = array();
		
		$allartids = $server->query("
				SELECT Events.fk_artid, Events.head
				FROM Events
				WHERE Events.edate='$edate'
				AND Events.etime= '$etime'
				AND Events.fk_vid=$venid
				");
			
		if(!$allartids)
		{ 
			//print "NO OTHER ARTISTS";
			//return json_encode (new stdClass); //This is an empty json b/c it failed TEST HERE
			$arrheadliners[] = 'NONE';
			$arrartists[] = 'NONE';
		}
		else
		{
			
			while( $tempart = $allartids->fetch_row())
			{
				$tempid = $tempart[0]; //the artist id
				$headline = $tempart[1]; //if they're a headliner
				$curinfo = $server->query("
					SELECT Artists.bname
					From Artists
					WHERE Artists.artid='$tempid'
					");
				
				if ($headline==1)
				{
					$arrheadliners[] = $curinfo->fetch_array()[0];
				}
				else
				{
					$arrartists[] = $curinfo->fetch_array()[0];
				}
				//get the artist names here
			}
		}
		$veninfo =  $server->query("
				SELECT Venues.vname, Venues.vcity, Venues.vstate
				FROM Venues
				WHERE Venues.vid=$venid
						");
		$temp = $veninfo->fetch_assoc();
		$venname = $temp["vname"];
		$vencity = $temp["vcity"];
		$venstate = $temp["vstate"];
		/*
		$venname = $veninfo->fetch_array()[0];
		$vencity = $veninfo->fetch_array()[1];
		$venstate= $veninfo->fetch_array()[2];
		*/
		//print "TEST  ";
		//print $veninfo->fetch_array();
		
		$outinfo->edate = $edate;
		$outinfo->etime = $etime;
		$outinfo->vname = $venname;
		$outinfo->vcity = $vencity;
		$outinfo->vstate= $venstate;
		$outinfo->price = $rarr["price"];
		$outinfo->headliners = $arrheadliners;
		$outinfo->otherbands = $arrartists;
		
		//artists will be an array
		//headliner will be a seperate field
		
		//TODO artists output, incl headlining info
		//header("Access-Control-Allow-Origin: *");
		//header("Content-type: application/json");
		//print json_encode($outinfo);
		
		return json_encode($outinfo);
		
		
	}
	
	
}


function getUserInfo($conn,$uname,$upword)
{
	$userinfo;
	
	$result = $conn->query("
		SELECT * 
		FROM Accounts
		WHERE Accounts.uname='$uname'
		AND Accounts.password='$upword'	
		LIMIT 1
		");
	if(!$result)
	{
		print 'User not exist\n';
	}
	else
	{
		$rarr = $result->fetch_assoc();
		$userinfo->uname = $rarr['uname'];
		$userinfo->fname = $rarr['fname'];
		$userinfo->lname = $rarr['lname'];
		$userinfo->home  = $rarr['home'];
		
	}
	
	return json_encode($userinfo);

}


?>