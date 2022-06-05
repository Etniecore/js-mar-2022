// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
//
//


const generalDiv = document.createElement('div');
generalDiv.classList.add('general');
document.body.appendChild(generalDiv);


fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(data => {
        for (const item of data) {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user');
            userDiv.innerHTML = ` <h3>ID :${item.id}</h3> <p>Name :${item.name}</p>`
            generalDiv.append(userDiv);

            const button = document.createElement('button');
            button.innerText = 'More details';
            userDiv.append(button);


            const page = `../SecondPage/user-details.html`;

            const link = document.createElement('a');
            link.setAttribute('href', page);
            button.append(link);

            button.onclick = function () {
                const userJson = JSON.stringify(item);
                localStorage.setItem(`user`, userJson);

                window.location.replace(page);
            }
        }
    });




