$(document).ready(function (){

	$(".nav a").on('click', function () {
	        $("#myNavbar").removeClass("in").addClass("collapse");
	    });
});


function Redirect(){
		window.location="http://www.google.com";
	}

function validate(){
	var getName = document.getElementById("name").value;
	var getEmail = document.getElementById("email").value;
	var getNumber = document.getElementById("number").value;
	var getMessage = document.getElementById("message").value;
	var gete_msg = document.getElementById("e_msg");
	var text;

	gete_msg.style.padding = "10px";

	if(getName.length < 4){
		text = "Please Enter Valid Name";
		gete_msg.innerHTML = text;
		return false;
	}
	if(getEmail.indexOf("@") == -1 || getEmail.length <5){
		text="Please Enter Valid Email";
		gete_msg.innerHTML = text;
		return false;
	}
	if(isNaN(getNumber) || getNumber < 10){
		text="Please Enter Valid Phone Number"
		gete_msg.innerHTML = text;
		return false;
	}
	if(getMessage.length <= 120){
		text = "Please Enter More Than 120 Characters";
		gete_msg.innerHTML = text;
		return false;
	}
	alert("Form Submitted Successfully");
	return true;

}

