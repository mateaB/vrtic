

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
