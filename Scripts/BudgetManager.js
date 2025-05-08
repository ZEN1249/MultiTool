let balance = 0;
const transactionList = document.getElementById('transactionList');
const balanceElement = document.getElementById('balance');
const transactionsContainer = document.querySelector('.transactions');

function addTransaction() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    if (!description || isNaN(amount) || amount <= 0) {
        alert('Please enter valid description and amount.');
        return;
    }

    const transaction = document.createElement('li');
    transaction.classList.add(type);
    transaction.innerHTML = `
        <span>${description}</span>
        <span>${type === 'income' ? '+' : '-'}${amount.toFixed(2)} USD</span>
        <button class="delete-btn" onclick="deleteTransaction(this, ${type === 'income' ? amount : -amount})">X</button>
    `;

    transactionList.appendChild(transaction);

    balance += type === 'income' ? amount : -amount;
    balanceElement.textContent = balance.toFixed(2);

    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';

    updateTransactionsVisibility();
}

function deleteTransaction(button, amount) {
    const transaction = button.parentElement;
    transactionList.removeChild(transaction);

    balance -= amount;
    balanceElement.textContent = balance.toFixed(2);

    updateTransactionsVisibility();
}

function updateTransactionsVisibility() {
    if (transactionList.children.length === 0) {
        transactionsContainer.style.display = 'none';
    } else {
        transactionsContainer.style.display = 'block';
    }
}

// Initialize visibility on page load
updateTransactionsVisibility();