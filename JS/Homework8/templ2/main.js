// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header

const mainHeader = document.getElementById('main_header');
mainHeader.classList.add('javascript');
console.log(mainHeader);
// b) робить шириниу елементу ul 400px
const ul = document.getElementsByTagName('ul');
console.log(ul[0]);
ul[0].style.background = 'orange';
ul[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
const links = document.getElementsByClassName('linkList');
console.log(links);
for (const item of links) {
    item.style.width = '50%';
    item.style.background = 'yellow';
}
// d) отримує текст який зберігається в елементі з класом listElement2
const text = document.getElementsByClassName('listElement2');
    console.log(text[0].innerText);
// e) отримує всі елементи li та змінює ім колір фону на сірий
    const lists = document.getElementsByTagName('li');
    console.log(lists);
    for (const item of lists) {
        item.style.background = 'silver'
}
// f) отримує всі елементи 'a' та додає їм клас anchor
const ref = document.getElementsByTagName('a');
console.log(ref);
for (const item of ref) {
    item.classList.add('anchor');
}
console.log(ref);
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const item of ref) {
    if(item.innerText === 'link3'){
        item.style.fontSize = '40px'
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const item of ref) {
    item.classList.add(`element_${item.innerText}`);
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
const header = document.getElementsByClassName('sub-header');
console.log(header);
for (const item of header) {
    item.style.background = prompt(`choose the color, please`);
}
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
for (const item of header) {
    if(item.innerText === 'content 2 segment'){
        item.style.color = prompt('Color of the text');
    }
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
const block = document.getElementsByClassName('content_1');
console.log(block);
for (const item of block) {
    item.innerText = prompt('Enter the message')
}
// l) отримати елементи p та змінити їм padding на 20px
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);
for (const item of paragraphs) {
    item.style.padding = '20px';
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
const texting = document.getElementsByClassName('text2');
for (const item of texting) {
    item.innerText = 'march-2022'
}
