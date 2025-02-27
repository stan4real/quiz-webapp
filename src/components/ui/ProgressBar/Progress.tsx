import './Progress.css'
import { useQuizStore } from '../../store/quizStore'

type ProgressProps = {
    max:number
}

const Progress = ({max}:ProgressProps) => {

    const currentQuestion = useQuizStore((state)=>state.currentQuestion)
  return (
    <div className='progress'>
        
        <div className='progress-fill' style={{width:`${currentQuestion/max * 100}%`}}>
            {
                currentQuestion !== max &&
                <span className='progress__current'>{currentQuestion}</span>
            }
        </div>

        <span className='progress__min'>0</span>
        <span className='progress__max'>{max}</span>
    </div>
  )
}

export default Progress