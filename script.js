let btn = document.getElementById("my_button");
let display = document.getElementById("digital_input");


let operator = "";
let check = false;

btn.addEventListener('click', handleKey)

function handleKey(e) {
    if (e.target.matches("button")) {
        let action = e.target.dataset.action;
        let str = display.value;
        
        if (action == "cancle") {
            display.value = 0;
        }
        else if(action == "equal"){
            
            try{
                display.value = eval(display.value);
            }
            catch{
                check = true;
                display.value = "error"; 
            }
        }
        else if(action == "delete"){
            display.value = display.value.slice(0, display.value.length-1);
            console.log("One value deleted from last.")
            // if(display.value != "0"){
            //     display.value = str.slice(0, str.length-1);
            // }
        }
        else{
    
            if((!action && display.value == "0") || (check && !action)){
                display.value = e.target.innerText;
                if(check){
                    check = false;
                }
            }
            else if((action && display.value == "0" )|| (check && action)){
                display.value = 0;
            }
            else if(action && isOperator(str[str.length-1])){
                display.value = str.slice(0, str.length-1);
                display.value += e.target.innerText;
            }
            else{
                display.value += e.target.innerText;
            }
            
        }
    }
}

function isOperator(opr){
    if(opr == "+" || opr == "-" || opr == "/" || opr == "*"){
        return true;
    }
    else{
        return false;
    }
}



