// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

const mainDiv = document.createElement('div');
mainDiv.classList.add('main');
document.body.appendChild(mainDiv);


fetch('https://jsonplaceholder.typicode.com/comments')
.then(response =>response.json())
.then(data =>{
    for (const item of data) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        mainDiv.appendChild(commentDiv);

        for (const key in item) {
            const keyDiv = document.createElement('div');
            keyDiv.classList.add('key');
            commentDiv.appendChild(keyDiv);
            keyDiv.innerText =`${key} - ${item[key]}`;
        }
    }
})