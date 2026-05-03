const questions = [
    {
        q: "What does HTML stand for?",
        options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Tool Markup Language"],
        answer: 1
    },
    {
        q: "Which language is used for styling web pages?",
        options: ["HTML", "CSS", "Python", "C++"],
        answer: 1
    },
    {
        q: "Which is not a programming language?",
        options: ["Python", "Java", "HTML", "C++"],
        answer: 2
    },
    {
        q: "What does JS stand for?",
        options: ["Java Style", "JavaScript", "Just Script", "Jumbo Script"],
        answer: 1
    },
    {
        q: "Which symbol is used for comments in Python?",
        options: ["//", "#", "/* */", "<!-- -->"],
        answer: 1
    },
    {
        q: "Which company developed Java?",
        options: ["Microsoft", "Sun Microsystems", "Google", "Apple"],
        answer: 1
    },
    {
        q: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "letvar"],
        answer: 0
    },
    {
        q: "What is the extension of a Python file?",
        options: [".py", ".java", ".html", ".cpp"],
        answer: 0
    },
    {
        q: "Which tag is used for a hyperlink in HTML?",
        options: ["<a>", "<link>", "<href>", "<h1>"],
        answer: 0
    },
    {
        q: "Which function prints output in Python?",
        options: ["echo()", "console.log()", "print()", "printf()"],
        answer: 2
    },
    {
        q: "Which operator is used for equality in JS?",
        options: ["=", "==", "===", "!="],
        answer: 2
    },
    {
        q: "What is CSS used for?",
        options: ["Logic", "Structure", "Styling", "Database"],
        answer: 2
    },
    {
        q: "Which loop is used in JavaScript?",
        options: ["for", "while", "do-while", "All of these"],
        answer: 3
    },
    {
        q: "Which data type is NOT primitive?",
        options: ["String", "Number", "Object", "Boolean"],
        answer: 2
    },
    {
        q: "Which keyword is used in Python for function?",
        options: ["func", "define", "def", "function"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    let q = questions[currentQuestion];
    document.getElementById("question").innerText = q.q;

    let buttons = document.querySelectorAll(".option");
    buttons.forEach((btn, index) => {
        btn.innerText = q.options[index];
    });

    document.getElementById("progress").innerText =
        `Question ${currentQuestion + 1}/${questions.length}`;

    document.getElementById("progress-fill").style.width =
        ((currentQuestion) / questions.length) * 100 + "%";
}

function selectAnswer(index) {
    if (index === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText =
            `Quiz Completed! Your Score: ${score}/${questions.length}`;
        document.querySelector(".options").innerHTML = "";
    }

    document.getElementById("score").innerText = "Score: " + score;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    location.reload();
}

loadQuestion();