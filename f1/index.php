<?
	function curl($url) {
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
		$data = curl_exec($ch);
		curl_close($ch);
		return $data;
	}
	
	function decode($x) {
        	$decoded = json_decode($x, true);
        	return $decoded;
	}
	
	function getSchedule() {
		$schedule_decoded = decode(curl("http://ergast.com/api/f1/current.json"));
		
		$data = $schedule_decoded["MRData"]["RaceTable"]["Races"][17];
		
		return $data;
	}
?>
<!DOCTYPE html>
<html>
	<head>
		<title>F1 Calendar - chuac.me</title>
		<!-- <link rel="stylesheet" href="style.css" /> -->
		<script src="f1.js"></script>
	</head>
	<body onload="pushTimeOffset()" >
		<br><br><br>
		<div id="schedule" align="center">
			<?
				$sch = getSchedule();
				echo $sch["raceName"];
				echo $sch["time"];
			
			?>
		
		</div>
		<div id="time" align="center">
			to change
		</div>
		
	</body>
</html>