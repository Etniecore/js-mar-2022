// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
const content = document.getElementById('content');
console.log(content);
// -- отримує текст з блоку з id "rules"
const rules = document.getElementById('rules');
console.log(rules);
// -- замініть текст параграфа з id 'content' на будь-який інший
content.innerText = 'Text for editing';
console.log(content);
// -- замініть текст параграфа з id 'rules' на будь-який інший
rules.innerText = 'Here, you should see something new';
// -- змініть кожному елементу колір фону на червоний
const lists = document.getElementsByTagName(`ul`)
console.log(lists);
for (const item of lists) {
    item.style.background = 'red';
}
content.style.background = 'red';
rules.style.background = 'red';
// or
// const body = document.querySelectorAll('*')
// for (const item of body) {
//     item.style.color = 'red';
// }
// or
// const body = document.body.children
// -- змініть кожному елементу колір тексту на синій
for (const item of lists) {
    item.style.color = 'blue';
}
content.style.color = 'blue';
rules.style.color = 'blue';
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(rules.classList);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
const fcRules = document.getElementsByClassName(`fc_rules`);
for (const item of fcRules) {
    item.style.color = 'red';
}