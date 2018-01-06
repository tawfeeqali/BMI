/*requirejs(["node_modules/bmi-calc/index.js"], function(calc) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util"
	alert(calc(154,88,true));
});*/
var options = {}
var app = angular.module('myApp', []);
app.controller('validateCtrl', function($scope) {
	$scope.myheight = 0.0;
	$scope.myweight = 0.0;
});


$( "#calcBMI" ).on( "click", function() {
      $( "#Results" ).show( "blind", options, 500 );
});

function computeBMI()
    {
		
        //Obtain user inputs
        var height=Number(document.getElementById("height").value);
        var heightunits=document.getElementById("heightunits").value;
        var weight=Number(document.getElementById("weight").value);
        var weightunits=document.getElementById("weightunits").value;


        //Convert all units to metric
        if (heightunits=="inches") height/=39.3700787;
        if (weightunits=="lb") weight/=2.20462;

        //Perform calculation
        var BMI=weight/Math.pow(height,2);

        //Display result of calculation
        document.getElementById("output").innerText=Math.round(BMI*100)/100;

        var output =  Math.round(BMI*100)/100;
        if (output<18.5)
        document.getElementById("comment").innerText = "Underweight";
      else   if (output>=18.5 && output<=25)
        document.getElementById("comment").innerText = "Normal";
     else   if (output>=25 && output<=30)
        document.getElementById("comment").innerText = "Obese";
     else   if (output>30)
        document.getElementById("comment").innerText = "Overweight";
       // document.getElementById("answer").value = output; 
    }