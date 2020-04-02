document.addEventListener('click', function(e) {
    if (e.target.classList.contains("plus")) {
        ++e.target.parentElement.querySelector("#num").value;
    } else if (e.target.classList.contains("minus")) {
        --e.target.parentElement.querySelector("#num").value;
    } else if (e.target.classList.contains("multiply")) {
        e.target.parentElement.querySelector("#num2").value *= e.target.parentElement.querySelector("#num2").value;
    } else if (e.target.classList.contains("clear")) {
        document.querySelector('#num').value = '0';
        document.querySelector('#num2').value = '0';
    };
});