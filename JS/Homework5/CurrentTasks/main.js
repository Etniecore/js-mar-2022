// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let numbers = [1,2,3,4,5];

let avg = (array)=> {
    let total = 0;
    for (let i = 0; i < array.length; i++){
        total += array[i];}
        return total/ array.length;
}
let avgNumb = avg(numbers);
console.log(avgNumb);


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let random = (size) => {
    let empty = [];
    for(let i = 0; i < size; i++){
        empty[i] = Math.round(Math.random()*100);
    }
    return empty;
}
console.log(random(10));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let randomNumb = (size, limit) => {
    let arr = [0];
    for( let i =0; i < size; i++){
        arr[i] = Math.round(Math.random()*limit);
    }
    return arr;
}
console.log(randomNumb(10,100));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let reverse = (array) => console.log(array.reverse());
reverse(numbers);


