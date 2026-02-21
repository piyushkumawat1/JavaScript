function getData(getId,getNextData){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("data =",getId);
            resolve("Success");
            if(getNextData){
                getNextData();
            }
        },5000);
    });
}