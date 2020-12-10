var chalk=require('chalk');
var readlinesync=require('readline-sync');

var userName=readlinesync.question(chalk.bold.cyan("May I know your name?"));
var birthDate=readlinesync.question(chalk.bold.magenta("Hi "+userName+ " may I know your date of birth ?(dd-mm)"));


if (birthDate.length>5){
  console.log('Please try again');
}
var prime= birthDate.split("-");
if(prime[0]>31 || prime[1]>12){
  console.log(chalk.bold.red("Try Again"));
}
if(prime[1]==2 && prime[0]>29){
  console.log(chalk.bold.red("Try Again"));
}
var one=0;
var sum=0;
var two=0;
var isPrime=true,reply;
var numberOne=parseInt(prime[1]);
var numberTwo=parseInt(prime[0])
while(numberOne!=0 || numberTwo!=0){
  one=parseInt(numberOne%10);
  numberOne=parseInt(numberOne/10);
  two=parseInt(numberTwo%10);
  numberTwo=parseInt(numberTwo/10);
  sum=parseInt(sum+one+two);
}

for(let i=2;i<sum-1;i++){
  if(sum%i==0){
    isPrime=false;
    break;
  }
}

if(isPrime==true){
  reply=true;
  console.log(chalk.bold.green("Your birthdate is a primenumber"));
}
else
{
  reply=false;
  console.log(chalk.bold.red("Your birthdate is not a primenumber"));
}

if(reply){
  readlinesync.question("Do you want to post this on social media?");
}