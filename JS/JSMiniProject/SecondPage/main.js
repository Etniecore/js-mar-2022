// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
//
const userJson = localStorage.getItem('user');
const user = JSON.parse(userJson)
console.log(user);

const generalDiv = document.createElement('div');
generalDiv.classList.add('general');
document.body.append(generalDiv);

const  wrapDiv = document.createElement('div');
wrapDiv.classList.add('wrap');
generalDiv.append(wrapDiv)



for (const key in user) {
    const div = document.createElement('div');
    div.classList.add('info')
    wrapDiv.append(div);

    if(typeof user[key] !== 'object'){
        div.innerText = `${key} : ${user[key]}`;
    } else {
        div.innerText = `${key} -`;

        for (const item in user[key]) {
            const innerDiv = document.createElement('div');
            innerDiv.classList.add('inner')
            div.append(innerDiv);

            if(typeof user[key][item] !== 'object'){
                innerDiv.innerText = `${item} : ${user[key][item]}`;
            }else {
                innerDiv.innerText = `${item} -`;

                for (const element in user[key][item]) {
                    const divka = document.createElement('div');
                    divka.classList.add('divka')
                    divka.innerText = `${element} : ${user[key][item][element]}`;
                    innerDiv.append(divka);
                }
            }
        }
    }
}

const buttonDiv = document.createElement('div');
buttonDiv.classList.add('button');
generalDiv.append(buttonDiv)

const button = document.createElement('button');
button.classList.add('show');
button.innerText = 'Posts of current user';
buttonDiv.append(button);

const allPosts = document.createElement('div');
allPosts.classList.add('posts');
generalDiv.append(allPosts);


button.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response => response.json())
        .then(data => {
            for (const item of data) {
                const postDiv = document.createElement('div');
                postDiv.classList.add('content');
                postDiv.innerHTML = `Title: ${item.title}<br>` ;

                const btn = document.createElement('button');
                btn.classList.add('read');
                btn.innerText = 'Read the post'

                postDiv.append(btn);
                allPosts.append(postDiv);

                button.disabled = true;

                const link = document.createElement('a');
                link.setAttribute('href', '../ThirdPage/post-details.html' );
                btn.append(link);




                btn.onclick = () =>{
                    const postJson = JSON.stringify(item);
                    localStorage.setItem('post', postJson);

                    window.location.replace('../ThirdPage/post-details.html');

                }
            }
        })
}


