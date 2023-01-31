import { questions } from "./data/questions.js";
import { Quiz } from "./models/Quiz";
import { UI } from "./models/Ui.js";

function main() {
  const quiz = new Quiz(questions);
  const ui = new UI();

  ui.showQuestion(quiz.getQuestionsIndex().text);
  ui.showChoices(quiz.getQuestionsIndex().choices);
}

main();
