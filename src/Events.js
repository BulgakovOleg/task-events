export function createButton() {
    const button = document.createElement('button');

    button.textContent = 'Удали меня';

    button.addEventListener('click', function () {
        button.remove();
    });

    document.body.appendChild(button);
}

export function createArrList(arr) {
    const ul = document.createElement('ul');

    arr.forEach((text) => {
        const li = document.createElement('li');

        li.textContent = text;

        li.addEventListener('mouseover', function () {
            li.setAttribute('title', li.textContent);
        });

        ul.appendChild(li);
    });

    document.body.appendChild(ul);
}

export function createLink() {
    const link = document.createElement('a');
    link.href = 'https://tensor.ru/';
    link.textContent = 'tensor';

    let isFirstClick = true;

    link.addEventListener('click', function (event) {
        if (isFirstClick) {
            event.preventDefault();

            this.textContent += ' ' + this.href;

            isFirstClick = false;
        }
    });

    document.body.appendChild(link);
}

export function createList() {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = 'Пункт';
    ul.appendChild(li);

    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';

    ul.addEventListener('click', function (event) {
        if (event.target && event.target.tagName === 'LI') {
            event.target.textContent += '!';
        }
    });

    button.addEventListener('click', function () {
        const newLi = document.createElement('li');
        newLi.textContent = 'Пункт';
        ul.appendChild(newLi);
    });

    document.body.appendChild(ul);
    document.body.appendChild(button);
}
