// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
const div = document.createElement('div');
div.classList.add('wrap','collaple', 'aplha', 'beta');
div.innerText = 'Hello Okten';
div.style.background = 'silver';
div.style.color = 'blue';
div.style.fontSize = '20px';
document.body.appendChild(div);

const divClone = div.cloneNode(true);
document.body.appendChild(divClone);
// or
// document.body.appendChild(div.cloneNode(true));



// - Є масив:
   const array = ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
const ul = document.getElementsByClassName('menu')[0];

   for (const item of array) {
    const li = document.createElement('li');
    li.innerHTML = `${item}`;
    ul.appendChild(li);
}


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
const mainBlock = document.createElement('div');
for (const item of coursesAndDurationArray) {
    const block = document.createElement('div');
    block.innerHTML = `Title- ${item.title}. Duration - ${item.monthDuration} <hr/>`;
    mainBlock.appendChild(block);
}
document.body.appendChild(mainBlock);

//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
//
for (const item of coursesAndDurationArray) {
    const divElement = document.createElement('div');
    divElement.classList.add('item');
    divElement.innerHTML = `<h1> ${item.title}</h1> <p>${item.monthDuration}</p>`;
    mainBlock.appendChild(divElement);
}
const heading = document.getElementsByTagName('h1');
for (const item of heading) {
    item.classList.add('heading');
}
const paragraphs = document.getElementsByTagName('p');
for (const item of paragraphs) {
    item.classList.add('description');
}

