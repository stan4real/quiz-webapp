import './Quiz.css'
import React, { useEffect, useRef, useState } from 'react'
import { Answer, QuizType } from '../../../helpers/types'
import { useQuizStore } from '../../store/quizStore'

type QuizProps = {
    shuffledQuiz:QuizType,
}

const Quiz = ({shuffledQuiz}:QuizProps) => {

    const [selectedAnswer, setSelectedAnswer] = useState<Answer | undefined>()
    const [isDisabled, setIsDisabled] = useState(false)
    const {currentQuestion, setNextQuestion, setUserAnswers} = useQuizStore((state)=>state)
    
    const [title, setTitle] = useState(shuffledQuiz[0].title)
    const [answer_variants, setAnswerVariant] = useState(shuffledQuiz[0].answers)
    
    const isAnswerSelected = useRef(false)

    const handleAnswerClick = (answer:Answer, question:string) => {
        if(isAnswerSelected.current) return

        setSelectedAnswer(answer)
        setIsDisabled((prev)=>!prev)
        isAnswerSelected.current = true

        setTimeout(() => {
            setNextQuestion();
            setUserAnswers({question, answer})
            setIsDisabled(false)
            setSelectedAnswer(undefined)
            isAnswerSelected.current = false
        }, 1000)

    }
    
    useEffect(()=> {

        setTitle(shuffledQuiz[currentQuestion-1].title)
        setAnswerVariant(shuffledQuiz[currentQuestion-1].answers)

    }, [currentQuestion])

    console.log('renders')

  return (
    <section className="content">
        <h2 className='content__question'>{title}</h2>
        {   
            answer_variants.map((answer, index) => (
                <div 
                    key={index} 
                    onClick={()=>
                    handleAnswerClick(answer, title)}
                    className={`content__answer ${!isDisabled ? '' : 'content__answer_disabled'}`}
                >
                <div className={selectedAnswer?.text === answer.text ? 'content__radio_selected' : 'content__radio'}></div>
                <p className='content__text'>{answer.text}</p>
            </div>
            ))
        }
    </section> 
  )
}

export default React.memo(Quiz)