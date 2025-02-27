import { useMemo, useState } from 'react'
import { quizData } from './helpers/static'
import Quiz from './components/ui/Quiz/Quiz'
import { shuffleData } from './helpers/utils'
import Header from './components/ui/Header/Header'
import Results from './components/ui/Results/Results'
import Progress from './components/ui/ProgressBar/Progress'
import { useQuizStore } from './components/store/quizStore'

function App() {
  
  const [refreshToggle, setRefreshToggle] = useState<boolean>(false)
  const currentQuestion = useQuizStore((state)=>state.currentQuestion)
  
  const shuffledQuiz = useMemo(()=>{
    return shuffleData(quizData) 
  }, [refreshToggle])

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
