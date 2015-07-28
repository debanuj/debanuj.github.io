

function f1()
{
if(!document.getElementById("name").value)
document.getElementById("name").style.border="2px solid red";
else
document.getElementById("name").style.border="0px";
}
function f2(x)
{
	if(x.value[0])
x.style.border="0px";
}
function f3()
{
	var n=document.getElementById("email").value.length;
	if(n>5)
	{
		var a=document.getElementById("email").value[n-4]+document.getElementById("email").value[n-3]+document.getElementById("email").value[n-2]+document.getElementById("email").value[n-1];
		if(a!==".com")
			document.getElementById("email").style.border="2px solid red";
		else
			document.getElementById("email").style.border="0px";
	}
	else
		document.getElementById("email").style.border="2px solid red";
}
function f4(n)
{
	if(!n)
	{
		document.getElementById("email").style.border="0px";
		document.getElementById("name").style.border="0px";
	}
}

function f5(x)
{
	x.style.visibility="visible";
}

function f6(x)
{
	x.style.visibility="hidden";
}

var k;

function f7(x)
{
var a="images/fulls/0"+x+".jpg";
console.log(a.toString());
document.getElementById("wrap").style.display="block";
document.getElementById("wrap").style.zIndex=1;
document.getElementById("imgc").style.display="block";
document.getElementById("ibr").style.display="inline-block";
document.getElementById("ibl").style.display="inline-block";
document.getElementById("ibx").style.display="inline-block";
document.getElementById("inv_butl").style.display="inline-block";
document.getElementById("inv_butr").style.display="inline-block";
document.getElementById("inv_butx").style.display="inline-block";
k=x;
f9(x);
}

function f8()
{
document.getElementById("wrap").style.display="none";
document.getElementById("imgc").style.display="none";
document.getElementById("ibr").style.display="none";
document.getElementById("ibl").style.display="none";
document.getElementById("ibx").style.display="none";
document.getElementById("inv_butl").style.display="none";
document.getElementById("inv_butr").style.display="none";
document.getElementById("inv_butx").style.display="none";
}

function f9(x)
{
	switch(x){
	case 1:
		document.getElementById("imgc").style.backgroundImage="url(images/fulls/01.png)";
		break;
	case 2:
		document.getElementById("imgc").style.backgroundImage="url(images/fulls/02.jpg)";
		break;
	case 3:
		document.getElementById("imgc").style.backgroundImage="url(images/fulls/03.jpg)";
		break;
	case 4:
		document.getElementById("imgc").style.backgroundImage="url(images/fulls/04.jpg)";
		break;
	case 5:
		document.getElementById("imgc").style.backgroundImage="url(images/fulls/05.jpg)";
		break;
	case 6:
		document.getElementById("imgc").style.backgroundImage="url(images/fulls/06.jpg)";
		break;
	}
}

function next()
{
	if(k==6)
	k=0;
++k;
f9(k);
}

function prev()
{
	if(k==1)
	k=8;
--k;
f9(k);
}


function myfunc()
{
	var obj={};
	obj.name=document.getElementById("name").value;
	obj.email=document.getElementById("email").value;
	obj.message=document.getElementById("message").value;
	console.log(JSON.stringify(obj));
	document.forms["frm"].reset();
}


