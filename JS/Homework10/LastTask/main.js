// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
const mainDiv = document.getElementsByClassName('block'[0]);
const form = document.forms.form;
const button = document.getElementById('enter');


button.onclick = function (e){
    e.preventDefault();
    const row = form.row.value;
    const amount = form.amount.value;
    const content = form.content.value;

    for (let i = 0; i < row; i++) {
        const div = document.createElement('div');
    document.body.append(div);


    for (let i = 0; i < amount; i++) {
            const divka = document.createElement('div');
            document.body.append(divka);
            divka.innerHTML = `${content}`;
            divka.style.border = '1px solid black'
            divka.style.height = '100px';
            divka.style.width = '200px';
            div.appendChild(divka);

        }
    }
    form.amount.value = '';
    form.row.value = '';
    form.content.value = '';
}

