<?php
//session_start();
$nameErr = $emailErr = $sexErr = $phoneErr = $addressErr = $countryErr = $stateErr = $interestErr = $gamesErr = $moviesErr = $readingsErr = "";
$flag1=1;
$name = $email = $phone = $sex = $address = $state = $country = $soccer = $hockey = $cricket = $action = $comedy = $horror = $romance = $detective = $adventure = "";
$games = $movies = $readings = [];
if(empty($_POST["name"])||empty($_POST["email"])||empty($_POST["phone"])||empty($_POST["sex"])||empty($_POST["address"])||empty($_POST["country"])||empty($_POST["state"]))
{
	if(empty($_POST["soccer"])||empty($_POST["cricket"])||empty($_POST["hockey"])||empty($_POST["horror"])||empty($_POST["action"])||empty($_POST["adventure"])||empty($_POST["detective"])||empty($_POST["comedy"])||empty($_POST["romance"]))
	$flag1 = 0;

}

function modify_entry($data) 
{
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}


if ($_SERVER["REQUEST_METHOD"] == "POST")
{
   if (empty($_POST["name"])) {
     $nameErr = "Req";
   } else {
     $name = modify_entry($_POST["name"]);
     if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
       $nameErr = "Invalid"; 
     }
   }
   
   if (empty($_POST["email"])) {
     $emailErr = "Req";
   } else {
     $email = modify_entry($_POST["email"]);
     if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
       $emailErr = "Invalid"; 
     }
   }
   if (empty($_POST["phone"])) {
   	$phoneErr = "Req";
   }
   	else {
   		$phone = modify_entry($_POST["phone"]);
   		if (strlen($phone)!==10)
   		{
   			if (strcmp(substr($phone,0,1),'9')!==0||strcmp(substr($phone,0,1),'8')!==0||strcmp(substr($phone,0,1),'7')!==0)
   			$phoneErr = "Invalid";
   		}
   	}
   if (empty($_POST["address"])) {
     $addressErr = "Req";
   } else {
     $address = modify_entry($_POST["address"]);
     }
     if (empty($_POST["sex"])) {
     $sexErr = "Req";
   } else {
     $sex = modify_entry($_POST["sex"]);
   }
   if (!empty($_POST["soccer"])){
  	 array_push($games, $_POST["soccer"]);
  	 $soccer = $_POST["soccer"];
   }
   if (!empty($_POST["hockey"])){
   	array_push($games, $_POST["hockey"]);
   	$hockey = $_POST["hockey"];
   }
   if (!empty($_POST["cricket"])){
  	 array_push($games, $_POST["cricket"]);
  	 $cricket = $_POST["cricket"];
   }
   if (empty($_POST["soccer"])&&empty($_POST["hockey"])&&empty($_POST["cricket"])){
  	 $gamesErr = "Req";
   }
   if (!empty($_POST["action"])){
  	 array_push($movies, $_POST["action"]);
  	 $action = $_POST["action"];
   }
   if (!empty($_POST["horror"])){
   	array_push($movies, $_POST["horror"]);
   	$horror = $_POST["horror"];
   }
   if (!empty($_POST["comedy"])){
  	 array_push($movies, $_POST["comedy"]);
  	 $comedy = $_POST["comedy"];
   }
   if (empty($_POST["action"])&&empty($_POST["horror"])&&empty($_POST["comedy"])){
  	 $moviesErr = "Req";
   }
   if (!empty($_POST["romance"])){
  	 array_push($readings, $_POST["romance"]);
  	 $romance = $_POST["romance"];
   }
   if (!empty($_POST["adventure"])){
   	array_push($readings, $_POST["adventure"]);
   	$adventure = $_POST["adventure"];
   }
   if (!empty($_POST["detective"])){
  	 array_push($readings, $_POST["detective"]);
  	 $detective = $_POST["detective"];
   }
   if (empty($_POST["romance"])&&empty($_POST["adventure"])&&empty($_POST["detective"])){
  	 $readingsErr = "Req";
   }
   if ($gamesErr=="Req"&&$moviesErr=="Req"&&$readingsErr=="Req")
   	$interestErr="Req";

   if (!empty($_POST["country"]))
   {
    $country = $_POST["country"];
   }
   else
   {
     $countryErr = "Req"; 
    }

     if (isset($_POST["submit"]))
     {
     	
		if($nameErr!=="Req"&&$emailErr!=="Req"&&$phoneErr!=="Req"&&$sexErr!=="Req"&&$interestErr!=="Req"&&$countryErr!=="Req"&&$addressErr!=="Req")
		{
			$txt =  $_POST["name"].",".$_POST['email'].",".$_POST["phone"].",".$_POST["sex"].",";
		
				if (!empty($soccer))
					$txt = $txt.$_POST["soccer"].",";
				if (!empty($hockey))
					$txt = $txt.$_POST["hockey"].",";
				if (!empty($cricket))
					$txt = $txt.$_POST["cricket"].",";
				if (!empty($action))
					$txt = $txt.$_POST["action"].",";
				if (!empty($horror))
					$txt = $txt.$_POST["horror"].",";
				if (!empty($comedy))
					$txt = $txt.$_POST["comedy"].",";
				if (!empty($adventure))
					$txt = $txt.$_POST["adventure"].",";
				if (!empty($detective))
					$txt = $txt.$_POST["detective"].",";
				if (!empty($romance))
					$txt = $txt.$_POST["romance"].",";
			
			$txt = $txt.$_POST["country"].",".$_POST["address"];
			$fh = fopen("data.csv", 'a+'); 
			file_put_contents('data.csv',$txt,FILE_APPEND);
			fwrite($fh, "\n");

			echo "SUCCESS";
		}
	}
}

?>
<!doctype <!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="second.css">
</head>
<body>
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">


	<div class="main bg_blue border_blue round_corner">
	
		<div class="tabscontainer">
	
			<div class="tabs border_grey round_corner"><a href="first.html"><p class="center font_grey">News</p></a></div>
	
			<div class="tabs bg_blue border_grey round_corner"><a href="#"><p class="center font_blue">Subscribe</p></a></div>
	
		</div>

	

		<div class="body3 border_blue round_corner">
		



		<h1>Subscription Form</h1>

		<table>
		<tr>
			<td>Name<span class="error"><?php echo $nameErr;?></span></td>
			<td><input type="text" id="name" name="name" value="<?php echo $name;?>"></td>
			<td class="country">Country<span class="error"><?php echo $countryErr;?></span></td>
			<td><select id="country" onchange="myfunc1()" name="country">
				<option value=""><?php echo $country;?></option>
				<option value="Afganistan">Afghanistan</option>
				<option value="Albania">Albania</option>
				<option value="Algeria">Algeria</option>
				<option value="American Samoa">American Samoa</option>
				<option value="Andorra">Andorra</option>
				<option value="Angola">Angola</option>
				<option value="Anguilla">Anguilla</option>
				<option value="Antigua &amp; Barbuda">Antigua &amp; Barbuda</option>
				<option value="Argentina">Argentina</option>
				<option value="Armenia">Armenia</option>
				<option value="Aruba">Aruba</option>
				<option value="Australia">Australia</option>
				<option value="Austria">Austria</option>
				<option value="Azerbaijan">Azerbaijan</option>
				<option value="Bahamas">Bahamas</option>
				<option value="Bahrain">Bahrain</option>
				<option value="Bangladesh">Bangladesh</option>
				<option value="Barbados">Barbados</option>
				<option value="Belarus">Belarus</option>
				<option value="Belgium">Belgium</option>
				<option value="Belize">Belize</option>
				<option value="Benin">Benin</option>
				<option value="Bermuda">Bermuda</option>
				<option value="Bhutan">Bhutan</option>
				<option value="Bolivia">Bolivia</option>
				<option value="Bonaire">Bonaire</option>
				<option value="Bosnia &amp; Herzegovina">Bosnia &amp; Herzegovina</option>
				<option value="Botswana">Botswana</option>
				<option value="Brazil">Brazil</option>
				<option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
				<option value="Brunei">Brunei</option>
				<option value="Bulgaria">Bulgaria</option>
				<option value="Burkina Faso">Burkina Faso</option>
				<option value="Burundi">Burundi</option>
				<option value="Cambodia">Cambodia</option>
				<option value="Cameroon">Cameroon</option>
				<option value="Canada">Canada</option>
				<option value="Canary Islands">Canary Islands</option>
				<option value="Cape Verde">Cape Verde</option>
				<option value="Cayman Islands">Cayman Islands</option>
				<option value="Central African Republic">Central African Republic</option>
				<option value="Chad">Chad</option>
				<option value="Channel Islands">Channel Islands</option>
				<option value="Chile">Chile</option>
				<option value="China">China</option>
				<option value="Christmas Island">Christmas Island</option>
				<option value="Cocos Island">Cocos Island</option>
				<option value="Colombia">Colombia</option>
				<option value="Comoros">Comoros</option>
				<option value="Congo">Congo</option>
				<option value="Cook Islands">Cook Islands</option>
				<option value="Costa Rica">Costa Rica</option>
				<option value="Cote DIvoire">Cote D'Ivoire</option>
				<option value="Croatia">Croatia</option>
				<option value="Cuba">Cuba</option>
				<option value="Curaco">Curacao</option>
				<option value="Cyprus">Cyprus</option>
				<option value="Czech Republic">Czech Republic</option>
				<option value="Denmark">Denmark</option>
				<option value="Djibouti">Djibouti</option>
				<option value="Dominica">Dominica</option>
				<option value="Dominican Republic">Dominican Republic</option>
				<option value="East Timor">East Timor</option>
				<option value="Ecuador">Ecuador</option>
				<option value="Egypt">Egypt</option>
				<option value="El Salvador">El Salvador</option>
				<option value="Equatorial Guinea">Equatorial Guinea</option>
				<option value="Eritrea">Eritrea</option>
				<option value="Estonia">Estonia</option>
				<option value="Ethiopia">Ethiopia</option>
				<option value="Falkland Islands">Falkland Islands</option>
				<option value="Faroe Islands">Faroe Islands</option>
				<option value="Fiji">Fiji</option>
				<option value="Finland">Finland</option>
				<option value="France">France</option>
				<option value="French Guiana">French Guiana</option>
				<option value="French Polynesia">French Polynesia</option>
				<option value="French Southern Ter">French Southern Ter</option>
				<option value="Gabon">Gabon</option>
				<option value="Gambia">Gambia</option>
				<option value="Georgia">Georgia</option>
				<option value="Germany">Germany</option>
				<option value="Ghana">Ghana</option>
				<option value="Gibraltar">Gibraltar</option>
				<option value="Great Britain">Great Britain</option>
				<option value="Greece">Greece</option>
				<option value="Greenland">Greenland</option>
				<option value="Grenada">Grenada</option>
				<option value="Guadeloupe">Guadeloupe</option>
				<option value="Guam">Guam</option>
				<option value="Guatemala">Guatemala</option>
				<option value="Guinea">Guinea</option>
				<option value="Guyana">Guyana</option>
				<option value="Haiti">Haiti</option>
				<option value="Hawaii">Hawaii</option>
				<option value="Honduras">Honduras</option>
				<option value="Hong Kong">Hong Kong</option>
				<option value="Hungary">Hungary</option>
				<option value="Iceland">Iceland</option>
				<option value="India">India</option>
				<option value="Indonesia">Indonesia</option>
				<option value="Iran">Iran</option>
				<option value="Iraq">Iraq</option>
				<option value="Ireland">Ireland</option>
				<option value="Isle of Man">Isle of Man</option>
				<option value="Israel">Israel</option>
				<option value="Italy">Italy</option>
				<option value="Jamaica">Jamaica</option>
				<option value="Japan">Japan</option>
				<option value="Jordan">Jordan</option>
				<option value="Kazakhstan">Kazakhstan</option>
				<option value="Kenya">Kenya</option>
				<option value="Kiribati">Kiribati</option>
				<option value="Korea North">Korea North</option>
				<option value="Korea Sout">Korea South</option>
				<option value="Kuwait">Kuwait</option>
				<option value="Kyrgyzstan">Kyrgyzstan</option>
				<option value="Laos">Laos</option>
				<option value="Latvia">Latvia</option>
				<option value="Lebanon">Lebanon</option>
				<option value="Lesotho">Lesotho</option>
				<option value="Liberia">Liberia</option>
				<option value="Libya">Libya</option>
				<option value="Liechtenstein">Liechtenstein</option>
				<option value="Lithuania">Lithuania</option>
				<option value="Luxembourg">Luxembourg</option>
				<option value="Macau">Macau</option>
				<option value="Macedonia">Macedonia</option>
				<option value="Madagascar">Madagascar</option>
				<option value="Malaysia">Malaysia</option>
				<option value="Malawi">Malawi</option>
				<option value="Maldives">Maldives</option>
				<option value="Mali">Mali</option>
				<option value="Malta">Malta</option>
				<option value="Marshall Islands">Marshall Islands</option>
				<option value="Martinique">Martinique</option>
				<option value="Mauritania">Mauritania</option>
				<option value="Mauritius">Mauritius</option>
				<option value="Mayotte">Mayotte</option>
				<option value="Mexico">Mexico</option>
				<option value="Midway Islands">Midway Islands</option>
				<option value="Moldova">Moldova</option>
				<option value="Monaco">Monaco</option>
				<option value="Mongolia">Mongolia</option>
				<option value="Montserrat">Montserrat</option>
				<option value="Morocco">Morocco</option>
				<option value="Mozambique">Mozambique</option>
				<option value="Myanmar">Myanmar</option>
				<option value="Nambia">Nambia</option>
				<option value="Nauru">Nauru</option>
				<option value="Nepal">Nepal</option>
				<option value="Netherland Antilles">Netherland Antilles</option>
				<option value="Netherlands">Netherlands (Holland, Europe)</option>
				<option value="Nevis">Nevis</option>
				<option value="New Caledonia">New Caledonia</option>
				<option value="New Zealand">New Zealand</option>
				<option value="Nicaragua">Nicaragua</option>
				<option value="Niger">Niger</option>
				<option value="Nigeria">Nigeria</option>
				<option value="Niue">Niue</option>
				<option value="Norfolk Island">Norfolk Island</option>
				<option value="Norway">Norway</option>
				<option value="Oman">Oman</option>
				<option value="Pakistan">Pakistan</option>
				<option value="Palau Island">Palau Island</option>
				<option value="Palestine">Palestine</option>
				<option value="Panama">Panama</option>
				<option value="Papua New Guinea">Papua New Guinea</option>
				<option value="Paraguay">Paraguay</option>
				<option value="Peru">Peru</option>
				<option value="Phillipines">Philippines</option>
				<option value="Pitcairn Island">Pitcairn Island</option>
				<option value="Poland">Poland</option>
				<option value="Portugal">Portugal</option>
				<option value="Puerto Rico">Puerto Rico</option>
				<option value="Qatar">Qatar</option>
				<option value="Republic of Montenegro">Republic of Montenegro</option>
				<option value="Republic of Serbia">Republic of Serbia</option>
				<option value="Reunion">Reunion</option>
				<option value="Romania">Romania</option>
				<option value="Russia">Russia</option>
				<option value="Rwanda">Rwanda</option>
				<option value="St Barthelemy">St Barthelemy</option>
				<option value="St Eustatius">St Eustatius</option>
				<option value="St Helena">St Helena</option>
				<option value="St Kitts-Nevis">St Kitts-Nevis</option>
				<option value="St Lucia">St Lucia</option>
				<option value="St Maarten">St Maarten</option>
				<option value="St Pierre &amp; Miquelon">St Pierre &amp; Miquelon</option>
				<option value="St Vincent &amp; Grenadines">St Vincent &amp; Grenadines</option>
				<option value="Saipan">Saipan</option>
				<option value="Samoa">Samoa</option>
				<option value="Samoa American">Samoa American</option>
				<option value="San Marino">San Marino</option>
				<option value="Sao Tome &amp; Principe">Sao Tome &amp; Principe</option>
				<option value="Saudi Arabia">Saudi Arabia</option>
				<option value="Senegal">Senegal</option>
				<option value="Serbia">Serbia</option>
				<option value="Seychelles">Seychelles</option>
				<option value="Sierra Leone">Sierra Leone</option>
				<option value="Singapore">Singapore</option>
				<option value="Slovakia">Slovakia</option>
				<option value="Slovenia">Slovenia</option>
				<option value="Solomon Islands">Solomon Islands</option>
				<option value="Somalia">Somalia</option>
				<option value="South Africa">South Africa</option>
				<option value="Spain">Spain</option>
				<option value="Sri Lanka">Sri Lanka</option>
				<option value="Sudan">Sudan</option>
				<option value="Suriname">Suriname</option>
				<option value="Swaziland">Swaziland</option>
				<option value="Sweden">Sweden</option>
				<option value="Switzerland">Switzerland</option>
				<option value="Syria">Syria</option>
				<option value="Tahiti">Tahiti</option>
				<option value="Taiwan">Taiwan</option>
				<option value="Tajikistan">Tajikistan</option>
				<option value="Tanzania">Tanzania</option>
				<option value="Thailand">Thailand</option>
				<option value="Togo">Togo</option>
				<option value="Tokelau">Tokelau</option>
				<option value="Tonga">Tonga</option>
				<option value="Trinidad &amp; Tobago">Trinidad &amp; Tobago</option>
				<option value="Tunisia">Tunisia</option>
				<option value="Turkey">Turkey</option>
				<option value="Turkmenistan">Turkmenistan</option>
				<option value="Turks &amp; Caicos Is">Turks &amp; Caicos Is</option>
				<option value="Tuvalu">Tuvalu</option>
				<option value="Uganda">Uganda</option>
				<option value="Ukraine">Ukraine</option>
				<option value="United Arab Erimates">United Arab Emirates</option>
				<option value="United Kingdom">United Kingdom</option>
				<option value="United States of America">United States of America</option>
				<option value="Uraguay">Uruguay</option>
				<option value="Uzbekistan">Uzbekistan</option>
				<option value="Vanuatu">Vanuatu</option>
				<option value="Vatican City State">Vatican City State</option>
				<option value="Venezuela">Venezuela</option>
				<option value="Vietnam">Vietnam</option>
				<option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
				<option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
				<option value="Wake Island">Wake Island</option>
				<option value="Wallis &amp; Futana Is">Wallis &amp; Futana Is</option>
				<option value="Yemen">Yemen</option>
				<option value="Zaire">Zaire</option>
				<option value="Zambia">Zambia</option>
				<option value="Zimbabwe">Zimbabwe</option>
				</select></td>
			</tr>
			<tr>
				<td>Email<span class="error"><?php echo $emailErr;?></span></td>
				<td><input type="text" id="email" name="email" value="<?php echo $email ?>" /></td>
				<td>State<span class="error"><?php echo $stateErr;?></span></td>
				<td><select id="state" name="state" value="select" disabled/>
				
				</select>

				</td>
			</tr>
				<tr>
				<td>Phone Number:<span class="error"><?php echo $phoneErr;?></span></td>
				<td><input id ="ph" name="phone" type="text" maxlength="10" value="<?php echo $phone ?>" /></td><!--onchange="myfunc3()" onblur="myfunc4()"-->
				<td>Address<span class="error"><?php echo $addressErr;?></span></td>
				<td rowspan="4"><textarea name="address" rows="4" cols="16" class="none" id="address" contenteditable="true" spellcheck="true"><?php echo $address;?></textarea></td>
			</tr>
			
			
			<tr>
				<td>Sex<span class="error"><?php if (isset($sex) && ($sex!=="male" || $sex!=="male")) echo $sexErr;?></span></td>
				<td><input type="radio" id="sex" name="sex" value="male" <?php if (isset($sex) && $sex=="male") echo "checked";?>/>Male
				<input type="radio" id="sex" name="sex" value="female" <?php if (isset($sex) && $sex=="female") echo "checked";?>/>Female</td
			</tr>
			<tr>
				<td>Interest<span class="error"><?php if (isset($interestErr) && $interestErr=="Req") echo $interestErr;?></span></td>
				<td><input type="checkbox" id="games" name="game" value="games" onclick="myfunc5()" <?php if (isset($games) && count($games)!==0) echo "checked";?>/>
						<dialog id="myDialog1"><input type="checkbox" id="soccer" name="soccer" value="soccer" <?php if (isset($soccer) && $soccer=="soccer") echo "checked"?>/>Soccer
						<input type="checkbox" id="cricket" name="cricket" value="cricket" <?php if (isset($cricket) && $cricket=="cricket") echo "checked"?>/>Cricket
						<input type="checkbox" id="hockey" name="hockey" value="hockey" <?php if (isset($hockey) && $hockey=="hockey") echo "checked"?>/>Hockey
						<br/>Press Esc when done</dialog>Games
					<input type="checkbox" id="movie" name="movie" value="movie" onclick="myfunc6()" <?php if (isset($movies) && count($movies)!==0) echo "checked";?>/>
						<dialog id="myDialog2"><input type="checkbox" id="action" name="action" value="action" <?php if (isset($action) && $action=="action") echo "checked"?>/>Action
						<input type="checkbox" id="horror" name="horror" value="horror" <?php if (isset($horror) && $horror=="horror") echo "checked"?>/>Horror
						<input type="checkbox" id="comedy" name="comedy" value="comedy" <?php if (isset($comedy) && $comedy=="comedy") echo "checked"?>/>Comedy
						<br/>Press Esc when done</dialog>Movie
					<input type="checkbox" id="reading" name="reading" value="reading" onclick="myfunc7()" <?php if (isset($readings) && count($readings)!==0) echo "checked";?>/>
						<dialog id="myDialog3"><input type="checkbox" id="romance" name="romance" value="romance" <?php if (isset($romance) && $romance=="romance") echo "checked"?>/>Romance
						<input type="checkbox" id="detective" name="detective" value="detective" <?php if (isset($detective) && $detective=="detective") echo "checked"?>/>Detective
						<input type="checkbox" id="adventure" name="adventure" value="adventure" <?php if (isset($adventure) && $adventure=="adventure") echo "checked"?>/>Adventure
						<br/>Press Esc when done</dialog>Reading</td>
			</table>
		<input type="reset" class="mybutton1"  value="RESET"></input>
		<input type="submit" class="mybutton2" value="SUBMIT" name="submit"></input>

	
		</div>


	</div>



<script type="text/javascript" src="func.js"></script>

</form>

</body>


</html>
