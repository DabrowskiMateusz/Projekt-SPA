 <?php  
   
 $connect = mysqli_connect("mysql15.mydevil.net", "m1211_Fusionek", "Fusionek123", "m1211_Test");  
 $output = array();  
 $query = "SELECT * FROM comments";  
 $result = mysqli_query($connect, $query);  
 if(mysqli_num_rows($result) > 0)  
 {  
      while($row = mysqli_fetch_array($result))  
      {  
           $output[] = $row;  
      }  
      echo json_encode($output);  
 }  
 ?>  




