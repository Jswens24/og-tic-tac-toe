console.log('connected');

const playerId = document.querySelector('#player');
const board = Array(9).fill(null);

const lines = [
    // Horizontal lines
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical lines
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal lines
    [0, 4, 8],
    [2, 4, 6],
];


const play = (num) => {
    const box = document.getElementById(num)

    box.innerText = playerId.innerText
    board[num] = playerId.innerText

    if (playerId.innerText === 'X') {
        playerId.innerText = 'O'
    } else {
        playerId.innerText = 'X'
    }

    console.log(board);
    winChecker()
}

const winChecker = () => {

}

