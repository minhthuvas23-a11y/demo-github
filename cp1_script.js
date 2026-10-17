// Khai báo mảng chứa thông tin các card (có các cặp giống nhau)
const cardsArray = [
    { name: 'dog', img: '🐶' },
    { name: 'dog', img: '🐶' },
    { name: 'cat', img: '🐱' },
    { name: 'cat', img: '🐱' },
    { name: 'fox', img: '🦊' },
    { name: 'fox', img: '🦊' },
    { name: 'panda', img: '🐼' },
    { name: 'panda', img: '🐼' },
    { name: 'koala', img: '🐨' },
    { name: 'koala', img: '🐨' },
    { name: 'lion', img: '🦁' },
    { name: 'lion', img: '🦁' },
    { name: 'tiger', img: '🐯' },
    { name: 'tiger', img: '🐯' },
    { name: 'monkey', img: '🐵' },
    { name: 'monkey', img: '🐵' },
    { name: 'rabbit', img: '🐰' },
    { name: 'rabbit', img: '🐰' },
    { name: 'bear', img: '🐻' },
    { name: 'bear', img: '🐻' },
    { name: 'elephant', img: '🐘' },
    { name: 'elephant', img: '🐘' },
    { name: 'giraffe', img: '🦒' },
    { name: 'giraffe', img: '🦒' }
];

const grid = document.getElementById('grid');
const scoreDisplay = document.getElementById('score');
const messageDisplay = document.getElementById('message');

let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];
let score = 0;
let isProcessing = false;

// Trộn ngẫu nhiên thẻ
cardsArray.sort(() => 0.5 - Math.random());

function createBoard() {
    for (let i = 0; i < cardsArray.length; i++) {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
}

function flipCard() {
    if (isProcessing) return;

    const cardId = this.getAttribute('data-id');
    
    if (cardsChosenId.includes(cardId) || cardsWon.includes(cardId)) {
        return;
    }

    this.classList.add('flipped');
    this.innerHTML = cardsArray[cardId].img;
    
    cardsChosen.push(cardsArray[cardId].name);
    cardsChosenId.push(cardId);

    if (cardsChosen.length === 2) {
        isProcessing = true;
        
        setTimeout(() => {
            const cards = document.querySelectorAll('.grid div');
            const optionOneId = cardsChosenId[0];
            const optionTwoId = cardsChosenId[1];

            if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId) {
                // Thay alert bằng hiển thị chữ trên màn hình
                messageDisplay.textContent = 'Chính xác! Cặp thẻ trùng khớp.';
                messageDisplay.className = 'message-box success';

                cards[optionOneId].classList.add('matched');
                cards[optionTwoId].classList.add('matched');
                cardsWon.push(optionOneId);
                cardsWon.push(optionTwoId);
                
                score += 10;
                scoreDisplay.textContent = score;
            } else {
                // Thay alert bằng hiển thị chữ trên màn hình
                messageDisplay.textContent = 'Không giống nhau, thử lại nhé!';
                messageDisplay.className = 'message-box';

                cards[optionOneId].classList.remove('flipped');
                cards[optionOneId].innerHTML = '';
                cards[optionTwoId].classList.remove('flipped');
                cards[optionTwoId].innerHTML = '';
            }

            cardsChosen = [];
            cardsChosenId = [];
            isProcessing = false;

            if (cardsWon.length === cardsArray.length) {
                messageDisplay.textContent = '🎉 Chúc mừng! Bạn đã hoàn thành trò chơi!';
                messageDisplay.className = 'message-box success';
            }
        }, 600); // Tăng thời gian gian chờ lên 0.6s để người chơi kịp nhìn 2 hình
    }
}

createBoard();