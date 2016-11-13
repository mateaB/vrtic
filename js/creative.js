

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
			indexLabel: " {y}%",
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
function promijeni(field) {
	var current_field = document.getElementById(field);
	if (current_field.className == "field-changed") {
		document.getElementById("error").innerHTML = "Vec popunjeno!"
	} else {
		if (counter % 2 == 0) {
			current_field.src = "img/krizic.png";
			current_field.className = "field-changed";
			current_field.value = "X";
			document.getElementById("na-redu").innerHTML = "Na redu: O";
			document.getElementById("error").innerHTML = "";
		}
		else{
			current_field.src = "img/krug.png";
			current_field.className = "field-changed";
			current_field.value = "O";
			document.getElementById("na-redu").innerHTML = "Na redu: X";
			document.getElementById("error").innerHTML = "";
		}
		counter = counter + 1;
		if(counter === 9){
			document.getElementById("na-redu").innerHTML = "";
			var ponovno= confirm("Sva su polja popunjena! Želiš li pokušati ponovno?");
			if(ponovno === true){
				Resetiraj();
			}
		}
		checkVictory();
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
		x[i].value = "";
	};
}



function checkVictory() {  
			if(f1.value === "X" && f2.value === "X" && f3.value === "X") {
                    victory();
                }
                if(f1.value === "X" && f5.value  === "X" && f9.value === "X") {
                    victory();
                }
                if(f3.value === "X" && f5.value === "X" && f7.value === "X") {
                    victory();
                }
                if(f4.value === "X" && f5.value === "X" && f6.value === "X") {
                    victory();
                }
                if(f7.value === "X" && f8.value === "X" && f9.value === "X") {
                    victory();
                }
                if(f1 === "X" && f4.value === "X" && f7.value === "X") {
                    victory();
                }
                if(f2.value  === "X" && f5.value === "X" && f8.value === "X") {
                    victory();
                }
                if(f3.value === "X" && f6.value === "X" && f9.value === "X") {
                    victory();
                }
                if(f1 === "O" && f2.value  === "O" && f3.value === "O") {
                    defeat();
                }
                if(f1 === "O" && f5.value === "O" && f9.value === "O") {
                    victory();
                }
                if(f3.value === "O" && f5.value === "O" && f7.value === "O") {
                    defeat();
                }
                if(f4.value === "O" && f5.value === "O" && f6.value === "O") {
                    defeat();
                }
                if(f7.value === "O" && f8.value === "O" && f9.value === "O") {
                    defeat();
                }
                if(f1 === "O" && f4.value === "O" && f7.value === "O") {
                    defeat();
                }
                if(f2.value  === "O" && f5.value === "O" && f8.value === "O") {
                    defeat();
                }
                if(f3.value === "O" && f6.value === "O" && f9.value === "O") {
                    defeat();
                }
            }

 function victory() {
                alert('Pobijedio je križić!');
				Resetiraj();
            }

function defeat() {
                alert("Pobijedio je kružić!");
                Resetiraj();
            }
