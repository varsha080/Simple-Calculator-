let string= " ";
let buttons= document.querySelectorAll(".butto");
Array.from(buttons).forEach((butto) => {
 butto.addEventListener("click",(e)=>{
    console.log(e.target)
    if(e.target.innerHTML == "="){
        string=eval(string);
        document.querySelector("input").value=string;
    }
    else if(e.target.innerHTML=="Clear"){
        string=" ";
        document.querySelector("input").value=string
    }
    else if(e.target.innerHTML=="M-"){
        string=string*-1;
        document.querySelector("input").value=string;
    }
    else if(e.target.innerHTML=="M+"){
        if(document.querySelector("input").value.charAt(0)=="-"){
            string = string*-1;
        }
        document.querySelector("input").value=string;
    }
    else{
    string=string + e.target.innerHTML;
    document.querySelector("input").value=string;
    }
    
    
 })
})
