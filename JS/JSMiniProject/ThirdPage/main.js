const postJson = localStorage.getItem('post');
const parsedPost =JSON.parse(postJson)

const general = document.createElement('div');
general.classList.add('general');
document.body.append(general);

const postDiv = document.createElement('div');
postDiv.classList.add('post');
general.append(postDiv);

const heading = document.createElement('h2');
heading.innerText = 'Comments : '
general.append(heading);

const wrap = document.createElement('div');
wrap.classList.add('wrap');
general.append(wrap);


for (const key in parsedPost){
    const post = document.createElement('div');
    post.innerText = `${key} : ${parsedPost[key]}`;
    postDiv.append(post);
}



fetch(`https://jsonplaceholder.typicode.com/posts/${parsedPost.id}/comments`)
.then(response => response.json())
.then(data =>
{
    console.log(data);
    for (const item of data) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        wrap.append(commentDiv);

        for (const key in item) {
            const innerComment = document.createElement('div');
            innerComment.classList.add('inner');
            innerComment.innerText = `${key} : ${item[key]}`;

            commentDiv.append(innerComment);
        }
    }
})