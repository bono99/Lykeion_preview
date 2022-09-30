const qBank = [
  {
    question:
      "Which philosopher is best known for his statement cogito ergo sum?",
    answers: [
      "René Descartes", 
      "Nick bostrom", 
      "Michel foucault", 
      "Edmund husserl"
    ],
    correct: "René Descartes",
    questionId: "099099"
  },
  {
    question:
      'Which branch of philosophy is primarily concerned with the question of being?',
    answers: ["Existentialism", "Platonism", "communism", "capitalism"],
    correct: "Existentialism",
    questionId: "183452"
  },
  {
    question:
      "Who is widely known as the first existentialist, despite never having used the word existentialism?",
    answers: [
      "Søren Kierkegaard", 
      "Jean-Paul Sartre", 
      "Albert Camus", 
      "Martin Heidegger"
    ],
    correct: "Søren Kierkegaard",
    questionId: "267908"
  },
  {
    question: "Metaphysics is the study of?",
    answers: [
      "Ethics",
      "Knowledge",
      "Power",
      "Existence"
    ],
    correct: "Existence",
    questionId: "333247"
  },
  {
    question: "Epistemology is the study of?",
    answers: [
      "Knowledge", 
      "Ethics",
      "Metaphysics", 
      "Power"
    ],
    correct: "Knowledge",
    questionId: "496293"
  },
  {
    question:
      "Which branch of philosophy deals with the question of beauty?",
    answers: [
      "Aesthetics",
      "Poetics",
      "Dramatics",
      "Decorum"
    ],
    correct: "Aesthetics",
    questionId: "588909"
  }
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
