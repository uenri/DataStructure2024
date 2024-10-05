var readline = require("readline-sync");

var weight = readline.questionInt("Please input your weight(KG)?");
var height = readline.questionInt("Please input your height(CM)?");
var bmi = weight/((height/100)**2);

if(bmi<18.5){
    console.log("體重過輕");
}else if(bmi<24){
    console.log("健康體位");
}else if(bmi<27){
    console.log("過重");
}else if(bmi<30){
    console.log("輕度肥胖");
}else if(bmi<35){
    console.log("中度肥胖");
}else if(bmi>=35){
    console.log("重度肥胖");
}

console.log("Hello! You bmi is "+bmi);
