
export function calculateScore(questions, answers) {
    let score = 0;

    questions.forEach((question, index) => {
        if (answers[index] === question.correctAnswer) {
            score++;
        }
    });

    return score;
}

export const questions = [
    {
        question: "Which language runs in a browser?",
        options: ["Java", "JavaScript", "C++"],
        correctAnswer: "JavaScript"
    },
    {
        question: "Which tool is used for version control?",
        options: ["Git", "Jenkins", "Node"],
        correctAnswer: "Git"
    },
    {
        question: "Which tool is used for CI/CD?",
        options: ["HTML", "Jenkins", "CSS"],
        correctAnswer: "Jenkins"
    }
];
