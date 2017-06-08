 <?php  
 $connect = mysqli_connect("mysql15.mydevil.net", "m1211_Fusionek", "Fusionek123", "m1211_Test");  
 $data = json_decode(file_get_contents("php://input"));  
 if(count($data) > 0)  
 {  
      $nick = mysqli_real_escape_string($connect, $data->nick);       
      $comment = mysqli_real_escape_string($connect, $data->comment); 
	  $rate = mysqli_real_escape_string($connect, $data->rate);	  
      $query = "INSERT INTO comments (nick, comment, rate) VALUES ('$nick', '$comment', '$rate')";  
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



