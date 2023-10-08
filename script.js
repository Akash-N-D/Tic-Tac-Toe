let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');
const message = document.querySelector('.message');

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            message.textContent = `Player ${currentPlayer} wins!`;
            return true;
        }
    }

    if ([...cells].every(cell => cell.textContent)) {
        message.textContent = "It's a draw!";
        return true;
    }

    return false;
}

function makeMove(index) {
    if (!cells[index].textContent && !checkWinner()) {
        cells[index].textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        message.textContent = `Player ${currentPlayer}'s Turn`;
    }
}

function resetGame() {
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    message.textContent = `Player ${currentPlayer}'s Turn`;
}

cells.forEach(cell => cell.addEventListener('click', () => makeMove(Array.from(cells).indexOf(cell))));
