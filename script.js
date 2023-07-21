let btn = document.getElementById("my_button");
let display = document.getElementById("digital_input");


let operator = "";
let check = false; /*  For error and after erasing it */
let dot = false; /*For not showing double dot into expression in one operand */

btn.addEventListener('click', handleKey)

function handleKey(e) {
    if (e.target.matches("button")) {
        let action = e.target.dataset.action;
        let str = display.value;

        if (action == "cancle") {
            dot = false;
            display.value = "";
        }
        else if (action == "equal") {
            dot = false;
            try {
                let result = eval(display.value);
                if (isNaN(result) || result == "Infinity") {
                    throw {
                        errorCheck: true,
                        errorValue: result
                    }
                }
                display.value = result;
            }
            catch (error) {
                if (error.errorCheck) {
                    display.value = NaN;
                } else {
                    display.value = "error";
                }

                check = true;
            }
        }
        else if (action == "delete") {
            // display.value = display.value.slice(0, display.value.length-1);
            console.log("One value deleted from last.")
            if (display.value.slice(-1) == ".") {
                dot = false;
            }

            if (display.value != "0") {
                display.value = display.value.slice(0, display.value.length - 1);
            }
            else {
                display.value = "0"
            }
        }
        else {

            if ((!action && display.value == "") || (check && !action)) {
                display.value = e.target.innerText;
                if (check) {
                    check = false;
                }
            }
            else if ((action && display.value == "") || (check && action)) {

                if (action == "subtract") {
                    display.value += e.target.innerText;
                }

                if (action == "dot") {
                    display.value += 0;
                    display.value += e.target.innerText;
                    dot = true;
                }
            }
            else if (action && isOperator(display.value.slice(-1))) {
                if (action == "dot") {
                    display.value += e.target.innerText;
                }

                if (display.value.length != 1) {
                    display.value = display.value.slice(0, display.value.length - 1);
                    display.value += e.target.innerText;
                }
            }
            else {
                if (!dot && action) {
                    if (action == "dot") {
                        dot = true;
                    }
                    display.value += e.target.innerText;
                }
                else if (action && dot) {
                    if (action == "dot") {
                        dot = true;
                    }
                    else {
                        display.value += e.target.innerText;
                        dot = false;
                    }

                }
                else if (action != "dot") {
                    display.value += e.target.innerText;
                }
            }

        }
    }
}

function isOperator(opr) {
    if (opr == "+" || opr == "-" || opr == "/" || opr == "*") {
        return true;
    }
    else {
        return false;
    }
}



