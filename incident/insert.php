 <?php  
 //insert.php  
 $connect = mysqli_connect("mysql15.mydevil.net", "m1211_Fusionek", "Fusionek123", "m1211_Test");  
 $data = json_decode(file_get_contents("php://input"));  
 if(count($data) > 0)  
 {  
      $route = mysqli_real_escape_string($connect, $data->route);       
      $incident = mysqli_real_escape_string($connect, $data->incident); 
	  $place = mysqli_real_escape_string($connect, $data->place);
	  $user = mysqli_real_escape_string($connect, $data->user); 	  
      $query = "INSERT INTO happenings(route, incident, place, user) VALUES ('$route', '$incident', '$place', '$user')";  
      if(mysqli_query($connect, $query))  
      {  
           echo "Dodano do bazy";  
      }  
      else  
      {  
           echo 'Błąd';  
      }  
 }  
 ?> 



