

window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer",
	{
		title:{
			text: "Podijela dijece po dobnim skupinama "
		},
                animationEnabled: true,
		legend:{
			verticalAlign: "center",
			horizontalAlign: "left",
			fontSize: 15,
			fontFamily: "Helvetica"        
		},
		theme: "theme4",
		data: [
		{        
			type: "pie",       
			indexLabelFontFamily: "Garamond",       
			indexLabelFontSize: 15,
			indexLabel: "{label} {y}%",
			startAngle:-10,      
			showInLegend: true,
			toolTipContent:"{legendText} {y}",
			dataPoints: [
				{  y: 83.24, legendText:"2-3", label: "2-3" },
				{  y: 8.16, legendText:"3-4", label: "3-4" },
				{  y: 4.67, legendText:"4-5", label: "4-5" },
				{  y: 1.67, legendText:"5-6" , label: "5-6"},       
				{  y: 0.98, legendText:"Others" , label: "Others"}
			]
		}
		]
	});
	chart.render();
}

var counter = 0;
var krug;
var krizic;
function promijeni(field) {
	var current_field = document.getElementById(field);
	if (current_field.className == "field-changed") {
		document.getElementById("error").innerHTML = "Vec popunjeno!"
	} else {
		if (counter % 2 == 0) {
			current_field.src = "img/krizic.png";
			current_field.className = "field-changed";
			krizic = true;
			document.getElementById("na-redu").innerHTML = "Na redu: O";
			document.getElementById("error").innerHTML = "";
		}
		else{
			current_field.src = "img/krug.png";
			current_field.className = "field-changed";
			krug = true;
			document.getElementById("na-redu").innerHTML = "Na redu: X";
			document.getElementById("error").innerHTML = "";
		}
		counter = counter + 1;
		if(counter === 9){
			document.getElementById("na-redu").innerHTML = "";
			var ponovno= prompt("Sva su polja popunjena! Želiš li pokušati ponovno? (da/ne)");
			if(ponovno === "da"){
				Resetiraj();
			}
		}
	}
};

function Resetiraj() {
	counter = 0;
	document.getElementById("error").innerHTML = "";
	document.getElementById("na-redu").innerHTML ="Na redu je: X";
	var x = document.getElementsByClassName("field-changed");
	for ( var i = 0; i < x.length; ) {
		x[i].src = "img/kk-blank.png";
		x[i].className = "field";
	};
}


function Rezultat(){
	if(f1 === krug && f2 === krug && f3 === krug){
		alert("Pobijedaa!!");
		var ponovno= prompt("Želiš li pokušati ponovno? (da/ne)");
			if(ponovno === "da"){
				Resetiraj();
			};
	}
}