const select = document.querySelector("select");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

btn.addEventListener("click", () => {

    const num1 = parseInt(document.querySelector(".num1").value);
    const num2 = parseInt(document.querySelector(".num2").value);
    let sum;

    switch(select.value) {
        case "+":
            sum = num1 + num2;
            break;
        case "-":
            sum = num1 - num2;
            break;
        case "*":
            sum = num1 * num2;
            break;
        case "/":
            sum = num1 / num2;
            break;
        default:
            sum = 0;
    }

    const li = document.createElement("li");
    li.innerText = sum;
    ul.appendChild(li);
});