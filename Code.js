function asyncFun1(){
    return new Promise((resolve,reject) =>{
            setTimeout(()=>{
                console.log("data1");
                resolve("success");
            },4000);
    });
}

function asyncFun2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success");
        },4000);
    });

}

console.log("Data1 fetching......")
let p1 = asyncFun1();
p1.then(()=>{
    console.log("Data2 Fetching.....")
    let p2 = asyncFun2();
    p2.then(()=>{})
});