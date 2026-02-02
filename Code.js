let random = 100;
do{
    num = prompt("Guess the number : ");
    if(num < 50){
        console.log("Your number is too small, Guess little big");
    }
    else if (num >150){
        console.log("Your number is too big, guess small number ")
    }
    else if (num == random){
        console.log("Congratulation , You guess right Number");
        break;
    }
}
while(num == random);
