import './Header.css'
import { useQuizStore } from '../../store/quizStore'
import { calcRightAnswers } from '../../../helpers/utils'

type HeaderProps = {
  max:number
}

const Header = ({max}:HeaderProps) => {

const {currentQuestion, userAnswers} = useQuizStore((state)=>state)

const rightAnswerCount = calcRightAnswers(userAnswers)

  return (
    <header>
        <h1 className="heading">
          {
            currentQuestion < max ? 'Тестирование' :
            rightAnswerCount === 0 ?
            'Упс :(' :
            rightAnswerCount === max ?
            'Поздравляем!'
            :
            'Хороший результат!'
          }
        </h1>
        {currentQuestion >= max && (
          rightAnswerCount === 0 ?
          <p className='desc'> Вы неправильно ответили на все вопросы. <br/>Нужно подучить теорию.</p> 
          :
          rightAnswerCount === max ?
          <p className='desc'> Вы правильно ответили на все вопросы. <br/>Вы дейстивтельно отлично разбираетесь в IT.</p> 
          :
          <p className='desc'>Вы ответили правильно на {rightAnswerCount} вопросов. <br/>Так держать!</p> )
        }
    </header>
  )
}

export default Header