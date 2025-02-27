import './Results.css'
import React, { SetStateAction } from "react"
import { useQuizStore } from "../../store/quizStore"
import { calcRightAnswers } from "../../../helpers/utils"

type ResultProps = {
    setRefreshToggle:React.Dispatch<SetStateAction<boolean>>,
    max:number
}

const Results = ({setRefreshToggle, max}:ResultProps) => {
    
    const {userAnswers, refreshQuiz} = useQuizStore((state)=>state)
    
    const rightAnswerCount = calcRightAnswers(userAnswers)

    const handleRefreshQuiz = () => {
        refreshQuiz()
        setRefreshToggle((prev)=>!prev)
    }

  return (
    <>
        {
            userAnswers.map((answer, index)=>(
                <div 
                    key={index} 
                    className="answer" 
                    style={{backgroundColor:`${answer.answer.result ? '#E5F5E1' : '#FFE0E0'}`}}
                >
                    <h4 className="answer__question">{answer.question}</h4>
                    <p className="answer__text">{answer.answer.text}</p>
                </div>
            ))
        }
        {
            rightAnswerCount !== max && (
                <button 
                    className="refresh"
                    onClick={handleRefreshQuiz}
                >Пройти еще раз</button>
            )
        }
    </>
  )
}

export default Results