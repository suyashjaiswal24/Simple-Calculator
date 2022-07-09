const nodeList = document.querySelectorAll(".keys");
let display = ""
for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].addEventListener("click", function () {

        if (this.innerHTML == '='){
            document.getElementById("display").textContent = eval(display);
            display = ""
        }
        else {
            if (this.innerHTML == 'C')
                display = "";
            else
                display += this.innerHTML;
            document.getElementById("display").textContent = display;
        }

    });
}