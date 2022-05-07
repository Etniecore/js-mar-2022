// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let greeting = 'hello world';
console.log(greeting.length);
let text = 'lorem ipsum';
console.log(text.length);
let course = 'javascript is cool';
console.log(course.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(greeting.toUpperCase());
console.log(text.toUpperCase());
console.log(course.toUpperCase());
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log(greeting.toLowerCase());
console.log(text.toLowerCase());
console.log(course.toUpperCase());
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyStr = ' dirty string   '
console.log(dirtyStr);
let cleanStr = dirtyStr.replaceAll(' ', '');
console.log(cleanStr);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';
let stringToarray = (string) => {
    return string.split(` `);
}
console.log(stringToarray(str));

//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let numbersArray = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let mapping = numbersArray.map(function (item) {
    item = item + ' ';
    return item;
})
console.log(mapping);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11, 21, 3];
let sortNums = nums.sort((nums, ascending) => nums - ascending);
console.log(sortNums);
let sortNumbers = nums.sort((nums, descending) => descending - nums);
console.log(sortNumbers);


// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortMonth = coursesAndDurationArray.sort((duration, descending) => descending.monthDuration - duration.monthDuration);
console.log(sortMonth);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterCourse = coursesAndDurationArray.filter((item) => {
    if (item.monthDuration > 5) {
        return item;
    }
})
console.log(filterCourse);


// описати колоду карт
let cards = [
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {value: 'joker',color: 'black'},
    {value: 'joker',color: 'red'}
]
// - знайти піковий туз
let aceOfSpades = cards.filter((item) => {
    if (item.cardSuit === 'spade' && item.value === 'ace') {
        return item;
    }
})
console.log(aceOfSpades);
// - всі шістки
let sixes = cards.filter(function (item) {
    if (item.value === '6') {
        return item;
    }
})
console.log(sixes);
// - всі червоні карти
let redCards = cards.filter((item) => {
    if (item.color === 'red') {
        return item;
    }
})
console.log(redCards);
// - всі буби
let diamonds = cards.filter((item) => {
    if (item.cardSuit === 'diamond') {
        return item;
    }
})
console.log(diamonds);
// - всі трефи від 9 та більше
//
let clubs = cards.filter((item) =>{
    if (item.cardSuit === "clubs" && item.value >= 9) {
        return item;
    } else if (item.cardSuit === "clubs" && item.value === 'jack') {
        return item;
    } else if (item.cardSuit === "clubs" && item.value === 'queen') {
        return item;
    } else if (item.cardSuit === "clubs" && item.value === 'king') {
        return item;
    } else if (item.cardSuit === "clubs" && item.value === 'ace') {
        return item;
    }
})
console.log(clubs);

//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

