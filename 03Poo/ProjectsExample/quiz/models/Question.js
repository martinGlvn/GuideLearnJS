export class Question {
  /**Propieades
   * @param {string} text this a text of the question
   * @param {string[]} choices this are the choises of the question
   * @param {string} answer this is the answer of the question
   */
  constructor(text, choices, answer) {
    this.text = text;
    this.choice = choices;
    this.answer = answer;
  }

  /**
   * @param {string} choise some text to gest
   * @returns {boolean} return true if the answer is  correct
   */
  correctAnswer() {
    return true;
  }
}
