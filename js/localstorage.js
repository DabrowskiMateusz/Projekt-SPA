//Zapis i usuwanie do localstorage ulubionej trasy 
		document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('#btnSave').addEventListener('click', function(e) {
            e.preventDefault();

            var name = document.querySelector('input[name=name]').value;
            var surname = document.querySelector('input[name=surname]').value;
			var trasa1 = document.querySelector('input[name=trasa1]').value;
			var trasa2 = document.querySelector('input[name=trasa2]').value;
            localStorage.setItem('name', name);
            localStorage.setItem('surname', surname);
			localStorage.setItem('trasa1', trasa1);
            localStorage.setItem('trasa2', trasa2);
        });
		//Dodane danych do localstorage
        document.querySelector('#btnRead').addEventListener('click', function(e) {
            e.preventDefault();
            var name = '';
            var surname = '';
			var trasa1 = '';
			var trasa2 = '';
            if (localStorage.getItem('name') != null) {
                name = localStorage.getItem('name');
            }
            if (localStorage.getItem('surname') != null) {
                surname = localStorage.getItem('surname');
            }
			if (localStorage.getItem('trasa1') != null) {
                trasa1 = localStorage.getItem('trasa1');
            }
			if (localStorage.getItem('trasa2') != null) {
                trasa2 = localStorage.getItem('trasa2');
            }
			
			// Wyświetlenie danych z local storage w postaci alertu
			
            if (localStorage.getItem('name') != null & localStorage.getItem('surname') != null & localStorage.getItem('trasa1') != null & localStorage.getItem('trasa2') != null) {
                alert(name + ' ' + surname + " Twoja Trasa to: " +trasa1 +" - "+ trasa2);
            } else {
                alert('Nie podałeś swojej ulubionej trasy')
            }
        });

        document.querySelector('#btnDelete').addEventListener('click', function(e) {
            localStorage.removeItem('name');
            localStorage.removeItem('surname');
			localStorage.removeItem('trasa1');
            localStorage.removeItem('trasa2');
        });
    });