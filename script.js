function getCardEl(text) {
    const cardEl = document.createElement('div');
    cardEl.classList.add('card');
    return cardEl;
}

function getTitleElement(text) {
    const titleElement = document.createElement('h1');
    titleElement.textContent = text;
    titleElement.classList.add('main-title');
    return titleElement
}

function getDescElement(text) {
    const descElement = document.createElement('p');
    descElement.textContent = text;
    descElement.classList.add('desc');
    return descElement
}

function getCenterWrapElement() {
    let buttonWrapElement = document.createElement('div');
    buttonWrapElement.classList.add('center-wrap');
    return buttonWrapElement 
}

function getButtonElement(text) {
    const buttonElement = document.createElement('button');
    buttonElement.textContent = text;
    buttonElement.classList.add('btn');
    return buttonElement
}

function navigate(cardName) {
    const appElement = document.getElementById('app');
    appElement.innerHTML = '';

    switch(cardName) {
        case "login":
            createLoginCard(appElement);
            break
        case "reg":
            createRegCard(appElement);
            break
        default:
            createHomeCard(appElement);
    }
}

function createHomeCard(containerElement) {
    let cardElement = getCardEl();
    const titleElement = getTitleElement('Добро пожаловать на сайт!');
    const descElement = getDescElement('Войдите в личный кабинет. Если Вы еще не зарегистрированы - пройдите регистрацию')
    const centerWrapElement = getCenterWrapElement();
    const loginButtonElement = getButtonElement('Войти');
    const regButtonElement = getButtonElement('Регистрация');

    loginButtonElement.addEventListener('click', function () {
        navigate('login');
    });

    regButtonElement.addEventListener('click', function () {
        navigate('reg');
    });

    containerElement.append(cardElement)
    cardElement.append(titleElement, descElement, centerWrapElement);
    centerWrapElement.append(loginButtonElement, regButtonElement);

}

document.addEventListener('DOMContentLoaded', function () {
    navigate();
});