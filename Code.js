let newBtn = document.querySelector("#mode");
let currMode = "light";
newBtn.addEventListener("click",()=>{
     let oldheading = document.querySelector("h1");
        
    if(oldheading) {
            oldheading.remove();
        }
    if(currMode ==="light"){
          currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        let heading = document.createElement("h1");
        document.body.appendChild(heading);
        heading.style.textAlign = "center";
        heading.innerText = "Dark Mode";
        heading.style.color = "white";
       
    }
    else{
        let oldheading = document.querySelector("h1");
        if(oldheading){
        oldheading.remove();
       }
         currMode = "light"
        document.querySelector("body").style.backgroundColor = "white";
        let heading = document.createElement("h1");
        document.body.appendChild(heading);
        heading.style.textAlign = "center";
        heading.innerText = "White Mode";
        heading.style.color = "black";
       
       
    }
});
