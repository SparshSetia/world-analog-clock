setInterval(Clock,1000)

var hour=document.querySelector('[Hours]');
var min=document.querySelector('[Minutes]');
var sec=document.querySelector('[Seconds]');
var k=0;
var c;
var d;

function Clock() {

	if(k==0) {
	var time= new Date();
	var hours=time.getHours();
	var mins=time.getMinutes();
	var secs=time.getSeconds();
	}

	else {
	var time= new Date();
	var hours=time.getHours();
	var mins=time.getMinutes();
	var secs=time.getSeconds();

	if(c=='India') {
		hours=hours-5;
		mins=mins-30;
		if(mins<=0)
		{
			hours=hours-1;
			mins=mins+60;
		}
		if(hours<=0)
		{
			hours=hours+12;
		}
	}

	if(c=='USA') {
		hours=hours+6;
		if(hours>12)
		{
			hours=hours-12;
		}
	}

	if(c=='Japan') {
		hours=hours-9;
		if(hours<=0)
		{
			hours=hours+12;
		}
	}

	if(d=='India') {
		hours=hours+5;
		mins=mins+30;
		if(mins>=60)
		{
			hours=hours+1;
			mins=mins-60;
		}
		if(hours>12)
		{
			hours=hours-12;
		}
	}

	if(d=='USA') {
		hours=hours-5;
		if(hours<=0)
		{
			hours=hours+12;
		}
	}

	if(d=='Japan') {
		hours=hours+9;
		if(hours>12)
		{
			hours=hours-12;
		}
	}

	}

	hour.style.setProperty('--a',hours);
	min.style.setProperty('--b',mins);
	sec.style.setProperty('--c',secs);

}

function myFunction1() {

	var v = document.getElementById("cc");
    v.style.display = "block";

    document.getElementById('displayCountry2').style.visibility='hidden';

	var x = document.getElementById("displayCountry1");
	x.style.visibility = 'hidden';
	var z=document.getElementById('mySelect1').value;
	document.getElementById('displayCountry1').innerHTML=z;
	x.style.visibility = 'visible';

	if(z=='London')
	{
		document.body.style.backgroundImage = "url('London.png')";
	}
	if(z=='USA')
	{
		document.body.style.backgroundImage = "url('USA.png')";
	}
	if(z=='India')
	{
		document.body.style.backgroundImage = "url('India.png')";
	}
	if(z=='Japan')
	{
		document.body.style.backgroundImage = "url('Japan.png')";
	}

	document.getElementById('displayCountry2').style.visibility='visible';
	document.getElementById('mySelect2').style.visibility='visible';
	document.getElementById('button2').style.visibility='visible';
	document.getElementById('p2').style.visibility='visible';
	c=z;

}

function myFunction2() {
	
	var x = document.getElementById("displayCountry2");
	x.style.visibility = 'hidden';
	var z=document.getElementById('mySelect2').value;
	document.getElementById('displayCountry2').innerHTML=z;
	x.style.visibility = 'visible';

	if(z=='London')
	{
		document.body.style.backgroundImage = "url('London.png')";
	}
	if(z=='USA')
	{
		document.body.style.backgroundImage = "url('USA.png')";
	}
	if(z=='India')
	{
		document.body.style.backgroundImage = "url('India.png')";
	}
	if(z=='Japan')
	{
		document.body.style.backgroundImage = "url('Japan.png')";
	}

	document.getElementById('displayCountry1').style.visibility='hidden';

	d=z;
	k=1;

}