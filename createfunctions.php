<?php

function createArtist($conn,$bname,$website,$origin,$members,$imgurl)
{
	$stmt = $conn->prepare("
		INSERT INTO Artists (bname, website,origin,members,imgurl) 
		VALUES(?,?,?,?,?)");
		$stmt->bind_param('sssss',$bname,$website,$origin,$members,$imgurl);
		if($stmt->execute())
		{
			
		}
		else{
			print 'Artist insert failure\n';
		}
		$stmt->close();
}

function createVenue($conn,$vname,$vcity,$vstate,$maxcap)
{
	$stmt = $conn->prepare("
		INSERT INTO Venues (vname,vcity,vstate,maxcap) 
		VALUES(?,?,?,?)");
		$stmt->bind_param('sssi',$vname,$vcity,$vstate,$maxcap);
		if($stmt->execute())
		{
			
		}
		else{
			print 'create Venue failure\n';
		}
		$stmt->close();
}

function createEvent($conn,$fkartist,$fkvid,$edate,$etime,$price,$head)
{
	$stmt = $conn->prepare("
		INSERT INTO Events (fk_artid, fk_vid, edate, etime, price, head) 
		VALUES(?,?,?,?,?,?)");
		$stmt->bind_param('iissii',$fkartid,$fkvid,$edate,$etime,$price,$head);
		if($stmt->execute())
		{
			
		}
		else{
			print 'Event insert failure\n';
		}
		$stmt->close();
	
}

function createUser($conn,$uname, $upassword, $fname, $lname, $home)
{
	$stmt = $conn->prepare("
		INSERT INTO Accounts (uname,password,fname,lname,home)
		VALUES(?,?,?,?,?)");
		$stmt->bind_param('sssss',$uname,$upassword,$fname,$lname,$home);
		if($stmt->execute())
		{
			
		}
		else{
			print 'Account insert failure\n';
		}
		$stmt->close();
	
}

//ADD IN FAVORITES TABLES


?>