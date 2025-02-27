import { create } from 'zustand'
import { FullAnswer } from '../../helpers/types'

type QuizStore = {
    currentQuestion:number,
    setNextQuestion:()=>void,
    userAnswers:FullAnswer[],
    refreshQuiz:()=>void,
    setUserAnswers:(answer:FullAnswer) => void
}

export const useQuizStore = create<QuizStore>((set) => ({
    currentQuestion: 1,
    setNextQuestion: () => set((state) => ({ currentQuestion: state.currentQuestion + 1 })),
    userAnswers:[],
    setUserAnswers:(answer) => set((state)=>({userAnswers:[...state.userAnswers, answer]})),
    refreshQuiz:() => set(()=>({
        currentQuestion:1,
        userAnswers:[]
    }))
}))