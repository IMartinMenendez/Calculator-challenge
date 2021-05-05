

for (var i = 0; i < document.querySelectorAll(".calcutation").length; i++) {

    document.querySelectorAll(".calcutation")[i].addEventListener("click", function () {
        event.preventDefault();
        document.getElementById("number").value = this.innerHTML;
    });
}
