var btnPassword = document.getElementById('changingPasswordBtn');
var placePassword = document.getElementById('changingPassword');

var btnEmail = document.getElementById('changingEmailBtn');
var placeEmail = document.getElementById('changingEmail');


var passwordChangingvalue = 0;
var emailChangingvalue = 0;

btnPassword.addEventListener("click", function() { revealPassword(passwordChangingvalue); });
btnEmail.addEventListener("click", function() { revealEmail(emailChangingvalue); });

function revealPassword(nr)
{
	if (passwordChangingvalue==0)
	{
		/*$(placePassword).addClass('settingsNV'); */
		$( "#changingPassword"  ).show();
		passwordChangingvalue=1;
	}
	else if (passwordChangingvalue==1)
	{
		/*$(placePassword).addClass('settingsV'); */
		$( "#changingPassword"  ).hide();
		passwordChangingvalue=0;
	}	
}

function revealEmail(nr)
{
	if (emailChangingvalue==0)
	{
		/*$(placePassword).addClass('settingsNV'); */
		$( "#changingEmail"  ).show();
		emailChangingvalue=1;
	}
	else if (emailChangingvalue==1)
	{
		/*$(placePassword).addClass('settingsV'); */
		$( "#changingEmail"  ).hide();
		emailChangingvalue=0;
	}	
}

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

