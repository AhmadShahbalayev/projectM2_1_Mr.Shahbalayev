let initialAmountInput = document.getElementById("initial-amount-input");
let topUpInput = document.getElementById("top-up-input");
let interestRateInput = document.getElementById("interest-rate-input");
let daysInput = document.getElementById("days-input");
let calculateButton = document.getElementById('calculate-button');
let errorText = document.getElementById('error-text');
let futureValue = document.getElementById('future-value');

function toCalculate(initialAmount, topUp, interestRate, months) {
    initialAmount = initialAmountInput.value;
    if (initialAmount <= 0) {
        errorText.innerHTML = '<span class="error-logo">i</span> Вы не правильно введили "Начальную сумму вклада"!';
        errorText.className = '';
        return NaN;
    }
    topUp = topUpInput.value;
    if (topUp < 0 || topUp === '') {
        errorText.innerHTML = '<span class="error-logo">i</span> Вы не правильно введили "Сумму ежемесячного пополнения"!';
        errorText.className = '';
        return NaN;
    }
    interestRate = interestRateInput.value;
    if (interestRate < 1 || interestRate > 100) {
        errorText.innerHTML = '<span class="error-logo">i</span> Процентная ставка может быть только от 1 до 100!';
        errorText.className = '';
        return NaN;
    }
    months = Math.trunc(daysInput.value / 30);
    if (daysInput.value <= 0) {
        errorText.innerHTML = '<span class="error-logo">i</span> Вы не правильно введили "Срок вклада (дней)"!';
        errorText.className = '';
        return NaN;
    }
    errorText.className = 'input-error';
    for (t = 1; t <= months; t++) {
        initialAmount = +initialAmount + +topUp + +initialAmount * +interestRate / 1200;
    }
    alert('Future value of deposit will be: ' + +initialAmount);
}

calculateButton.addEventListener('click', toCalculate);


