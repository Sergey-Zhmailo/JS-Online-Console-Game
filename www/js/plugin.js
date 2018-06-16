const quiz = (function () {
    let questionsList = [
        {
            question: 'Сегоня июнь?',
            answers: ['Да', 'Нет'],
            trueAnswer: 'Да'
        },
        {
            question: 'Сегоня май?',
            answers: ['Да', 'Нет'],
            trueAnswer: 'Нет'
        },
        {
            question: 'Земля плоская?',
            answers: ['Да', 'Нет'],
            trueAnswer: 'Нет'
        }
    ];
    let myScore;
    let answerNumber;

    function start() {
        myScore = 0;
        getQuestion();
    }

    function getQuestion() {
        for (let i = 0; i < questionsList.length; i++) {
            console.log(questionsList[i].question);
            for (let prop in questionsList[i].answers) {
                if (questionsList[i].answers[prop] == questionsList[i].trueAnswer) {
                    answerNumber = prop;
                }
                console.log(prop + ': ' + questionsList[i].answers[prop])
            }
            let answer = prompt('Введите Ваш ответ', '');
            if (answer == questionsList[i].trueAnswer.toLowerCase() || answer == answerNumber) {
                console.log('Ваш ответ верный!');
                counter();
            } else if (typeof answer !== 'object' && answer.toLowerCase() == 'stop') {
                return stop();
            }
            else {
                console.log('Ваш ответ не верный! Все начинаем заново :(');
                console.log('- х - х - х - х - х - х - х -');
                return quiz.start();
            }
            console.log('=============================');
        }
        console.log('Поздравляем, Вы прошли игру. Ваш счет:' + myScore);
        return
    }

    function counter() {
        myScore++;
        console.log('Ваш счет:' + myScore);
        return
    }

    function stop() {
        console.log('Вы остановили игру');
    }

    return {
        start,
        getQuestion,
        counter,
        stop
    }

})();
console.log('Я хочу поиграть в одну игру!');
console.log('Отвечайте на вопросы текстом или вводите число');
console.log('Чтобы остановить - введите STOP');
console.log('Удачи');
console.log('=============================');
console.log('===========СТАРТ============');
console.log('=============================');
quiz.start();



