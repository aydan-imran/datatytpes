
// // 23.1.23

var name,age;

name= "imran<br/>";
age= 23;
document.write(name);
document.write(age +"<br/>");
console.log(typeof(age));

var num =2.4853;

document.write(num.toPrecision(4));


// var text= "bangladesh is all";
// var len= text.length;
// document.write(len + "<br/>");

// var text1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
// var len1=text1.length;
// document.write("number of charecters " + len1 + "<br/>");

// var text= prompt("inter your name:");
// document.write(text);

// var firstname = prompt("inter firstName")
// var lasttname = prompt("inter lastName")
// var fulName= firstname + lasttname;
// document.write("your ful name is: " + fulName + "<br/>");
// document.write(fulName.length + "<br/>");
// document.write(fulName.toUpperCase() + "<br/>");
// document.write(fulName.toLowerCase() + "<br/>");
// document.write(fulName.slice(2,7) + "<br/>");
// document.write(fulName.charAt(3));

// var num1 = parseInt(prompt("enter first number:"));
// var num2 = parseInt(prompt("enter second number:"));


// sub = num1 + num2;
// document.write(num1 + "+" + num2 + "=" + sub + "<br/>");
// sum = num1 - num2;
// ast = num1 * num2;
// mod = num1 % num2;
// div = num1 / num2;

// document.write("summation is:" + sum + "<br/>");
// document.write("asterisk is:" + ast + "<br/>");
// document.write("moduluc is :" + mod + "<br/>");
// document.write("divition is:" + div + "<br/>");


// var base = parseFloat(prompt(" enter your base:"));
// var area = base + 273.15;
// document.write("kelvin =" + area);


// var num = parseInt(prompt("enter a number"));
// if(num%2!=0)
// document.write("odd");
// else
// document.write("even");


// var num =parseInt(prompt("inter a number"));

// if(num>0)
// document.write("positive");

// else if(num==0)
// document.write("zero");

// else
// document.write("negative");

// var mark = parseFloat(prompt("enter your marks"));
// if(mark>100 || mark<0)
// document.write("error");
// else if (mark>=90)
// document.write(" golden a+");
// else if(mark>=80)
// document.write("a+");
// else if(mark >=70)
// document.write("a");
// else if(mark >=60)
// document.write("a-");
// else if(mark >=50)
// document.write("b");
// else if(mark >=40)
// document.write("c");
// else if(mark >=33)
// document.write("d");
// else
// document.write("failed");


// var num1= parseInt(prompt("enter your first number"));
// var num2 = parseInt(prompt("enter our secod number"));
// var num3 = parseInt(prompt("enter your last number"));

// if (num1>num2 && num1>num3)
// document.write("lagest number is " + num1);
// else if (num2>num1 && num2>num3)
// document.write("lagest number is " + num2);
// else
// document.write("lagest number is " + num3);

// var num = prompt("enter a number:");
// if (num==0)
// document.write("zero");
// else if(num==1)
// document.write("one");
// else if(num==2)
// document.write("two");
// else if(num==3)
// document.write("three");
// else if(num==4)
// document.write("four");
// else if(num==5)
// document.write("five");
// else if(num==6)
// document.write("six");
// else if(num==7)
// document.write("seven");
// else if(num==8)
// document.write("eight");
// else if(num==9)
// document.write("nine");
// else
// document.write("indifine");

// var letter= prompt("enter a letter");
// letter = letter.toLowerCase();
// if (letter=="a" || letter=="e" || letter=="i" || letter=="o" || letter=="u")
// document.write("it is vowel");
// else
// document.write("it is a consonent");

// var digit = prompt("enter a digit");
// switch(digit){
//     case "1":
//         document.write("one");
//         break;
//     case "1":
//         document.write("two");
//         break;
//     case "3":
//         document.write("three");
//         break;
//     case "4":
//         document.write("four");
//         break;
//     case "5":
//         document.write("five");
//         break;
//     case "6":
//         document.write("six");
//         break;
//     case "7":
//         document.write("seven");
//         break;
//         case "8":
//         document.write("eight");
//         break;
//         case "9":
//         document.write("nine");
//         break;
//         case "0":
//         document.write("zero");
//         break;
//         default:
//             document.write("it is not a digit")
// }

// var letter = prompt(" enter a letter");
// letter= letter.toLocaleLowerCase();
// switch(letter){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//     document.write("vowel");
//     break;
//     default:
//     document.write("consonant");
// }


// // 24.1.23 


// for(var x = 2; x<=100; x=x+2){
//     document.write(" " + x);
// }

// for(x =10; x>=1; x=x-1){
//     document.write(" " + x);
// }

// var z= parseInt(prompt("enter a first number"));
// var y= parseInt(prompt("enter a last number"));
// sum=0
// for(var x=z; x<=y; x++){
//     sum=sum+x;
// }
// document.write(sum);

// var i = parseInt(prompt("enter a first number"));
// var y= parseInt(prompt("enter a last number"));
// sum= 0;
// while(i<=y){
//     sum=sum+i;
//     i++;
// }
// document.write(sum);

// var x=1;
// sum=0;
// while(x<=4){
//    sum=sum+x;
//     x=x+1;
// }
// document.write(" " + sum);

// sum=0;
// for(var x=1; x<=30; x=x+1){
// if(x%3==0 && x%5==0){
//     document.write(" " + x );
// sum=sum+x;
// }
// }
// document.write("<br/>" + sum);


// var i =1;
// sum=0;
// while(i<=4){
//     sum=sum+i;
//     i++;
// }
// document.write(sum);

// var i=1;
// do{
//     document.write(i);
//     i++;
// }
// while(i<=4)

// var i = 1;
// while(i<=10){
//     document.write(i);
//     i++;
// }

// var i=1;
// do{
//     document.write(i);
//     i++;
// }
// while(i<=10)


// var i = parseInt(prompt("enter a number"));
// if(i>0){
// document.write("positive");
// }
// else if(i<0){
// document.write("negative");
// }
// else{
// document.write("zero");
// }


// var num1= parseInt(prompt("enter a number"));
// var num2= parseInt(prompt("enter a number"));
// var num3= parseInt(prompt("enter a number"));
// var result = num1 >num2 && num1 > num3 ? num1 : num2>num1 && num2>num3 ? num2: num3;
// document.write(result);

// function addition(sum1,sum2){
//     result= sum1+sum2;
//     document.write("summation is=" + result);
// }

// addition(3,4);

// // (IEFE)=immediately Invokeable Function Expression
// (function summation(num1,num2){
//     sum= num1 + num2;
//     document.write(sum);
// })(4,4);

// function expression(){
// var ai = function show(fun);
//     document.write(fun);
// }

// ai("watch");

// // (IEFE)=immediately Invokeable Function Expression
// (function(a,b){
//     sum= a+b;
//     document.write(sum);
// })(4,5);

// var male = ["minar","jahangir","sihab","sajid"];
// var female = ["jerin","oishi","pasha","tania"];
// bh16 = male.concat(female);

// document.write(bh16.sort());

// var male = ["minar","jahangir","sihab","sajid"];
// var female = ["jerin","oishi","pasha","tania"];
// bh16 = male.concat(female);

// document.write(bh16.reverse());

// var male = ["minar","jahangir","sihab","sajid"];
// for(var i=1; i<5; i++){
//     document.write(" "+ male[i]);
// }

// var num = [12,20,3,4,5,56,76];
// var num1 = ['a','b','c','d','e','f','g','h','i',];

// sum= 0;
// for(var x=1;x<6; x++){
//     document.write(num1[x] + "<br/>");
//     sum=sum+num[x];
// }
// document.write(sum);

// var num = new Array();
// for(var i=0; i<6; i=i+2){
//     num[i]= parseInt(prompt("enter your digit"));
// }
// var sum=0;
// for(var i=0; i<5; i=i+2){
//     sum=sum+num[i];
// }
// document.write(sum);

// number sorting

// var num = ['z',2,4,2,8,44,6,3,'c']

// num.sort(function(a,b ){
//     return b-a;
// });
// document.write(num);

// 26.1.23


// var male = ["minar","jahangir","sihab","sajid","jerin","oishi","pasha","tania"];

// for(var x=1; x<8; x++){
//     document.write(male[x] + "<br/>");
// }

// var num = [2,4,2,8,44,6,3];

// num.sort(function(a,b){
//    return a-b;
// });
// document.write(num)

// function password(num) {
//     if(num.length>8) {
//         return document.write("unsufficientNumber<br/>");
        
//     } else {
//         return document.write("yourPasswordIsRight");
//     }
// }
// password("imran12345");
// password("ian");

// function HighestScore(score){
// var max= score[0];
// for(var x=1; x<score.length; x++){
// if(max<score[x]){
//     max=score[x];
// }
// }
// return max;
// }
// var score= [34,5,64,23,1,56,67];
// var amax =HighestScore(score);
// document.write(amax);

//  var total = [34,5,6,23,1,56,67];
// function score(total){
//     max=total[0];
//     for(var x=1; x<7; x++){
//         if(max<total[x]){
//             max=total[x]
//         }
//     }
//     return max;
// }

// var amax= score(total);
// document.write(amax);

// var num = new Array();
// for(var i=0; i<6; i=i+2){
//     num[i]= parseInt(prompt("enter your digit"));


// scorerInfo= [
//     ["shakib",32],
//     ["mushfik",34],
//     ["mashrafi",20],
//     ["liton",55],
//     ["tamim",100],
//     ["sabbir",55]
// ];
// function topScorer(scorerInfo){
//     var scorer= scorerInfo[0][0];
//     var score= scorerInfo[0][1];
   
//     for(var x=1; x<scorerInfo.length;x++ ){
//         if(score<scorerInfo[x][1]){
//             score = scorerInfo[x][1];
//             topscorer = scorerInfo[x][0];
//         }
//     }
//     return topscorer;
// }
// var topscoer = topScorer(scorerInfo);
// document.write(topscorer);

// // 27.01.23

// var run = [
//     ["shakib",34],
//     ["liton",80],
//     ["mahmudullah",100],
//     ["somya",2],
//     ["taizul",98],
//     ["musfic",102],
//     ["sabir",12]
// ];
// function scorer(run){
//     var topscore = run[0][1];
//     var topscorer = run[0][0];
//     for(var x=1; x<run.length; x++){
//         if(topscore<run[x][1]){
//             topscore=run[x][1];
//             topscorer=run[x][0];
//         }
//     }
//     return topscorer;
// }
// var player= scorer(run);
// document.write(player);

// var student = {
//     name : "imran",
//     age : 23,
//     lang :["bng","hindi","eng"]
// }

// document.write(student.age);

// function student(name,age,lang){
//     this.name =name;
//     this.age = age;
//     this.lang= lang;
// }
// var student1 = new student("sofik",20,["bng","eng","hindi"]);
// document.write(student1.lang);










// function jnustudent(name,group,roll,batch){
//     this.name = name;
//     this.group= group;
//     this.roll =roll;
//     this.batch= batch;
//     this.show = function(){
//         document.write(this.name);
//         document.write(this.group);
//         document.write(this.roll);
//         document.write(this.batch);
        
//     }
// }
// var student1 = new jnustudent("imran <br/>","iml <br/>","b200111016 <br/>","16<br/>");
// var student2 = new jnustudent("rohim","iml<br/>","b2308434<br/>","15<br/>");
// var student3 = new jnustudent("jubaier <br/>","iml <br/>","b201016 <br/>","16<br/>");
// var student4 = new jnustudent("nahid <br/>","iml <br/>","b200111016 <br/>","16<br/>");
// var student5 = new jnustudent("sujon <br/>","iml <br/>","b200111016 <br/>","16<br/>");
// student1.show();
// student2.show();
// student3.show();
// student4.show();







// function tc(name,group,section){
//     this.name = name;
//     this.group = group;
//     this.section= section;
//     this.show =function(){
//         document.write(this.name);
//         document.write(this.group);
//         document.write(this.section);
//     }
// }
// var student1 = new tc("imran ","arts ","c<br/>");
// var student2 = new tc("junayed ","arts ","a");
// student1.show();
// student2.show();


// var game = parseInt(prompt("inter a digit"));
// var game2 = parseInt(prompt("inter a digit"));

// var max =Math.max(game,game2);
// console.log(max);

// var num = parseFloat(prompt("inter a number"));
// var random1 = Math.floor(Math.random()*6);
// console.log(random1);
// if(num==random1){
//     console.log("you win");
// }
// else{
// console.log("you lose");
// }

// var random1 = Math.floor(Math.random()*11)+10;
// console.log(random1);

// numOfWon=0;
// numOfLoss=0;
// for(var x=1; x<5; x++){
//     var num= parseInt(prompt("inter the number"));
//     var game = Math.floor(Math.random()*5);
//     if(num==game){
//         console.log("you have won");
//         numOfWon++;
//     }
//     else{
//         console.log("you have loss");
//         numOfLoss++;
//     }

// }
// console.log("total number of won " + numOfWon );
// console.log("total number of loss " + numOfLoss );

// var date= new Date();
// console.log(date);

// var month= date.getMonth();
// console.log(month);

// var year = date.getFullYear();
// console.log(year);

// var currentDate = date.getDate();
// console.log(currentDate);

//28.1.23
//document object model
// var h1 = document.getElementById("heading1");
// h1.innerHTML="cold morning";

// document.getElementById("heading2").innerHTML="good bye <br/> good bye";

// document.getElementsByTagName("p")[1].innerHTML="sometimes it becomes lazyness";





























