var readline = require("readline-sync");

//Generate 4 digit randomly 產生四個亂數
var Ans = [0,1,2,3,4,5,6,7,8,9];  //permutation=>排列組合
for(var i=0;i<4;i++){
    var rand = Math.floor(Math.random()*10); //產生0-9的亂數
    
    //swap:i和rand
    var temp = Ans[i];
    Ans[i] = Ans[rand];
    Ans[rand] = temp;

}

do{
    var G = readline.questionInt("Please input 4 digits? ");

    
}while(G<1000 || G>=10000);
var Gstr = G.toString()              // 1.把數字變字串 2.JS的字串就是陣列

//adjude(判斷) ?A?B
for(){                              //掃描Ans[0]-[3]
    for(){                           //掃描Gstr[0]-[3]   

    }
}
//判斷win?
