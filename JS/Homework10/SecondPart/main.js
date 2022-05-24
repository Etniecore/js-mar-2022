// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.


const first = document.forms.form1;
const second = document.forms.form2;
const button = document.getElementById('button');
console.log(button);

button.onclick = function (e){
    e.preventDefault();
    const username = first.username.value;
    const email = first.email.value;
    const age = second.age.value;
    const password = second.password.value;

    const user = {
        name: username,
        email: email,
        age : age,
        password: password
    }
    console.log(user);
    first.username.value = '';
    first.email.value = '';
    second.age.value = '';
    second.password.value = '';
};

