const url = 'https://jsonplaceholder.typicode.com/posts';
const blogContainer = document.querySelector('[data-blog-container]');
const sort = document.querySelector('[data-sort]');
const form = document.querySelector('[data-filter]');
const dataInput = document.querySelector('[data-input]');

async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
async function create_SortBlogEl () {
    const content  = await getData ();
    if (sort.value === '2') {
        content.sort((a, b) => (a.title < b.title ? -1 : 1));;
    }
    if (sort.value === '3') {
        content.sort((a, b) => (a.title > b.title ? -1 : 1));;
    }
    for (let i = 0; i < content.length; i++) {
        const blogElement = document.createElement('div');
        blogElement.className = 'blog__container-el';
        blogContainer.append(blogElement);
        blogElement.innerText = content[i].title;
    }
}
async function noneSorted() {
    blogContainer.innerHTML = '';
    create_SortBlogEl ();
} 
async function sortStartA () {
    blogContainer.innerHTML = '';
    create_SortBlogEl ();
}
async function sortStartZ () {
    blogContainer.innerHTML = '';
    create_SortBlogEl ()
}
sort.addEventListener('change', (e) => {
    if (sort.value === '0') {
        blogContainer.innerHTML = '';
    }
    if (sort.value === '1') {
        noneSorted();
    }
    if (sort.value === '2') {
        blogContainer.innerHTML = '';
        sortStartA ();
    }
    if (sort.value === '3') {
        blogContainer.innerHTML = '';
        sortStartZ ();;
    }
});
form.addEventListener('submit', filter);
async function filter (event) {
    event.preventDefault();
    blogContainer.innerHTML = '';
    const content  = await getData ();
    if (sort.value === '2') {
        content.sort((a, b) => (a.title < b.title ? -1 : 1));;
    }
    if (sort.value === '3') {
        content.sort((a, b) => (a.title > b.title ? -1 : 1));;
    }
    for (let i = 0; i < content.length; i++) {
        if (content[i].title.indexOf(dataInput.value.toLowerCase()) !== -1) {
        const blogElement = document.createElement('div');
        blogElement.className = 'blog__container-el';
        blogContainer.append(blogElement);
        blogElement.innerText = content[i].title;
        }
    }
    form.reset();
}
