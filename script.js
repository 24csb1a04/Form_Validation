let msg = document.getElementById("msg");
function checkform(){
  let choice = document.getElementById("v").value;
  if(choice==="NA"){
    msg.style.background = "#222";
    msg.textContent = "Please Select A Country!"; 
  }
  else if(choice==="U"){
    msg.textContent = "Visa required for most applicants.";
    msg.style.background = "linear-gradient(to right , red , white , red , white)";
    msg.style.color  = "blue";
  }
  else if(choice==="C"){
    msg.textContent = "Visa required unless you have an eTA.";
    msg.style.background = "linear-gradient(to right , red , white , red , white)";
    msg.style.color  = "blue";
  }
  else if(choice==="I"){
    msg.textContent = "Visa required before travel."
    msg.style.background = "linear-gradient(to right , orange , white , green)";
    msg.style.color  = "darkblue";
  }
  else if(choice==="UK"){
    msg.textContent = "Visa depends on the duration of stay.";
    msg.style.background = "linear-gradient(to right , darkblue , white , red)";
    msg.style.color  = "darkblue";
  }
  else if(choice==="AUS"){
    msg.textContent = "eVisa available for eligible travelers.";
    msg.style.background = "linear-gradient(to right , darkblue , red)";
    msg.style.color  = "white";
  }
  return false;
}
function validateform(){
  let name = document.getElementById("name").value;
  let passport = document.getElementById("passport").value;
  let nation = document.getElementById("v2").value;
  let m = "Form Submitted Successfully!!"
  if(name.length===0){
    let a = document.getElementById("n");
    a.textContent ="*All fields are required*";
    return false;
  }
  else if(passport.length<8 || passport.length>10){
    let b = document.getElementById("pass");
    if(passport.length===0) b.textContent = "*All fields are required*";
    b.textContent = "*Invalid passport number*";
    return false;
  }
  else if(nation==="NA"){
    let c = document.getElementById("nat");
    c.textContent = "*Please Select A country*";
    return false;
  }
  msg.textContent = m;
  return false;
}