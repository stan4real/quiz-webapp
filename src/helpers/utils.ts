import { FullAnswer, QuizType } from "./types";

export const shuffleData = (data:QuizType | []) => {
    for (let i = data.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      
      //меняем местами вопросы
      [data[i], data[j]] = [data[j], data[i]];

        const answers = data[i].answers;

        for (let k = answers.length - 1; k > 0; k--) {
          let l = Math.floor(Math.random() * (k + 1));
          
          // Меняем местами ответы внутри вопроса
          [answers[k], answers[l]] = [answers[l], answers[k]];
        }
      
      }
    return data
}

export const calcRightAnswers = (answers:FullAnswer[]) => {
  let count = 0
  answers.map((answer) => (
    answer.answer.result && count++
  ))
  return count
} 