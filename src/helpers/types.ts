import { quizData } from "./static"

export type QuizType = typeof quizData;

export type FullAnswer = {
    question:string,
    answer:Answer
}

export type Answer = {
    text:string,
    result:boolean
};