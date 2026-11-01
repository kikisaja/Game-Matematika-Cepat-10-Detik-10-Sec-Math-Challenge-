// --- STATE GAME ---
let score = 0;
let timeLeft = 10.0;
let timerInterval = null;
let isPlaying = false;
let currentAnswer = 0;

// --- AMBIL ELEMEN DOM ---
const scoreDisplay = document.getElementById("score-display");
const timeDisplay = document.getElementById("time-display");
const timerBox = document.getElementById("timer-box");
const questionDisplay = document.getElementById("question-display");
const answerForm = document.getElementById("answer-form");
const answerInput = document.getElementById("answer-input");
const btnSubmit = document.getElementById("btn-submit");
const btnStart = document.getElementById("btn-start");

// --- 1. GENERATE SOAL MATEMATIKA ACAK ---
function generateQuestion() {
    const operators = ["+", "-", "*"];
    const op = operators[Math.floor(Math.random() * operators.length)];

    let num1, num2;

    if (op === "+") {
        num1 = Math.floor(Math.random() * 20) + 1;
        num2 = Math.floor(Math.random() * 20) + 1;
        currentAnswer = num1 + num2;
    } else if (op === "-") {
        num1 = Math.floor(Math.random() * 20) + 5;
        num2 = Math.floor(Math.random() * num1) + 1; // Pastikan hasil tidak negatif
        currentAnswer = num1 - num2;
    } else if (op === "*") {
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        currentAnswer = num1 * num2;
    }

    questionDisplay.textContent = `${num1} ${op === "*" ? "×" : op} ${num2}`;
}

// --- 2. MULAI PERMAINAN ---
function startGame() {
    score = 0;
    timeLeft = 10.0;
    isPlaying = true;

    scoreDisplay.textContent = score;
    timeDisplay.textContent = `${timeLeft.toFixed(1)}s`;
    timerBox.className = "stat-box timer";

    answerInput.disabled = false;
    btnSubmit.disabled = false;
    btnStart.disabled = true;
    btnStart.style.opacity = "0.6";

    answerInput.value = "";
    answerInput.focus();

    generateQuestion();

    // Hitung mundur per 100ms (0.1 detik)
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft -= 0.1;

        if (timeLeft <= 3.0) {
            timerBox.className = "stat-box timer danger";
        }

        if (timeLeft <= 0) {
            timeLeft = 0;
            timeDisplay.textContent = "0.0s";
            endGame();
        } else {
            timeDisplay.textContent = `${timeLeft.toFixed(1)}s`;
        }
    }, 100);
}

// --- 3. PROSES JAWABAN ---
function checkAnswer(e) {
    e.preventDefault();
    if (!isPlaying) return;

    const userAnswer = parseInt(answerInput.value);

    if (userAnswer === currentAnswer) {
        score++;
        scoreDisplay.textContent = score;
        answerInput.value = "";
        generateQuestion();
    } else {
        // Efek getar kecil pada input jika salah
        answerInput.style.borderColor = "#f87171";
        setTimeout(() => {
            answerInput.style.borderColor = "var(--stroke-dark)";
        }, 300);
    }
}

// --- 4. SELESAI PERMAINAN ---
function endGame() {
    isPlaying = false;
    clearInterval(timerInterval);

    answerInput.disabled = true;
    btnSubmit.disabled = true;
    btnStart.disabled = false;
    btnStart.style.opacity = "1";
    btnStart.textContent = "🔄 MAIN LAGI";

    alert(`Waktu Habis! Skor Akhir Kamu: ${score} Soal Benar 🎉`);
}

// --- EVENT LISTENERS ---
btnStart.addEventListener("click", startGame);
answerForm.addEventListener("submit", checkAnswer);