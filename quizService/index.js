const qBank = [
  {
    question:
      "What Does the S on Superman's chest stand for in Kryptonian?",
    answers: ["Love", "Faith", "Hope", "Star"],
    correct: "Hope",
    questionId: "099099"
  },
  {
    question:
      "What Superman propriety cast Amy Adams prior to her playing Lois Lane in Man of Steel?",
    answers: ["Smallville", "Superman Returns", "Superman the Animated Series", "Denmark"],
    correct: "Smallville",
    questionId: "183452"
  },
  {
    question:
      "What newspaper does Clark Kent get a job at by the end of Man of Steel?",
    answers: ["Daily Bugle", "Daily News", "Daily Planet", "Weekly World News"],
    correct: "Daily Planet",
    questionId: "267908"
  },
  {
    question: "What's the name of Batman's  parents?",
    answers: [
      "Thomas & Martha",
      "Joey & Jackie",
      "Jason & Sarah",
      "Todd & Mira"
    ],
    correct: "Thomas & Martha",
    questionId: "333247"
  },
  {
    question: "What is the most common surname Wales?",
    answers: ["Jones", "Williams", "Davies", "Evans"],
    correct: "Jones",
    questionId: "496293"
  },
  {
    question:
      "What are the names of Superman's adopted parents?",
    answers: ["John and Elizabeth", "James and Mary", "Johnathan and Martha", "Joseph and Betty"],
    correct: "Johnathan and Martha",
    questionId: "588909"
  },
  {
    question:
      'Where were criminals sent to on Krypton?',
    answers: ["The Next Dimension", "The Dark World", "Kessel", "The Phantom Zone"],
    correct: "The Phantom Zone",
    questionId: "648452"
  },
  {
    question: "What baseball team is on Clark's t-shirt in Man of Steel?",
    answers: ["Detroit Tigers", "St. Louis Cardinals", "Kansas City Royals", "New York Yankees"],
    correct: "Kansas City Royals",
    questionId: "786649"
  },
  {
    question:
      "Batman V Superman Dawn of Justice was loosely based on what popular Batman story?",
    answers: ["The Dark Knight Returns", "Batman Hush", "Batman Death of the Family", "Batman Year One"],
    correct: "The Dark Knight Returns",
    questionId: "839754"
  },
  {
    question:
      "What did the jar on Senator Finch's desk have written on it?",
    answers: ["Lex's Soda Pop", "Granny's peach tea", "Luthor's Urine", "Uncle Pete's Coffee"],
    correct: "Granny's peach tea",
    questionId: "98390"
  },
  {
    question: "What show do the actors who play Thomas and Martha Wayne star together in?",
    answers: ["The Good Wife", "The Vampire Dairies", "The Walking Dead", "Supernatural"],
    correct: "The Walking Dead",
    questionId: "1071006"
  },
  {
    question: "What is the Jolly Rancher flavor that Lex Luthor feeds the Senator?",
    answers: ["Watermelon", "Apple", "Cherry", "Grape"],
    correct: "Cherry",
    questionId: "1174154"
  },
  {
    question: "What Does Batman ask Superman when they first meet?",
    answers: ["Can you die?", "Tell me, do you bleed?", "Are you scared?", "Do you sleep?"],
    correct: "Tell me, do you bleed?",
    questionId: "1226535"
  },
  {
    question: "What two villains make up Doomsday's DNA?",
    answers: ["Zod and Lex Luthor", "Steppenwolf and Zod", "Darkseid and Lex Luthor", "Steppenwolf and Lex Luthor"],
    correct: "Zod and Lex Luthor",
    questionId: "1310938"
  },
  {
    question: "What does Superman say that makes Batman not kill him?",
    answers: ["I'm Clark Kent", "Tell Lois I love her", "I'm sorry", "Save Martha"],
    correct: "Save Martha",
    questionId: "1436873"
  },
  {
    question: "What was the name of the Villain that was killed for attempting to run away from the Suicide Squad?",
    answers: ["Slipknot", "Killer Croc", "Deadshot", "El Diablo"],
    correct: "Slipknot",
    questionId: "1515110"
  },
  {
    question: "What was Harley Quinn's profession before she became a supervillain?",
    answers: ["Chef", "Psychiatrist", "Orderly", "Nurse"],
    correct: "Psychiatrist",
    questionId: "1642728"
  },
  {
    question:
      "What maximum security prison are the characters from Suicide Squad from?",
    answers: ["Belle Reve Prison", "Ravenwood Prison", "The Raft Prison", "Azkaban Prison"],
    correct: "Subscriber",
    questionId: "1747256"
  },
];

// randomly pick 5 questions and return back
export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
