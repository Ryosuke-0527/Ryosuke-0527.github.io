const quiz = [
    {
      question: '機器・装置',
      answers: [
        　'device',
        　'intend',
        　'brochure',
        　'mail'
      ],
      correct:'device'
    }, {
      question: '意図された・向けられた',
      answers: [
        　'device',
        　'intend',
        　'brochure',
        　'mail'
      ],
      correct:'intend'
    }, {
      question: 'パンフレット',
      answers: [
        　'intend',
        　'device',
        　'brochure',
        　'mail'
      ],
      correct:'brochure'
    },{
      question: '郵便物・郵便配達・郵送する',
      answers: [
        　'device',
        　'intend',
        　'brochure',
        　'mail'
      ],
      correct:'mail'
    }
];

const quizLength = quiz.length
let quizIndex = 0;
let score = 0;

 const $button= document.getElementsByTagName('p');
 const buttonLength = $button.length

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
 setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解！')
        score++;
    } else {
        window.alert('不正解')
    }

    quizIndex++;

    if(quizIndex < quizLength){
        setupQuiz();
    } else {
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }

};

let handlerIndex = 0;
while (handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;

}

