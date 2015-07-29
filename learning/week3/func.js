
function myfunc1(){

	var s=document.getElementById("state");
	while(s.hasChildNodes()){
	s.removeChild(s.firstChild);
	}
	if(document.getElementById("country").value.localeCompare("India")==0){
	
		var a=["","Andhra Pradesh","Andaman and Nicobar Islands","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Dadra and Nagar Havel","Daman and Diu","Delhi – National Capital Territory","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu & Kashmir","Jharkhand","Karnataka","Kerala","Lakshadweep","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Pondicherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"];
	
		for(var i=0;i<a.length;i++){
			var opt=document.createElement("OPTION");
			var t=document.createTextNode(a[i].toString());
			opt.appendChild(t);
			document.getElementById("state").appendChild(opt);
		}
		document.getElementById("state").disabled=false;
	}
	else if(document.getElementById("country").value.localeCompare("United States of America")==0)
	{
		var b=["","Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District Of Columbia","Florida","Georgia","Hawaii",
			"Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada",
			"New Hampshire","New Jersey","New Mexico","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island",
			"South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];

		for(var i=0;i<b.length;i++){
			var opt=document.createElement("OPTION");
			document.getElementById("state").options.add(opt);
			opt.text=b[i];
			opt.value=b[i];
		}
		document.getElementById("state").disabled=false;
	}
	else
	document.getElementById("state").disabled=true;
}

function myfunc3()
{

	var x=document.getElementById("ph");

	if(isNaN(parseInt(x.value))||x.value.length<10)
	{
		alert("Enter a valid number");
	}
}

function myfunc4()
{
	var x=document.getElementById("ph");
	if(x.value[0].localeCompare("7")&&x.value[0].localeCompare("8")&&x.value[0].localeCompare("9"))
		alert("Enter a valid number");

}

function myfunc5()
{
	document.getElementById("myDialog1").showModal();
}

function myfunc6()
{
	document.getElementById("myDialog2").showModal();
}

function myfunc7()
{
	document.getElementById("myDialog3").showModal();
}

function myfunc(){
		var x={};
		var w={};
		var y={};
		var z={};
		var c = document.getElementById("country");
		var cs = c.options[c.selectedIndex].text;
		var st = document.getElementById("state");
		var ss = st.options[st.selectedIndex].value;
		console.log(ss);

		if(document.getElementById("games").checked)
		{
			w.soccer=document.getElementById("soccer").checked;
			w.cricket=document.getElementById("cricket").checked;
			w.hockey=document.getElementById("hockey").checked;
		}
		if(document.getElementById("movie").checked)
		{
			y.action=document.getElementById("action").checked;
			y.horror=document.getElementById("horror").checked;
			y.comedy=document.getElementById("comedy").checked;
		}
		if(document.getElementById("reading").checked)
		{
			z.romance=document.getElementById("romance").checked;
			z.detective=document.getElementById("detective").checked;
			z.adventure=document.getElementById("adventure").checked;
		}
		x.games=w;
		x.movie=y;
		x.reading=z;
		var obj={
			"name":document.getElementById("name").value,
			"email":document.getElementById("email").value,
			"sex":document.getElementById("sex").value,
			"interests": x,
			"country":cs,
			"state":ss,
			"address":document.getElementById("address").value,
		};
		console.log(JSON.stringify(obj));

	}
