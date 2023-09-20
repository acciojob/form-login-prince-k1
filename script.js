function getFormvalue() {
    //Write your code here
	const form = document.getElementById("form1");
	const firstName = form[0].value;
	const lastName = form[1].value;
	alert(firstName+" "+ lastName);

}
