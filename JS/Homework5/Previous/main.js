// Переробити на стрілочні функції з попереднього дз
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

let squareP = (a,b) => a * b;
console.log(squareP(10,2));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

let roundS= (r) => 3.14 * r * r;
console.log(roundS(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let cylilnderS = (h,r) => 3.14 * h * r * 2;
console.log(cylilnderS(2,4));

// - створити функцію яка приймає масив та виводить кожен його елемент

let products = [
    {
        title: 'Milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'Juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'Tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'Tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    }
];

let arrayFunc = (array) => {
    for (let item of array) {
console.log(`${item.title} ${item.price} ${item.image}`)
    }
}
arrayFunc(products);

// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let textCreator = (text) => document.write(`<p>${text}</p>`);
textCreator(`Hello okten`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let ulCreator = (text) => {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}
ulCreator(`Hello there`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let listCreator = (text, amount) => {
    document.write(`<ul>`)
    for (let i = 0; i < amount; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)
}
listCreator(`Text`, 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let customers = [
    {name: `Chris`, age: 20, status: true},
    {name: `Erika`, age: 24, status: false},
    {name: `John`, age: 43, status: false},
    {name: `Sam`, age: 34, status: true},
    {name: `Clara`, age: 53, status: true},
    {name: `Jack`, age: 33, status: false},
    {name: `Cliford`, age: 40, status: true},
    {name: `Sarah`, age: 26, status: false},
    {name: `Dave`, age: 23, status: true},
    {name: `Jason`, age: 52, status: false},
    {name: `Clark`, age: 31, status: true}
];

let userList = (array) => {
   document.write(`<ul>`);
    for (let item of array) {
        document.write(`<li>${item.name}${item.age}${item.status}</li>`)
    }
   document.write(`</ul>`);
}
userList(customers);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let visitors = [
    {id:4042 ,name: `Chris`, age: 20},
    {id:4022 ,name: `Erika`, age: 24},
    {id:4041 ,name: `John`, age: 43},
    {id:4034 ,name: `Sam`, age: 34},
    {id:4053 ,name: `Clara`, age: 53},
    {id:4058 ,name: `Jack`, age: 33},
    {id:4099 ,name: `Cliford`, age: 40},
    {id:4011 ,name: `Sarah`, age: 26},
    {id:4050 ,name: `Dave`, age: 23},
    {id:4009 ,name: `Jason`, age: 52},
    {id:4001 ,name: `Clark`, age: 31}
];

let visitorsList = (array) => {
    document.write(`<div>`);
    for (const item of array) {
        document.write(`<div>${item.id} ${item.name} ${item.age}</div>`)
    }
    document.write(`</div>`);
}
visitorsList(visitors);

// - створити функцію яка повертає найменьше число з масиву

let numbers= [1,2,7,9,-5,20,30,40,80];
let lessOf = (array)=> {
    let minNumb = array[0];
    for (let i = 0; i < array.length; i++){
        if(array[i] < minNumb){
            minNumb = array[i];
        }
    }
    return minNumb;
}
let result = lessOf(numbers);
console.log(result);



// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let addOf = (array) => {
    let initial = array[0];
    for (let i = 0; i < array.length; i++){
        initial += array[i];
    }
    return initial;
}
console.log(addOf(numbers));
