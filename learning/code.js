(function ()
{
	var a=["Basic_Calculator","Date_Time_Calculator","Mortgage_Calculator"], b=[basic_calculator,date_time_calculator,mortgage_calculator],flag1=0,flag2=0,flag3=0,flag11=0,flag22=0,flag33=0;
	(function createbutton()
	{
		for(var i=0;i<a.length;i++)
		{
			var newElement=document.createElement("input");
			newElement.id=a[i];
			newElement.style.position="absolute";
			newElement.type="radio";
			newElement.style.marginTop="3%";
			newElement.style.marginLeft="13%";
			newElement.style.float="left";
			newElement.name="button";
			newElement.style.id=i.toString();
			document.body.appendChild(newElement);
			document.getElementById(a[i]).addEventListener("click",b[i]);
			var newElement2=document.createElement("P");
			newElement2.style.marginLeft="15%";
			newElement2.style.marginTop="3%";
			newElement2.style.right="0%";
			newElement2.style.position="relative";
			newElement2.style.float="left";
			var t=document.createTextNode(a[i]);
			newElement2.appendChild(t);
			document.body.appendChild(newElement2);
		}
		var main_cont=document.createElement("div");
		main_cont.style.height="500px";
		main_cont.style.width="400px"
		main_cont.style.border="2px solid black";
		main_cont.style.marginLeft="30%";
		main_cont.style.position="absolute";
		main_cont.style.top="15%";
		main_cont.style.textAlign="center";
		main_cont.id="main_cont";
		document.body.appendChild(main_cont);
	})();
	function buttons()
	{
		var key_id=["mc","mp","mm","mr","cls","can","rem","per","seven","eight","nine","plu","four","five","six","min","one","two","three","mul","dot","zero","eq","div"],key_value=["MC","M+","M-","MR","CLS","CAN","REM","%","7","8","9","+","4","5","6","-","1","2","3","x",".","0","=","/"];

		for(var i=0;i<24;i++)
		{
			var button=document.createElement("input");
			button.type="button";
			button.id=key_id[i];
			button.value=key_value[i];
			button.style.top= "5%";
			button.style.left="-2%";
			button.style.marginTop= "4%";
			button.style.marginLeft= "4%";
			button.style.height= "10%";
			button.style.width= "20%";
			button.style.position= "relative";
			button.display= "inline-block";
			button.style.border= "2px solid black";
			button.style.fontSize= "25px";
			var main_cont=document.getElementById("main_cont");
			document.getElementById("main_cont").appendChild(button);
			button=document.getElementById(button.id);

			calc_assign_funclty(button.id);
		}
	}
	
	function display()
	{
		var dis=document.createElement("input");
		dis.type="text";
		dis.style.position= "relative";
		dis.id="dis";
		dis.style.height= "40px";
		dis.style.width= "92%";
		dis.style.top= "20px";
		dis.style.border= "2px solid black";
		dis.style.direction="rtl";
		dis.style.fontSize= "30px";
		document.getElementById("main_cont").appendChild(dis);
	}
	function radio()
	{
		var a=["Date_Difference","Time_Difference","Cal_Fututre_Date"],b=[d_diff,t_diff,f_date];
		for(var i=0;i<a.length;i++)
		{
			var newElement=document.createElement("input");
			newElement.id=a[i];
			newElement.style.position="relative";
			newElement.type="radio";
			newElement.style.marginTop="3%";
			newElement.style.marginLeft="18%";
			newElement.style.float="left";
			newElement.name="dbutton";
			newElement.style.id=i.toString();
			document.getElementById("main_cont").appendChild(newElement);
			document.getElementById(a[i]).addEventListener("click",b[i]);
			var newElement2=document.createElement("P");
			newElement2.style.marginLeft="-18%";
			newElement2.style.marginTop="8%";
			newElement2.style.right="0%";
			newElement2.style.position="relative";
			newElement2.style.float="left";
			var t=document.createTextNode(a[i]);
			newElement2.appendChild(t);
			document.getElementById("main_cont").appendChild(newElement2);
		}
	}
	function d_diff()
	{
		flag11++;
		flag22=0;
		flag33=0;
		if(flag11==1)
		{
			removal();
			radio();
			var a=["Enter the Starting Date:","Enter the Closing Date:","The Difference:"];
			var b="dd-mm-yyyy";
			var c="d_diff";
			layout(a,b,c,1);
			document.getElementById("d_diff00").addEventListener("click",dates);
		}
	}
	function t_diff()
	{
		flag11=0;
		flag22++;
		flag33=0;
		if(flag22==1)
		{
			removal();
			radio();
			var a=["Enter the Starting Time:","Enter the Closing Time:","The Difference:"];
			var b="hh-mm-ss";
			var c="t_diff";
			layout(a,b,c,1);
			document.getElementById("t_diff00").addEventListener("click",times);
		}
	}
	function f_date()
	{
		flag11=0;
		flag22=0;
		flag33++;
		if(flag33==1)
		{
			removal();
			radio();
			var a=["Enter the Starting Date & Time:","Enter the Interval:","The Future Date & Time:"];
			var b="hh-mm-ss-dd-mm-yyyy";
			var c="f_diff";
			layout(a,b,c,1);
			document.getElementById("f_diff00").addEventListener("click",both);
		}
	}
	function layout(a,b,c,n)
	{
		for(var i=0;i<a.length;i++)
		{
			var h=document.createElement("h3");
			h.style.marginBottom="0%";
			h.style.marginTop="5%";
			var txt=document.createTextNode(a[i]);
			h.appendChild(txt);
			document.getElementById("main_cont").appendChild(h);
			var txt=document.createElement("input");
			txt.id=c+(""+i);
			txt.type="text";
			txt.placeholder=b;
			txt.style.position= "relative";
			txt.style.height= "40px";
			txt.style.width= "92%";
			txt.style.top= "10px";
			txt.style.border= "2px solid black";
			txt.style.fontSize= "30px";
			document.getElementById("main_cont").appendChild(txt);
		}
		cal_res_button(c,n);
	}
	function heading(t)
	{
		var h=document.createElement("h3");
		h.style.marginBottom="0%";
		h.style.marginTop="15%";
		var txt=document.createTextNode(t);
		h.appendChild(txt);
		document.getElementById("main_cont").appendChild(h);
	}

	function basic_calculator()
	{
		flag1++;
		flag2=0;
		flag3=0;
		if(flag1==1)
		{
			removal();
			display();
			buttons();
		}

	}
	function date_time_calculator()
	{
		flag1=0;
		flag2++;
		flag3=0;
		if(flag2==1)
		{
			removal();
			radio();

		}
	}
	function mortgage_calculator()
	{
		flag1=0;
		flag2=0;
		flag3++;
		if(flag3==1)
		{
			removal();
			var a=["Loan Amount:","Interest:","Time Period(in months):","EMI:"];
			var b="";
			var c="mort_calc";
			layout(a,b,c,2);
			document.getElementById("mort_calc1").setAttribute("input","disabled");
			document.getElementById("mort_calc1").setAttribute("placeholder","@10% p.a.");
			document.getElementById("mort_calc00").addEventListener("click",f111);
			document.getElementById("mort_calc11").addEventListener("click",f222);
		}
	}
	function removal()
	{
		var main_cont=document.getElementById("main_cont");
		while(main_cont.hasChildNodes())
		main_cont.removeChild(main_cont.firstChild);	
	}
	function cal_res_button(c,n)
	{
		var a=["Calculate","Reset"],b=0;
		for(var i=0;i<n;i++)
		{
			var button=document.createElement("input");
			button.id=c+""+i+i;
			button.type="button";
			button.style.marginTop= "10%";
			button.style.marginLeft= "2%";
			button.style.height= "10%";
			button.style.width= "20%";
			button.style.position= "relative";
			button.display= "inline-block";
			button.style.border= "2px solid black";
			button.value=a[b];
			b++;
			var main_cont=document.getElementById("main_cont");
			document.getElementById("main_cont").appendChild(button);
		}
	}

	function calc_assign_funclty(a)
	{
		switch(a)
		{
			case "mc":
			document.getElementById(a).addEventListener("click",mc1);
			break;
			case "mm":
			document.getElementById(a).addEventListener("click",mm1);
			break;
			case "mp":
			document.getElementById(a).addEventListener("click",mp1);
			break;
			case "mr":
			document.getElementById(a).addEventListener("click",mr1);
			break;
			case "cls":
			document.getElementById(a).addEventListener("click",cl);
			break;
			case "can":
			document.getElementById(a).addEventListener("click",cn);
			break;
			case "rem":
			document.getElementById(a).addEventListener("click",re);
			break;
			case "per":
			document.getElementById(a).addEventListener("click",per);
			break;
			case "plu":
			document.getElementById(a).addEventListener("click",ad);
			break;
			case "min":
			document.getElementById(a).addEventListener("click",su);
			break;
			case "mul":
			document.getElementById(a).addEventListener("click",mu);
			break;
			case "eq":
			document.getElementById(a).addEventListener("click",f3);
			break;
			case "div":
			document.getElementById(a).addEventListener("click",di);
			break;
			case "dot":
			document.getElementById(a).addEventListener("click",function(){dt(this.value)});
			break;
			default:
			document.getElementById(a).addEventListener("mousedown",f2);
			document.getElementById(a).addEventListener("mouseup",function(){f1(this.value)});
			break;
		}
	}











//code for basic calculator:



var x,y,dn=0,mn=0,an=0,sn=0,c=0,pe=0,rr=0,d=0,e=1,m=0;

function mc1()
{
	m=0;
}
function mp1()
{
	m+=Number(document.getElementById('dis').value);
}	

function mm1()
{
	m-=Number(document.getElementById('dis').value);
}
function mr1()
{
	document.getElementById('dis').value=m;
}	

function f1(b)	
{
	if(e!==0)
	{	
		var a=document.getElementById('dis');
		a.value=a.value+b;
		e++;
	}	
}
				
var a=[];

	
function di()
{
	x=document.getElementById('dis').value;
	if(c==0||c==2)
	{	
		dn=1;
		c=1;
		d=0;
		e=0;		
	}
}

	

function mu()
{
	x=document.getElementById('dis').value;
	if(c==0||c==2)
	{
		mn=1;
		c=1;
		d=0;
		e=0;
	}
}

	
function ad()
{
	x=document.getElementById('dis').value;
	if(c==0||c==2)
	{
		an=1;
		c=1;
		d=0;		
		e=0;	
	}
	
}

	

function su()
	
{
		
	x=document.getElementById('dis').value;
		
	if(c==0||c==2)
		
	{
			
		sn=1;
			
		c=1;
		d=0; 
		e=0;
			
	}
	
}

	

function per()
	
{
		
	if(c==1&&pe==0)
		
	{
			
		y=Number(document.getElementById('dis').value)*x/100;
			
		pe=1;
					
	}
		
	else
 if((c==0||c==2)&&pe==0)		
	{
			
		pe=2;
			
		c=1;
		
	}
	
}

	

function re()
	
{
	x=document.getElementById("dis").value;

	if(c==0||c==2)
	{
		rr=1;
		c=1;
		d=0;
		e=0;		
	}	
}




function dt(b)
{
	d++;
	if(d==1&&e!==0)
	{
		document.getElementById("dis").value+=b+"0";
		e=-1;
	}
	else if(d==1&&e==0)
	{
		document.getElementById("dis").value="0"+b+"0";
		e=-1;
	}
}

function cl()
{
	document.getElementById('dis').value="";
	c=0;
	x=0;
	y=0;
	dn=0;
	mn=0;
	an=0;
	sn=0;
	pe=0;
	rr=0;
	d=0;
}

function cn()
{
	if(e==0)
	{
		c=0;
	}	
	else
	{
		document.getElementById('dis').value=document.getElementById('dis').value.substr(0,document.getElementById('dis').value.length-1);
		e--;
	}
}		

function f2()
	
{
		
	if(e==0||c==2)
		
	{
				
		document.getElementById("dis").value=" ";

		e++;
		if(c==2)
		{
		c=0;
		}		
	}
	
if(e==-1)
	{
		var s=document.getElementById('dis').value;
		var n=s.length;
		document.getElementById('dis').value=s.substr(0,n-1);
		e=1;
	}			
	
}

	
function f3()
{	

	if(pe==0&&c==1)
		
	{
			
		if(an==1)
			
		{
				
			document.getElementById("dis").value=Number(x)+Number(document.getElementById("dis").value);
					
			an=0;
			
		}
			
		if(sn==1)
			
		{
				
			document.getElementById("dis").value=Number(x)-Number(document.getElementById("dis").value);
					
			sn=0;
			
		}
			
		if(dn==1)
				
		{
			document.getElementById("dis").value=Number(x)/Number(document.getElementById("dis").value);
				
			dn=0;
			
		}
			
		if(mn==1)
			
		{
				
			document.getElementById("dis").value=Number(x)*Number(document.getElementById("dis").value);
					
			mn=0;
			
		}

		if(rr==1)
		{
			document.getElementById('dis').value=Number(x)%Number(document.getElementById("dis").value);
			rr=0;
		}


		c=2;		
	}
		
	else if(pe==1&&c==1)
		
	{
			
		if(an==1)
			
		{
				
			document.getElementById("dis").value=Number(x)+Number(y);
				
				
			an=0;
			
		}
			
		if(sn==1)
			
		{
				
			document.getElementById("dis").value=Number(x)-Number(y);
								
			sn=0;
			
		}
			
		if(dn==1)
			
		{
				
			document.getElementById("dis").value=(Number(x)/Number(y))*100;
							
			dn=0;
			
		}
			
		if(mn==1)
			
		{
				
			document.getElementById("dis").value=Number(y);
							
			mn=0;
			
		}
			
		y=0;
			
		pe=0;
		c=2;		
	}
		
	else
 	if(c==1)		
	{
			
		document.getElementById("dis").value=Number(document.getElementById("dis").value)/100;
			
		c=2;
			
		pe=0;
			
		y=0;
		
	}
	if(document.getElementById('dis').value.indexOf("."))
			d=1;
	else
			d=0;	
}



//code for date calculator:





	var day;
	function validate_date(d,m,y)
	{
		if(m<0||m>12)
			return 0;
		if(y%400==0)	
			day=29;
		else if(y%100==0)
			day=28;
		else if(y%4==0)
			day=29;
		else
			day=28;

		if(m==2&&d>day)
		return 0;

		switch(m){
			case 1:
				day=31;
				break;
			case 2:
				break;
			case 3:
				day=31;
				break;
			case 4:
				day=30;
				break;
			case 5:
				day=31;
				break;
			case 6:
				day=30;
				break;
			case 7:
				day=31;
				break;
			case 8:
				day=31;
				break;
			case 9:
				day=30;
				break;
			case 10:
				day=31;
				break;
			case 11:
				day=30;
				break;
			case 12:
				day=31;
				break;
			}
		if(d>day)
			return 0;
		else
			return 1;
	}

	function dates()
	{

		var txt1=document.getElementById("d_diff0").value;
		var txt2=document.getElementById("d_diff1").value;
		var txt1arr=txt1.split("-");
		var txt2arr=txt2.split("-");

		var day1=txt1arr[0];
		var day2=txt2arr[0];
		var month1=txt1arr[1];
		var month2=txt2arr[1];
		var year1=txt1arr[2];
		var year2=txt2arr[2];
		if(validate_date(day1,month1,year1)&&validate_date(day2,month2,year2))
		{
			if(day2<day1)
			{
				if(day==28)
					var days_in_months=[0,31,28,31,30,31,30,31,31,30,31,30,31];
				else
					var days_in_months=[0,31,29,31,30,31,30,31,31,30,31,30,31];
				if(month2==1)
				{
					day2+=days_in_months[12];
					month2=12;
					year2--;
				}
				else
				{
					day2+=days_in_months[month2-1];
					month2--;
				}
			}

			if(day2<day1) //rare condition, when day2 was 1st March and day1 was 31st of any month, then after the above if-else condition, day2 is still less than day1
			{
				day2+=days_in_months[1];
				month2--;
			}
				
			if(month2<month1)
			{
				month2+=12;
				year2--;
			}
			var day_diff=day2-day1;
			var month_diff=month2-month1;
			var year_diff=year2-year1;
			if(day_diff==0||isNaN(day_diff))
				day_diff="00";
			if(month_diff==0||isNaN(month_diff))
				month_diff="00";
			if(year_diff==0||isNaN(year_diff))
				year_diff="0000";
			var txt3=day_diff+"d."+month_diff+"mon."+year_diff+"yrs";
			document.getElementById("d_diff2").value=txt3;
		}
		else
		alert("Please enter correct input");
	}
	function validate_time(h,m,s)
	{
		if(s<0||s>59||m<0||m>59||h<0)
			return 0;
		else
			return 1;
	}

	function times()
	{
		var txt1=document.getElementById("t_diff0").value;
		var txt2=document.getElementById("t_diff1").value;
		var txt1arr=txt1.split("-");
		var txt2arr=txt2.split("-");

		var hour1=txt1arr[0];
		var hour2=txt2arr[0];
		var minute1=txt1arr[1];
		var minute2=txt2arr[1];
		var second1=txt1arr[2];
		var second2=txt2arr[2];
		if(validate_time(hour1,minute1,second1)&&validate_time(hour2,minute2,second2))
		{
			if(hour2<hour1)
			{
				var x=hour2;
				hour2=hour1;
				hour1=x;
				x=minute2;
				minute2=minute1;
				minute1=x;
				x=second2;
				second2=second1;
				second1=x;
			}
			if(second2<second1)
			{
				second2+=60;
				minute2--;
			}
			if(minute2<minute1)
			{
				minute2+=60;
				hour2--;
			}
			var hour_diff=hour2-hour1;
			var minute_diff=minute2-minute1;
			var second_diff=second2-second1;
			if(hour_diff==0||isNaN(hour_diff))
				hour_diff="0";
			if(minute_diff==0||isNaN(minute_diff))
				minute_diff="0";
			if(second_diff==0||isNaN(second_diff))
				second_diff="0";
			var txt3=hour_diff+"hrs."+minute_diff+"mins."+second_diff+"s.";
			document.getElementById("t_diff2").value=txt3;
		}
		else
			alert("Please enter correct input");
	}

	function both()
	{
		var txt1=document.getElementById("f_diff0").value;
		var txt2=document.getElementById("f_diff1").value;
		var txt1arr=txt1.split("-");
		var txt2arr=txt2.split("-");
		var day01=txt1arr[3];
		var day02=txt2arr[3];
		var month01=txt1arr[4];
		var month02=txt2arr[4];
		var year01=txt1arr[5];
		var year02=txt2arr[5];
		var hour01=txt1arr[0];
		var hour02=txt2arr[0];
		var minute01=txt1arr[1];
		var minute02=txt2arr[1];
		var second01=txt1arr[2];
		var second02=txt2arr[2];
		if(validate_date(day01,month01,year01)&&validate_date(day02,month02,year02)&&validate_time(hour01,minute01,second01)&&validate_time(hour02,minute02,second02))
		{
			var year_sum=year01+year02;
			var month_sum=month01+month02;
			year_sum+=month_sum/12;
			month_sum=month_sum%12;
			var day_sum=day01+day02;
			var days_in_months=[0,31,0,31,30,31,30,31,31,30,31,30,31];
			if(year_sum%400==0)	
				days_in_months[2]=29;
			else if(year_sum%100==0)
				days_in_months[2]=28;
			else if(year_sum%4==0)
				days_in_months[2]=29;
			else
				days_in_months[2]=28;
			while(day_sum>days_in_months[month_sum])
			{
				day_sum-=days_in_months[month_sum];
				month_sum++;
				if(month_sum==13)
				{
					month_sum=1;
					year_sum++;
				}
			}
			var hour_sum=hour01+hour02;
			var minute_sum=minute01+minute02;
			var second_sum=second01+second02;
			minute_sum+=second_sum/60;
			second_sum=second_sum%60;
			hour_sum+=minute_sum/60;
			minute_sum=minute_sum%60;

			day_sum=Math.round(day_sum);
			month_sum=Math.round(month_sum);
			year_sum=Math.round(year_sum);
			hour_sum=Math.round(hour_sum);
			minute_sum=Math.round(minute_sum);
			second_sum=Math.round(second_sum);

			if(day_sum==0||isNaN(day_sum))
				day_sum="0";
			if(minute_sum==0||isNaN(minute_sum))
				minute_sum="0";
			if(second_sum==0||isNaN(second_sum))
				second_sum="0";
			if(month_sum==0||isNaN(month_sum))
				month_sum="0";
			if(hour_sum==0||isNaN(hour_sum))
				hour_sum="0";
			if(year_sum==0||isNaN(year_sum))
				year_sum="0";
			txt3=hour_sum.toString()+"h."+minute_sum.toString()+"min."+second_sum.toString()+"s."+day_sum.toString()+"d."+month_sum.toString()+"mon."+year_sum.toString()+"y";
			document.getElementById("f_diff2").value=txt3;
		}
		else
			alert("Please enter correct input");
	}



	//mortgage calc:



	var interest=0.1/12,temp;
	function f111()
	{
		var loan=Number(document.getElementById("mort_calc0").value);
		var time=Number(document.getElementById("mort_calc2").value);
		var emi=Number(document.getElementById("mort_calc3").value);
		if(loan!==0&&time!==0&&emi==0)
		{
			temp=(1+interest);
			temp=Math.pow(temp,time);
			emi=Math.round((loan*interest*temp)/(temp-1));
			document.getElementById("mort_calc3").value=emi;
		}
		else if(loan!==0&&time==0&&emi!==0)
		{
			temp=1+interest;
			temp=Math.log(temp);
			temp=1/temp;
			time=temp*(Math.log(emi/(emi-(loan*interest))));
			time=Math.ceil(time);
			if(isNaN(time))
			{	
				alert("Too little EMI! You cannot payoff the loan!");
				f2();
			}
			else
			document.getElementById("mort_calc2").value=time;
		}
		else if(loan==0&&time!==0&&emi!==0)
		{
			temp=1+interest;
			temp=Math.pow(temp,time);
			loan=Math.round((emi*(temp-1))/(interest*temp));
			document.getElementById("mort_calc0").value=loan;
		}
		else
		{
			alert("What is there to calculate?!");
			f2();
		}
	}
	function f222()
	{
		document.getElementById("mort_calc0").value=0;
		document.getElementById("mort_calc2").value=0;
		document.getElementById("mort_calc3").value=0;
	}
	function f333(x)
	{
		x.value="";
	}
	
})();
