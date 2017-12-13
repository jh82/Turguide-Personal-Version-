 <!DOCTYPE html>
<html>
<body>
<?php
error_reporting(E_ALL);

//Setting up server and connection
$servername = 'classroom.cs.unc.edu';
$username   = 'gibsonb';
$password   = 'zDpjelCQeho=\~*UbH,"';
$dbname     = 'gibsonbdb';

$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//remove possible duplicate tables
$conn->query('DROP TABLE IF EXISTS Accounts CASCADE;');
$conn->query('DROP TABLE IF EXISTS Artists CASCADE;');  
$conn->query('DROP TABLE IF EXISTS Venues CASCADE;'); 
$conn->query('DROP TABLE IF EXISTS Events CASCADE;'); 
$conn->query('DROP TABLE IF EXISTS FavArtists CASCADE;'); 
$conn->query('DROP TABLE IF EXISTS FavVenues CASCADE;'); 

//actually create tables
$conn->query("CREATE TABLE Accounts (
accid INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
uname VARCHAR(25) NOT NULL,
password VARCHAR(100) NOT NULL,
fname VARCHAR(25),
lname  VARCHAR(25),
home  VARCHAR(25)
)"); //Creates Players db
print "Start Accounts\n";
print_r( $conn->query("SELECT * FROM  Accounts"));

$conn->query("CREATE TABLE Artists (
artid INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
bname VARCHAR(25) NOT NULL,
website VARCHAR(50),
origin VARCHAR(25),
members  VARCHAR(200),
imgurl  VARCHAR(100)
)"); //Creates Artists db
print "Start Artists\n";
print_r( $conn->query("SELECT * FROM  Artists"));

$conn->query("CREATE TABLE Venues (
vid INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
vname VARCHAR(50) NOT NULL,
vcity VARCHAR(25),
vstate  VARCHAR(25),
maxcap  INT(5) UNSIGNED
)"); //Creates Players db
print "Start Venues\n";
print_r( $conn->query("SELECT * FROM  Venues"));

$conn->query("CREATE TABLE Events (
evid INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
fk_artid INT(6) UNSIGNED NOT NULL,
fk_vid INT(6) UNSIGNED NOT NULL,
edate DATE NOT NULL,
etime VARCHAR(5),
price DECIMAL(5,2),
head TINYINT(1)
)"); //Creates Players db
print "Start Events\n";
print_r( $conn->query("SELECT * FROM  Events"));

$conn->query("CREATE TABLE FavArtists (
fk_accid INT(6) UNSIGNED,
fk_artid INT(6) UNSIGNED
)"); //Creates Favorite Artists db
print "Start FavArtists\n";
print_r( $conn->query("SELECT * FROM  FavArtists"));

$conn->query("CREATE TABLE FavVenues (
fk_accid INT(6) UNSIGNED,
fk_vid INT(6) UNSIGNED
)"); //Creates Favorite Venues db
print "Start FavVenues\n";
print_r( $conn->query("SELECT * FROM  FavVenues"));


//load into Accounts
print "Inserting fake accounts\n";
$file_handle = fopen("fakeusers.csv", "r");
while (!feof($file_handle))
{
	$line = fgets($file_handle);
	if ($line != NULL)
	{
		$values = explode(',',$line);
		
		$uname = $values[0];
		$password = $values[1];
		$fname = $values[2];
		$lname = $values[3];
		$home  = $values[4]; //Should check if it has newline? Just displayed so don't matter
		
		//Make sure username doesn't already exist
		$result = $conn->query("SELECT accid 
					FROM Accounts
					WHERE uname='$uname'
					");
		$row_count = $result->num_rows;
		if($row_count == 1)
		{
			print $uname ;
			print " already exists\n"; //In actual new-use code, replace with warning to re-put info
			continue;
		}
		
		//Now do the inserts
		$stmt = $conn->prepare("
		INSERT INTO Accounts (uname,password,fname,lname,home) 
		VALUES(?,?,?,?,?)");
		$stmt->bind_param('sssss',$uname,$password,$fname,$lname,$home);
		if($stmt->execute())
		{
			
		}
		else{
			echo 'ACCOUNTS FAILURE\n';
		}
		$stmt->close();
	}
}
fclose($file_handle);
print "Fake accounts completed\n";
print_r( $conn->query("SELECT * FROM  Accounts"));

//load into Artists
print "Inserting fake artists\n";
$file_handle = fopen("fakebands.csv", "r");
while (!feof($file_handle))
{
	$line = fgets($file_handle);
	if ($line != NULL)
	{
		$values = explode(',',$line);
		
		$bname = $values[0];
		$website = $values[1];
		$origin = $values[2];
		$members = $values[3];
		$imgurl  = $values[4]; //Should check if it has newline? Just displayed so don't matter
		
		//Don't care if bands have duplicate names, so no checking
		
		
		//Now do the inserts
		$stmt = $conn->prepare("
		INSERT INTO Artists (bname, website,origin,members,imgurl) 
		VALUES(?,?,?,?,?)");
		$stmt->bind_param('sssss',$bname,$website,$origin,$members,$imgurl);
		if($stmt->execute())
		{
			
		}
		else{
			echo 'ARTISTS FAILURE\n';
		}
		$stmt->close();
	}
}
fclose($file_handle);
print "Fake artists completed\n";
print_r( $conn->query("SELECT * FROM  Artists"));


//load into Venues
print "Inserting fake venues\n";
$file_handle = fopen("fakevenues.csv", "r");
while (!feof($file_handle))
{
	$line = fgets($file_handle);
	if ($line != NULL)
	{
		$values = explode(',',$line);
		
		$vname = $values[0];
		$vcity = $values[1];
		$vstate = $values[2];
		$maxcap = $values[3];
		
		
		//Don't care if bands have duplicate names, so no checking
		
		
		//Now do the inserts
		$stmt = $conn->prepare("
		INSERT INTO Venues (vname,vcity,vstate,maxcap) 
		VALUES(?,?,?,?)");
		$stmt->bind_param('sssi',$vname,$vcity,$vstate,$maxcap);
		if($stmt->execute())
		{
			
		}
		else{
			echo 'VENUES FAILURE\n';
		}
		$stmt->close();
	}
}
fclose($file_handle);
print "Fake venues completed\n";
print_r( $conn->query("SELECT * FROM  Venues"));


//load into Events
print "Inserting fake events\n";
$file_handle = fopen("fakeevents.csv", "r");
while (!feof($file_handle))
{
	$line = fgets($file_handle);
	if ($line != NULL)
	{
		$values = explode(',',$line);
		
		$fkartid = $values[0];
		$fkvid = $values[1];
		$edate = $values[2];
		$etime = $values[3];
		$price  = $values[4];
		$head   = $values[5];//Should check if it has newline? Just 1/0 so shouldn't matter
		
		//Make sure username doesn't already exist
		$result = $conn->query("SELECT evid 
					FROM Events
					WHERE fk_artid=$fkartid
					AND fk_vid = $fkvid
					AND edate = '$edate'
					AND etime = '$etime'
					");
		$row_count = $result->num_rows;
		if($row_count > 0)
		{
			print "Event already exists\n"; //In actual new-use code, replace with warning to re-put info
			continue;
		}
		
		//Now do the inserts
		$stmt = $conn->prepare("
		INSERT INTO Events (fk_artid, fk_vid, edate, etime, price, head) 
		VALUES(?,?,?,?,?,?)");
		$stmt->bind_param('iissii',$fkartid,$fkvid,$edate,$etime,$price,$head);
		if($stmt->execute())
		{
			
		}
		else{
			echo 'EVENTS FAILURE\n';
		}
		$stmt->close();
	}
}
fclose($file_handle);
print "Fake events completed\n";
print_r( $conn->query("SELECT * FROM  Events"));


//load into FavArtists
print "Inserting fake favorite artists\n";
$file_handle = fopen("fakefaveartists.csv", "r");
while (!feof($file_handle))
{
	$line = fgets($file_handle);
	if ($line != NULL)
	{
		$values = explode(',',$line);
		
		$fkaccid = $values[0];
		$fkartid = $values[1];

		
		//Make sure username doesn't already exist
		$result = $conn->query("SELECT * 
					FROM FavArtists
					WHERE fk_accid=$fkaccid
					AND fk_artid=$fkartid
					");
		$row_count = $result->num_rows;
		if($row_count > 0)
		{
			print "Favorite already exists\n"; //In actual new-use code, replace with warning to re-put info
			continue;
		}
		
		//Now do the inserts
		$stmt = $conn->prepare("
		INSERT INTO FavArtists (fk_accid,fk_artid)
		VALUES(?,?)");
		$stmt->bind_param('ii',$fkaccid,$fkartid);
		if($stmt->execute())
		{
			
		}
		else{
			echo 'FAVARTISTS FAILURE\n';
		}
		$stmt->close();
	}
}
fclose($file_handle);
print "Fake favorite artists completed\n";
print_r( $conn->query("SELECT * FROM  FavArtists"));


//load into FavVenues
print "Inserting fake favorite venues\n";
$file_handle = fopen("fakefavvenues.csv", "r");
while (!feof($file_handle))
{
	$line = fgets($file_handle);
	if ($line != NULL)
	{
		$values = explode(',',$line);
		
		$fkaccid = $values[0];
		$fkvid = $values[1];

		
		//Make sure username doesn't already exist
		$result = $conn->query("SELECT * 
					FROM FavVenues
					WHERE fk_accid=$fkaccid
					AND fk_vid=$fkvid
					");
		$row_count = $result->num_rows;
		if($row_count > 0)
		{
			print "Favorite already exists\n"; //In actual new-use code, replace with warning to re-put info
			continue;
		}
		
		//Now do the inserts
		$stmt = $conn->prepare("
		INSERT INTO FavVenues (fk_accid,fk_vid)
		VALUES(?,?)");
		$stmt->bind_param('ii',$fkaccid,$fkvid);
		if($stmt->execute())
		{
			
		}
		else{
			echo 'FAVVENUES FAILURE\n';
		}
		$stmt->close();
	}
}
fclose($file_handle);
print "Fake favorite venues completed\n";
print_r( $conn->query("SELECT * FROM  FavVenues"));


?>




</body>
</html>