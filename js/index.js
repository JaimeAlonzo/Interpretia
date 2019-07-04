document.querySelector(".btn-hours").addEventListener("click", workHours);

function workHours(){
 var hours = parseInt(document.querySelector("#start-time").value);
 var minutes = parseInt(document.querySelector("#break").value);
 var total = Math.round(((hours*60)-minutes)/60);
 total=total+((total*3.33)/60);
 total= total.toFixed(2);
 document.querySelector(".tot").innerHTML=total;
}


$("#hide").on("click", function(){$("#glossary").slideToggle();});