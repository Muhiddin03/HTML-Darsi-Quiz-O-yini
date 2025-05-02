
    const questions = [
      {
        question: "1. HTML nima uchun ishlatiladi?",
        answers: ["Veb sahifalarni yaratish uchun", "Dasturlarni kompilyatsiya qilish uchun", "Ma'lumotlar bazasini boshqarish uchun"],
        correct: 0
      },
      {
        question: "2. HTML da paragraf qanday yoziladi?",
        answers: ["<h1>", "<p>", "<div>"],
        correct: 1
      },
      {
        question: "3. HTML faylining asosiy tuzilmasi qaysi teg bilan boshlanadi?",
        answers: ["<html>", "<head>", "<body>"],
        correct: 0
      },
      {
        question: "4. Rasmni chiqarish uchun qaysi teg ishlatiladi?",
        answers: ["<a>", "<image>", "<img>"],
        correct: 2
      },
      {
        question: "5. Html filega style berishni nech xil usuli bor",
        answers: ["2", "4", "3"],
        correct: 2
      },
      {
        question: "6. HTML faylida matnni qalin qilish uchun qaysi teg ishlatiladi?",
        answers: ["<b>", "<del>", "<em>"],
        correct: 0
      },
      {
        question: "7. HTMLda da heading qanday yoziladi va ular nechta?",
        answers: [" <p> 3ta ", "<h1> 6ta", "<i> 5ta"],
        correct: 1
      },
      {
        question: "8. HTMLda ro‘yxat yaratish uchun qaysi teg ishlatiladi?",
        answers: ["<ul> yoki <ol>", "<list>", "<menu>"],
        correct: 0
      },
      {
        question: "9. Html elementlari necha turga bo'linadi v aular qaysilar?",
        answers: ["2 block,inline", "3ta tag ,atribut ,content", " <submit>"],
        correct: 0
      },
      {
        question: "10. HTML ning kengaytmasi qanday bo‘ladi?",
        answers: ["HyperText Markup Language", "html", "Cascading Style Sheets"],
        correct: 0
      },
      {
        question: "11. HTML elementlari nech qismdan iborat?",
        answers: ["3 ta tag,atribut,content", "2 block,inline", "1ta tag"],
        correct: 0
      }
    ];

    const quiz = document.getElementById("quiz");
    const scoreText = document.getElementById("score");
    const restartBtn = document.getElementById("restartBtn");

    let score = 0;
    let current = 0;

    function showQuestion() {
      quiz.innerHTML = "";
      if (current < questions.length) {
        const q = questions[current];
        const qDiv = document.createElement("div");
        qDiv.className = "question";
        const qTitle = document.createElement("h3");
        qTitle.textContent = q.question;
        qDiv.appendChild(qTitle);

        q.answers.forEach((answer, index) => {
          const btn = document.createElement("button");
          btn.textContent = answer;
          btn.onclick = () => {
            if (index === q.correct) {
              btn.classList.add("correct");
              score++;
            } else {
              btn.classList.add("wrong");
              alert(`To‘g‘ri javob: ${q.answers[q.correct]}`);
            }
            setTimeout(() => {
              current++;
              showQuestion();
            }, 600);
          };
          qDiv.appendChild(btn);
        });

        quiz.appendChild(qDiv);
      } else {
        quiz.innerHTML = "<h2>O‘yin tugadi!</h2>";
        quiz.style.textAlign = "center"
        scoreText.textContent = `Sizning natijangiz: ${score} / ${questions.length}`;
        restartBtn.style.display = "block";
      }
    }

    function restartGame() {
      score = 0;
      current = 0;
      restartBtn.style.display = "none";
      scoreText.textContent = "";
      showQuestion();
    }

    showQuestion();
 