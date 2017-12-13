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
			return json_encode(false);
		}
		$stmt->close();
		return json_encode(true);
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
			return json_encode(false);
		}
		$stmt->close();
		return json_encode(true);
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
			return json_encode(false);
		}
		$stmt->close();
		return json_encode(true);
	
}

function createUser($conn,$uname, $upassword, $fname, $lname, $home,$usereal)
{
	$stmt = $conn->prepare("
		INSERT INTO Accounts (uname,password,fname,lname,home,userealname)
		VALUES(?,?,?,?,?,?)");
		$stmt->bind_param('sssssi',$uname,md5($upassword),$fname,$lname,$home,$usereal);
		if($stmt->execute())
		{
			
		}
		else{
			return json_encode(false);
		}
		$stmt->close();
		return json_encode(true);
	
}

//ADD IN FAVORITES TABLES
function addFavoriteArtist($conn,$accid,$artid)
{
	$stmt = $conn->prepare("
		INSERT INTO FavArtists (fk_accid,fk_artid)
		VALUES(?,?)");
	$stmt->bind_param('ii',$accid,$artid);
	if($stmt->execute())
	{
		
	}
	else{
		return json_encode(false);
	}
	$stmt->close();
	return json_encode(true);
}

function addFavoriteVenue($conn,$accid,$venid)
{
	$stmt = $conn->prepare("
		INSERT INTO FavVenues (fk_accid,fk_vid)
		VALUES(?,?)");
	$stmt->bind_param('ii',$accid,$venid);
	if($stmt->execute())
	{
		
	}
	else{
		return json_encode(false);
	}
	$stmt->close();
	return json_encode(true);
}


?>