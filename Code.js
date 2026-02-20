class ToyotaCar{
    constructor(brand,milege,rate){
        console.log("object creating");
            this.brand = brand;
            this.milege = milege;
            this.rate = rate;
    }
    start(){
        console.log("Starting");
    }
    stop(){
        console.log("stoped");
    };
}
let Fortuner = new ToyotaCar("fortuner",12,"40lakh");
let Innova = new ToyotaCar("Innova",18,"30Lakh");