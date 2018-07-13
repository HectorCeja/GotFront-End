//variables

var salirbtn = document.getElementById("logout");
var salirbtnM = document.getElementById("llogout");

//funciones
function salir(){
	var out = confirm("¿Seguro que deseas salir?");

	if(out){
		setTimeout("location.href='login.html'", 5000);

	}else {
		//setTimeout("location.href='index.html'", 5000);
		return false;
	}
}


$(document).ready(function(){
			 $('.button-collapse').sideNav({
			      menuWidth: 300, // Default is 240
			      edge: 'left', // Choose the horizontal origin
			      closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
			    }
			);
			$('.slider').slider({full_width: true});
			
			$('.collapsible').collapsible({
      			accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
   			});
   			
   			
		});
		
$(document).ready(function(){
      $('.parallax').parallax();
});



	

function cargaDocumento(){
	//salirbtn.addEventListener("click",salir);
	//salirbtnM.addEventListener("click",salir);
}


//evento
window.addEventListener("load",cargaDocumento);

