// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts



const mainDiv = document.createElement('div');
mainDiv.classList.add('main');
document.body.append(mainDiv);



fetch("https://jsonplaceholder.typicode.com/posts")
.then(response =>response.json())
.then(data=>{

    for (const item of data) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        mainDiv.append(postDiv);
        for (const key in item) {
            const keyDiv = document.createElement('div');
            keyDiv.classList.add('key');
            postDiv.append(keyDiv);
            keyDiv.innerHTML = `${key} - ${item[key]}`;
        }
    }
})