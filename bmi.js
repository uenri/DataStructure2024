

function calcBMI(){

    //var weight = 50;
    var weight = Number(document.getElementById("weight").value);
    //var height = 160;
    var height = Number(document.getElementById("height").value);
    var bmi = weight/((height/100)**2);

    document.getElementById("BMI").innerHTML = bmi;
    
    console.log("Hello! You bmi is "+bmi);
}