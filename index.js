let num1 = "";
let num2 = [];
let num3 = [];

// for (var i = 0; i < document.querySelectorAll(".calcutation").length; i++) {
//     document.querySelectorAll(".calcutation")[i].addEventListener("click", function () {
//         event.preventDefault();
//         document.getElementById("number").value = this.innerHTML;
//     });
// } code working


for (let i = 0; i < document.querySelectorAll(".calcutation").length; i++) {
    document.querySelectorAll(".calcutation")[i].addEventListener("click", function () {
        event.preventDefault();
        num1 = this.innerHTML;
        num2.push(num1);
        console.log(num2);
        document.getElementById("number").value = num2.join("");

});}
