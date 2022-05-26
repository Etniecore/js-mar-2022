// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.


const form = document.forms.form1;
const button = document.getElementsByTagName('button')[0];
let cars = [];


button.onclick = function (eoc) {
    eoc.preventDefault();
    const model = form.model.value;
    const type = form.type.value;
    const volume = form.volume.value;
    let car = {
        model:model,
        type:type,
        volume:volume
    }
    cars.push(car);
    const JsonCars = JSON.stringify(cars);
    localStorage.setItem('cars', JsonCars);
}