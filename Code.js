let word = prompt("Enter your name : ");
count =0;
for( const i of word){
    if(i == 'a' ||i == 'i' ||i == 'e' ||i == 'o' ||i == 'u'){
        count++;
    }

}
console.log("Vowels = ",count);

