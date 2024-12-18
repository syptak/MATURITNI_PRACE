function evaluateQuiz() {
    const form = document.getElementById('quizForm');
    const results = document.getElementById('results');
    const resultText = document.getElementById('resultText');

    let totalScore = 0;
    const answers = form.querySelectorAll('input[type="radio"]:checked');

    if (answers.length < 5) {
        alert('Prosím odpovězte na všechny otázky.');
        return;
    }

    answers.forEach(answer => {
        totalScore += parseInt(answer.value);
    });

    let resultMessage = '';

    if (totalScore >= 8) {
        resultMessage = 'Vaše odpovědi naznačují možnou přítomnost vážné duševní poruchy. Doporučujeme konzultaci s odborníkem.';
    } else if (totalScore >= 4) {
        resultMessage = 'Vaše odpovědi naznačují určité obtíže, které by mohly vyžadovat pozornost. Zvažte konzultaci s odborníkem.';
    } else {
        resultMessage = 'Vaše odpovědi nenaznačují vážné duševní obtíže. Pokud však máte pochybnosti, neváhejte se poradit s odborníkem.';
    }

    resultText.textContent = resultMessage;
    results.style.display = 'block';
}