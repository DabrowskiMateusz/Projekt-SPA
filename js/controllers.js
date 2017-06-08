// controler do komentarzy
 
        app.controller("usercontroller2", function($scope, $http){ 
// zapisz komentarzy		
      $scope.zapisz = function(){  
           $http.post(  
                "comments/zapisz.php",  
                {'nick':$scope.nick, 'comment':$scope.comment, 'rate':$scope.rate}  
           ).success(function(data){  
                alert(data);  
                $scope.nick = null;  
                $scope.comment = null;  
                $scope.rate = null; 
                $scope.wybierz();
           });  
      }
	  //wyświetlanie komentarzy
      $scope.wybierz = function(){  
           $http.get("comments/wybierz.php")  
           .success(function(data){  
                $scope.names = data;  
           });  
      }
	  //usuwanie komentarzy
       $scope.usun = function(id){  
           if(confirm("Are you sure you want to delete this data?"))  
           {  
                $http.post("comments/usun.php", {'id':id})  
                .success(function(data){  
                     alert(data);  
                     $scope.wybierz();  
                });  
           }  
           else  
           {  
                return false;  
           }  
      }  
 });
 // controller do losowych zdarzen
 app.controller("usercontroller", function($scope, $http){ 

	//Funkcja pokazujaca ukryty formularz do losowych zdarzen
	 $scope.frmToggle = function() {
        $('#happenForm').slideToggle();
    }
	// Funkcja umozliwiająca zapis do bazy
      $scope.insertData = function(){  
           $http.post(  
                "incident/insert.php",  
                {'route':$scope.route, 'incident':$scope.incident, 'place':$scope.place, 'user':$scope.user}  
           ).success(function(data){  
                alert(data);  
                $scope.route = null;  
                $scope.incident = null; 
				$scope.place = null;
				$scope.user = null;
				$scope.displayData();
				$('#happenForm').slideToggle();
           });  
      }  
	 // Funkcja wyświetlająca dodane informacje o zdarzeniach 
	  $scope.displayData = function(){  
           $http.get("incident/select.php")  
           .success(function(data){  
                $scope.names = data;  
           });    
      } 
	  // Funkcja usuwająca informacje o zdarzeniach
	$scope.deleteData = function(id){  
           if(confirm("Napewno chcesz usunąć zdarzenie?"))  
           {  
                $http.post("incident/delete.php", {'id':id})  
                .success(function(data){  
                     alert(data);  
                     $scope.displayData();  
                });  
           }  
           else  
           {  
                return false;  
           }
      } 	  
 });  