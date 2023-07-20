let btn = document.getElementById("my_button");

let num1 = "";
let num2 = "";
let operator = "";
let check = false;

btn.addEventListener('click', handleKey)
function handleKey(e) {
    if (e.target.matches("button")) {
        // console.log(e.target.innerText);


        const action = e.target.dataset.action;
        if (!action) {
            if (!check) {
                num1 += e.target.innerText;
                // console.log("Hello answer is " + num1);
            }
            else {
                num2 += e.target.innerText;
            }
            document.getElementById("digital_input").value += e.target.innerText;
            console.log(action);
        }
        else {
            check = true;

            if (action == "addition") {
                operator = action;
                document.getElementById("digital_input").value += "+";
            }
            if (action == "subtract") {
                operator = action;
                document.getElementById("digital_input").value += "-";
            }
            if (action == "multiply") {
                operator = action;
                document.getElementById("digital_input").value += "*";
            }
            if (action == "devide") {
                operator = action;
                document.getElementById("digital_input").value += "/";
            }


            if (action == "equal") {
                const result = calculate(num1, num2, operator);

                document.getElementById("digital_input").value = result;
            }

            if(action == "cancle"){
                num1 = "";
                num2 = "";
                check = false;
                operator = "";
                document.getElementById("digital_input").value = "";
            }
        }
    }
}

function calculate(num1, num2, operator){
    console.log("num1 is " + num1);
    console.log("num2 is " + num2);
    console.log("operator is " + operator);

    if(!operator){
        return "";
    }

    let answer;
    if(operator == "devide"){
        answer = Number(num1) / Number(num2);
    }

    if(operator == "multiply"){
        answer = Number(num1) * Number(num2);
    }

    if(operator == "subtract"){
        answer = Number(num1) - Number(num2);
    }

    if(operator == "addition"){
        answer = Number(num1) + Number(num2);
    }

    // console.log("Hello ans is " + answer);

    return answer;
}
