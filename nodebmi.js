var readline = require("readline-sync");

var weight = readline.questionInt("Please input your weight(KG)?");
var height = readline.questionInt("Please input your height(CM)?");
var bmi = weight/((height/100)**2);

//if(bmi<18.5){
//    console.log("體重過輕");
//}else if(bmi<24){
//    console.log("健康體位");
//}else if(bmi<27){
//    console.log("過重");
//}else if(bmi<30){
//    console.log("輕度肥胖");
//}else if(bmi<35){
//    console.log("中度肥胖");
//}else if(bmi>=35){
//    console.log("重度肥胖");
//}

var resultstr = ["體重過輕","健康體位","過重","輕度肥胖","中度肥胖","重度肥胖"];

if(bmi<18.5){
    console.log(resultstr[0]);
}else if(bmi<24){
    console.log(resultstr[1]);
}
if(bmi<27){
    console.log(resultstr[2]);
}else if(bmi<30){
    console.log(resultstr[3]);
}else if(bmi<35){
    console.log(resultstr[4]);
}else (bmi>=35){
    console.log(resultstr[5]);
}

console.log("Hello! You bmi is "+bmi);



var ary0 = [[1,2,3],[4,5,6],[7,8,9]];
var ary1 = [1,2,"a","b"];
var ary2 = [{name:"john", age:18, class:"MD2", team:["B001","B002"]},{},{}];//json Object Notation
