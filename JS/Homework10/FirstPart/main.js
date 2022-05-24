// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
//

const div = document.getElementById('text');
console.log(div);
const button = document.forms.f1;
console.log(button);
button.onsubmit = function (e){
    e.preventDefault();
    div.innerHTML = '';
    div.style.background = 'white';
    div.style.border = '0px';
    div.style.height = '0px';
    div.style.width = '0px';
}


    // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let divka = document.getElementById('divka');

const input = document.forms.f2;

input.onsubmit = function (eos) {
    eos.preventDefault();
    let userAge = input.age.value;
    console.log(userAge);
    if(userAge >= 18){
        divka.innerText = 'You are allowed to visit this website.'
    }
    else {
        divka.innerText = ' You are too young.'
    }
    input.age.value = '';
}


