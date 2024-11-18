document.querySelector("button").addEventListener("click", function() {
    const n1 = document.getElementById("n1");
    const n2 = document.getElementById("n2");
    const op = document.getElementById("calc");
    let result = document.querySelector("h3");
    switch(op.value){
        case '+':
            console.log(n1);
            result.textContent = "Result: " + (parseFloat(n1.value) + parseFloat(n2.value));
            break;
        case '-': 
            result.textContent = "Result: " + (parseFloat(n1.value) - parseFloat(n2.value));
            break;
        case '*':
            result.textContent = "Result: " + (parseFloat(n1.value)*parseFloat(n2.value));
            break;
        case '/':
            result.textContent = "Result: " + (parseFloat(n1.value)/parseFloat(n2.value));
            break;
        default:
            console.log("N foi");
    }
});
