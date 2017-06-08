 <?php  
 //delete.php  
 $connect = mysqli_connect("mysql15.mydevil.net", "m1211_Fusionek", "Fusionek123", "m1211_Test");  
 $data = json_decode(file_get_contents("php://input"));  
 if(count($data) > 0)  
 {  
      $id = $data->id;  
      $query = "DELETE FROM happenings WHERE id='$id'";  
      if(mysqli_query($connect, $query))  
      {  
           echo 'Usunięto';  
      }  
      else  
      {  
           echo 'Błąd';  
      }  
 }  
 ?> 