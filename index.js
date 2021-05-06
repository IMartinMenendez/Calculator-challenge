let num1 = "";
let num3 = "";
let num2 = [];
let num4 = [];
let operation = "";


document.querySelector(".clear").addEventListener("click", function () {
    document.getElementById("number").value = "";
    let num1 = "";
    let num3 = "";
    let num2 = [];
    let num4 = [];
    let operation = "";
})


for (let i = 0; i < document.querySelectorAll(".calcutation").length; i++) {
    document.querySelectorAll(".calcutation")[i].addEventListener("click", function () {
        if (operation === "") {
            event.preventDefault();
            num1 = this.innerHTML;
            num2.push(num1);
            document.getElementById("number").value = num2.join("");
            console.log(num2.join(""))
        }
    })
}


for (let i = 0; i < document.querySelectorAll(".operator").length; i++) {
    document.querySelectorAll(".operator")[i].addEventListener("click", function () {
        event.preventDefault();
        operation = this.innerHTML;
        console.log(operation);

        if (operation !== "") {
            for (let i = 0; i < document.querySelectorAll(".calcutation").length; i++) {
                document.querySelectorAll(".calcutation")[i].addEventListener("click", function () {
                    event.preventDefault();
                    num3 = this.innerHTML;
                    num4.push(num3);
                    document.getElementById("number").value = num4.join("");
                    console.log("num4: ", num4.join(""));
                })
            }
        }
    })
}

function total() {
    event.preventDefault();
    switch (operation) {
        case "+":
            operator1 = Number(num2.join(""));
            operator2 = Number(num4.join(""));
            total = operator1 + operator2;
            document.getElementById("number").value = total;
            break;
        case "-":
            operator1 = Number(num2.join(""));
            operator2 = Number(num4.join(""));
            total = operator1 - operator2;
            document.getElementById("number").value = total;
            break;
        case "/":
            operator1 = Number(num2.join(""));
            operator2 = Number(num4.join(""));
            total = operator1 / operator2;
            document.getElementById("number").value = total;
            break;
        case "x":
            operator1 = Number(num2.join(""));
            operator2 = Number(num4.join(""));
            total = operator1 * operator2;
            document.getElementById("number").value = total;
            break;
        case "c":
            document.getElementById("number").value = "";
            break;
        default:
            document.getElementById("number").value = "ERROR";
    }
}
