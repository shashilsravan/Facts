let Button = document.querySelector('.submitBtn')
let fact = document.querySelector('#fact')
let factText = document.querySelector('#factText')
let numberInput = document.querySelector('#numberInput')

numberInput.addEventListener('input', getFactAjax);
Button.addEventListener('click', getFactFetch);
function getFactAjax(){
    let number = numberInput.value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://numbersapi.com/' + number)
    xhr.onload = function(){
        if (this.status == 200 && number != ''){
            fact.style.display = 'block'
            factText.textContent = this.responseText
        }
        else{
            fact.style.display = 'none';
        }
    }
    xhr.send();
    
}

function getFactFetch(e){
    e.preventDefault();
    let number = numberInput.value
    fetch('http://numbersapi.com/' + number)
    .then(response => response.text())
    .then(data => {
        if (number != ''){
            factText.textContent =  data;
        }
        else{
            fact.style.display = 'none';
        }
    }).catch(err => console.log(err))
}
let Button2 = document.querySelector('.submitBtn2')
let fact2 = document.querySelector('#fact2')
let factText2 = document.querySelector('#factText2')
let numberInput2 = document.querySelector('#numberInput2')

numberInput2.addEventListener('input', getFactAjax2);
Button2.addEventListener('click', getFactFetch2);
function getFactAjax2(){
    let number = numberInput2.value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://numbersapi.com/' + number + '/year')
    xhr.onload = function(){
        if (this.status == 200 && number != ''){
            fact2.style.display = 'block'
            factText2.textContent = this.responseText
        }
        else{
            fact2.style.display = 'none'
        }
    }
    xhr.send();
    
}

function getFactFetch2(e){
    e.preventDefault();
    let number = numberInput2.value
    fetch('http://numbersapi.com/' + number + '/year')
    .then(response => response.text())
    .then(data => {
        if (number != ''){
            factText2.textContent =  data;
        }
        else{
            fact2.style.display = 'none';
        }
    }).catch(err => console.log(err))
}