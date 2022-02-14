import './styles.scss';
let flag = false;
const list = ['Anna', 'Alla', 'Olga', 'Nastya', 'Ira', 'Luda', 'Oleg', 'Igor', 'Stas', 'Vlad', 'Mark', 'Max']

const nameButton = document.getElementById('name__button')
const balanceButton = document.getElementById('balance__button')
const ageButton = document.getElementById('age__button')
const documentButton = document.getElementById('document__button')
const levelButton = document.getElementById('level__button')
const buttonClear = document.getElementById('button__clear')
const buttonCandidate = document.getElementById('button__candidate')
const buttonAll = document.getElementById('button__all')
const buttonInit = document.getElementById('button__init')
const buttonRace = document.getElementById('button__race')
let candidats = [];

buttonAll.addEventListener('click', () => {
        nameButton.click();
        balanceButton.click();
        ageButton.click();
        documentButton.click();
        levelButton.click();

})

nameButton.addEventListener('click', () => {
    const nameInput = document.getElementById('name__input')
    nameInput.value = list[Math.floor(Math.random() * list.length)];
})

balanceButton.addEventListener('click', () => {
    const balanceInput = document.getElementById('balance__input')

    const a = Math.random() * 100;
    if (a < 60) {
        balanceInput.value = Math.floor(Math.random() * (100000 - 2000 + 1)) + 2000
    } else {
        balanceInput.value = Math.floor(Math.random() * (1999 - 100)) + 100
    }

})

ageButton.addEventListener('click', () => {
    const ageInput = document.getElementById('age__input')

    const a = Math.random() * 100;
    if (a < 70) {
        ageInput.value = Math.floor(Math.random() * (60 - 18 + 1)) + 18
    } else {
        if (a < 85) {
            ageInput.value = Math.floor(Math.random() * (18 - 5 + 1)) + 5
        } else {
            ageInput.value = Math.floor(Math.random() * (100 - 60 + 1)) + 60
        }
    }
})

documentButton.addEventListener('click', () => {
    const documentInput = document.getElementById('document__input')

    const a = Math.random() * 100;
    if (a < 80) {
        documentInput.value = 3
    } else {
        documentInput.value = Math.floor(Math.random() * (2 - 0 + 1)) + 0
    }
})

levelButton.addEventListener('click', () => {
    const levelInput = document.getElementById('level__input')

    const a = Math.random() * 100;
    if (a < 30) {
        if (a < 10) {
            levelInput.value = 'B1'
        }
        if (a < 20) {
            levelInput.value = 'B2'
        } else {
            levelInput.value = 'C1'
        }
    } else {
        if (a < 70) {
            levelInput.value = 'A1'
        } else {
            levelInput.value = 'A2'
        }
    }
})

buttonClear.addEventListener('click', () => {

    const nameInput = document.getElementById('name__input')
    const balanceInput = document.getElementById('balance__input')
    const ageInput = document.getElementById('age__input')
    const documentInput = document.getElementById('document__input')
    const levelInput = document.getElementById('level__input')

    nameInput.value = ''
    balanceInput.value = ''
    ageInput.value = ''
    documentInput.value = ''
    levelInput.value = ''

    candidats = [];

    ctx.clearRect(0, 0, canvas.width, canvas.height);


})

buttonCandidate.addEventListener('click', () => {

    const nameInput = document.getElementById('name__input')
    const balanceInput = document.getElementById('balance__input')
    const ageInput = document.getElementById('age__input')
    const documentInput = document.getElementById('document__input')
    const levelInput = document.getElementById('level__input')

    const checkMoneyBalance = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
    const checkPassportControl = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    const checkDocument = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    const checkEnglish = Math.floor(Math.random() * (10 - 5 + 1)) + 5;

    if (candidats.length === 5) {
        return alert("Maximum number of people")

    }

    candidats.push({
        Name: nameInput.value,
        balance: balanceInput.value,
        age: ageInput.value,
        document: documentInput.value,
        levelEng: levelInput.value,
        examination: {
            moneyBalance: checkMoneyBalance,
            passportControl: checkPassportControl,
            document: checkDocument,
            english: checkEnglish
        }
    })

    console.log(candidats[0].examination.document)


})

let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');


buttonInit.addEventListener('click', () => {

    for (let i = 0; i < candidats.length; i++) {
        let range = [i] + 4 + 5
        ctx.beginPath();
        ctx.arc(100, range, 30, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.textBaseline = "top";
        ctx.font = "bold 15px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(candidats[i].Name, 80, range);
    }

})

// does not work
/*buttonRace.addEventListener('click', () => {
    let text = candidats[0].examination.document;

    let interval = setInterval(() =>{

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(100, 145, 30, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.textBaseline = "top";
        ctx.font = "bold 15px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(text, 80, 100);
        text -= 1
        if (text < 0){
            clearInterval(interval)
            text = candidats[0].examination.document;
            let interval2 = setInterval(() =>{

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                ctx.arc(200, 145, 30, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.textBaseline = "top";
                ctx.font = "bold 15px Arial";
                ctx.fillStyle = "black";
                ctx.fillText(text, 180, 100);
                text -= 1
                if (text < 0){
                    clearInterval(interval2)
                    text = 'winner';

                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.beginPath();
                    ctx.arc(300, 145, 30, 0, 2 * Math.PI);
                    ctx.stroke();
                    ctx.textBaseline = "top";
                    ctx.font = "bold 15px Arial";
                    ctx.fillStyle = "black";
                    ctx.fillText(text, 280, 100);
                }
            }, 1000)
        }
    }, 1000)

});*/








