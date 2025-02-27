import { QuizType } from './helpers/types'
import { useEffect, useState } from 'react'
import { quizData } from './helpers/static'
import Quiz from './components/ui/Quiz/Quiz'
import { shuffleData } from './helpers/utils'
import Header from './components/ui/Header/Header'
import Results from './components/ui/Results/Results'
import Progress from './components/ui/ProgressBar/Progress'
import { useQuizStore } from './components/store/quizStore'

function App() {
  
  const [shuffledQuiz, setShuffledQuiz] = useState<QuizType>(shuffleData(quizData))
  const [refreshToggle, setRefreshToggle] = useState<boolean>(false)
  const currentQuestion = useQuizStore((state)=>state.currentQuestion)

  useEffect(() => {
    console.log('USEEFFECT SHUFFLING DATA')
    console.log('---------------------_')

    const newShuffledData = shuffleData(shuffledQuiz);
    setShuffledQuiz(newShuffledData)

  }, [refreshToggle]);
  console.log(currentQuestion <= shuffledQuiz.length)
  console.log(`${currentQuestion} <= ${shuffledQuiz.length}`)
  return (
    <>
      <main>
        <Header
          max={shuffledQuiz.length}
        />
        {
          (currentQuestion <= shuffledQuiz.length) ? (
          <>
            <Quiz
              shuffledQuiz={shuffledQuiz}
              />
            <Progress
              max={shuffledQuiz.length}
            />
          </>
          ) : (
          <Results
            max={shuffledQuiz.length}
            setRefreshToggle={setRefreshToggle}
          />
        )}
      </main>
    </>
  )
}

export default App
