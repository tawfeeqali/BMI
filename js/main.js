
$("#calcForm").validate({
  submitHandler: function(form) {
    	computeBMI();
	  	var options = {};
      	$( "#Results" ).show("blind", options, 500);
  }
 });

function computeBMI()
    {		
        //Obtain user inputs
        var height=Number($("#height").val());
        var heightunits=$("heightunits").val();
        var weight=Number($("#weight").val());
        var weightunits=$("#weightunits").val();

        //Convert all units to metric
        if (heightunits=="inches") height/=39.3700787;
        if (weightunits=="lb") weight/=2.20462;

        //Perform calculation
        var BMI=weight/Math.pow(height,2);

        //Display result of calculation
        var output =  Math.round(BMI*100)/100;
		$("#output").text(output);
        if (output<18.5)
        $("#comment").text("Underweight");
      	else   if (output>=18.5 && output<=25)
        $("#comment").text("Normal");
     	else   if (output>=25 && output<=30)
        $("#comment").text("Obese");
     	else   if (output>30)
        $("#comment").text("Overweight");
    }