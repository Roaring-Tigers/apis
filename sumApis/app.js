let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2'); 
let btn = document.getElementById('btn');
let output = document.querySelector('.output');


btn.addEventListener('click', findSum)


function findSum(e) {
    e.preventDefault();
    let n1 = +(number1.value);
    let n2 = +(number2.value);
    console.log(n1, n2);

    fetch("http://localhost:5000/sum",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            num1: n1,
            num2: n2
        }),  
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        output.innerHTML = data.message;
    
    })
    .catch(err=>console.log(err))
    

}


// {
//     "num1": 10,
//     "num2": 20
// }