# Quiz Web App

Single Page Application (SPA) with dynamic quiz logic, state management, and result calculation.  
The application works entirely on one page using dynamic content rendering.

## 🚀 Demo
- Live demo: [Quiz Web App](https://stan4real.github.io/quiz-webapp/)

## 🧠 Tech Stack
- React
- TypeScript
- Zustand (state management)
- Vite
- Semantic UI
- CSS
- Adaptive / Responsive UI

## ✨ Features
- Single Page Application with dynamic content rendering
- Randomized questions order on each app load
- Answer selection with immediate state updates
- Progress bar showing quiz completion
- Results page with:
  - number of correct and incorrect answers
  - detailed results per question
- Dynamic header message based on quiz result
- Restart quiz functionality without page reload
- Adaptive UI for different screen sizes

## 🧠 State Management
- Global application state is managed with **Zustand** using `useQuizStore`
- State includes:
  - `currentQuestion` — tracks the current question index
  - `userAnswers` — array of answers submitted by the user (`FullAnswer[]`)
- Actions:
  - `setNextQuestion()` — advances to the next question
  - `setUserAnswers(answer: FullAnswer)` — adds a new answer to `userAnswers`
  - `refreshQuiz()` — resets the quiz (`currentQuestion` to 1, clears `userAnswers`)
- This approach centralizes quiz logic, making state predictable and easy to manage across components

## 🧩 Application Logic
- On application load, the questions list is shuffled
- While the current question index is less than the total number of questions:
  - the app displays the current question and available answers
- After answering:
  - the global state (`useQuizStore`) is updated
  - the app navigates to the next question
- When the last question is answered:
  - the Results view is displayed
- The Results page shows:
  - total number of correct and incorrect answers
  - result-based feedback message in the header
- Users can restart the quiz and reset the state without reloading the page

## ⚙️ Installation

1. Clone the repository:
```bash
git clone https://github.com/stan4real/quiz-webapp.git

2. Change directory
cd quiz-webapp

3. Install Dependencies
npm install

4. Start the development server
npm run dev
