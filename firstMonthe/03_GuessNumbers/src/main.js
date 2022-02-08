let btn_start = document.getElementById("start");
let btn_end = document.getElementById("end-btn");
let btn_check = document.getElementById("check");

let main_div = document.getElementById("main-div");

let guess_box = document.getElementById("guess-box");
let all_guesses = document.getElementById("all-guesses");
let high_or_low = document.getElementById("high-or-low");
let answer = document.getElementById("answer");

let count_guess = 1;
let random_num = 0;

function maxValidation(Max){   // test
    if (Max === '' || isNaN(Max)) {
        answer.textContent = ("Enter the number");
        return false;
    }
    if (Max <= 0) {
        answer.textContent = ("The minimum number must be greater than 0");
        return false;
    }
    if (Max % 1 !== 0) {
        answer.textContent = ("The number must be non-floating point");
        return false;
    }

    return true;
}

function tryValidation(trys){   // test

    if (trys > 15 || trys < 1 || trys % 1 !== 0 || trys === '' || isNaN(trys)) {
        answer.textContent = ("The number of attempts is not more than 15, and not less than 1");
        return false;
    }

    return true;
}


function start(){
    let Max = document.getElementById("Max").value; //// диапазон

    if (maxValidation(Max) !== true) return;

    answer.textContent = '';
    random_num = Math.floor(Math.random() * Max) + 1;

    main_div.style.visibility = "visible";
}

function checkGuess() {

    let trys = document.getElementById("try").value;  /// кол.попыток

    if (tryValidation(trys) !== true) return;

    let your_guess = Number(guess_box.value);

    if (count_guess <= trys) {
        if (your_guess < random_num) {
            all_guesses.textContent += your_guess + " ";
            high_or_low.textContent = ('Не угадал, твое число меньше !!! ' + ( trys - count_guess) + ' попытки осталось');
            high_or_low.classList.add("wrong");
            count_guess++;
            guess_box.value = '';
        }
        else if (your_guess > random_num) {
            all_guesses.textContent += your_guess + " ";
            high_or_low.textContent = ('Не угадал, твое число больше !!! ' + ( trys - count_guess) + ' попытки осталось');
            high_or_low.classList.add("wrong");
            count_guess++;
            guess_box.value = '';
        }
        else {
            all_guesses.textContent += your_guess + " ";
            high_or_low.textContent = (" Поздравляю! Ты угадал задуманное число за: " + count_guess + ' попытку');
            high_or_low.classList.add("success");
            guess_box.value = '';
            gameOver();
        }
    }
    else {
        all_guesses.textContent += your_guess + " ";
        high_or_low.textContent = "Упс....Конец";
        high_or_low.classList.add("wrong");
        guess_box.value = '';
        gameOver();
    }
}

function gameOver() {
    btn_check.disabled = true;
    guess_box.disabled = true;
}

module.exports = {maxValidation, tryValidation}
