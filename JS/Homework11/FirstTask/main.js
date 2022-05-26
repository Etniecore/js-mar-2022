// -створити форму з інпутами для name та age.
    // При відправці форми записати об'єкт в localstorage

const form = document.forms.form1;
const button = document.getElementById('button');


button.onclick = function (eoc){
    eoc.preventDefault();
    const username = form.name.value;
    const age = form.age.value;
    let user = {
        name:username,
        age:age
    }
    const userJson = JSON.stringify(user);
    localStorage.setItem('user', userJson);
}
