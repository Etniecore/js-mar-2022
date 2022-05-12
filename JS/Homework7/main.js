// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User(1001, `oleg`, `vahovskiy`, `vahovskiy@gmail.com`, 380662416841);
let user2 = new User(1002, `oleg`, `vahovskiy`, `vahovskiy@gmail.com`, 380662416841);
let user3 = new User(1003, `oleg`, `vahovskiy`, `vahovskiy@gmail.com`, 380662416841);
let user4 = new User(1004, `oleg`, `vahovskiy`, `vahovskiy@gmail.com`, 380662416841);
let user5 = new User(1005, `oleg`, `vahovskiy`, `vahovskiy@gmail.com`, 380662416841);
let user6 = new User(1006, `oleg`, `vahovskiy`, `vahovskiy@gmail.com`, 380662416841);
let user7 = new User(1007, `oleg`, `vahovskiy`, `vahovskiy@gmail.com`, 380662416841);
let user8 = new User(1008, `oleg`, `vahovskiy`, `vahovskiy@gmail.com`, 380662416841);
let user9 = new User(1009, `oleg`, `vahovskiy`, `vahovskiy@gmail.com`, 380662416841);
let user10 = new User(10010, `oleg`, `vahovskiy`, `vahovskiy@gmail.com`, 380662416841);
console.log(user1);

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [];
users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterID = users.filter(function (user) {
    if (user.id % 2 === 0) {
        return user;
    }
});
console.log(filterID);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let sortId = users.sort((a, b) => a.id - b.id);
console.log(sortId);
let reverseSortId = users.sort((a, b) => b.id - a.id);
console.log(reverseSortId);


let orders = [`smartphone`, `headsets`, `mouse`, `keyboard`, `glasses`]

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [];
for (let i = 0; i < 10; i++) {
    clients.push(new Client(`1000` + i, 'viktor', 'shevchenko', 'shev.v@outlook.com', 38050302323, `${orders}`));
}
;
console.log(clients);

let sortOrders = clients.sort((a, b) => b.order.length - a.order.length);
console.log(sortOrders);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function CarConstructor(model, manufacturer, year, speed, capacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.speed = speed;
    this.capacity = capacity;
    this.greeting =function () {
        return `їдемо зі швидкістю ${this.speed} на годину`
    }
    this.info = function () {
        return `Manufacturer - ${this.manufacturer}`
    }
    this.increaseMaxSpeed = function (newSpeed) {
        return this.speed = this.speed + newSpeed ;
    }
    this.changeYear = function (newValue){
        return this.year = newValue;
    }
    this.addDriver = function (driver){
        return this.driver = driver;
    }
}
let car = new CarConstructor(`C6`,'Corvette', '2010', 250, '450 hps');
console.log(car);
console.log(car.greeting());
console.log(car.info());
console.log(car.increaseMaxSpeed(20));
console.log(car.changeYear(`2020`));
console.log(car.addDriver(`Bodya`));

