import React from 'react'
import ReactDOM from 'react-dom'
import {addComment,deleteComment,filterName}from'./actions'
import { Provider } from 'react-redux'
import {createLogger}from'redux-logger'
import { createStore,applyMiddleware } from 'redux'
import {reduser} from'./reduser'
import App from './components/app'
import "./app.css"

const loggerMiddleware = createLogger()
const store=createStore(reduser)//, applyMiddleware(loggerMiddleware))


// let listen=store.subscribe(()=>{
//    console.log("State of store:",store.getState())
// })
store.dispatch(addComment("Jon",`JavaScript ("JS" для краткости) — это полноценный динамический язык программирования, который применяется к HTML документу,
                             и может обеспечить динамическую интерактивность на веб-сайтах.`))
setTimeout(()=>{
   store.dispatch(addComment("Jorah",`JavaScript – это язык программирования, который добавляет интерактивность на ваш веб-сайт (например: игры,
                                 отклик на нажатые кнопки или при вводе данных в формы, динамические стили, анимация).`))
},2500)

store.dispatch(addComment("Jerry",`Замыкания — это функции, ссылающиеся на независимые (свободные) переменные. Другими словами, функция,
                         определённая в замыкании, «запоминает» окружение, в котором она была создана.`))

// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>,
//     document.getElementById("root")
// )
export let AppComment = ()=>{
    return (
    <div className="afterComentText">
        <h3>Function</h3>
        <p>{`Люди считают, что компьютерные науки – это искусство для гениев. 
            В реальности всё наоборот – просто множество людей делают вещи, которые стоят
            друг на друге, будто составляя стену из маленьких камушков.`}</p>
            <p>Дональд Кнут</p>
            {`Вы уже видели вызовы функций, таких как alert. Функции – это хлеб с маслом программирования 
            на JavaScript. Идея оборачивания куска программы и вызова её как переменной очень востребована. Это инструмент для структурирования больших программ, уменьшения повторений, назначения имён подпрограммам, и изолирование подпрограмм друг от друга.
            Самое очевидное использование функций – создание нового словаря. Придумывать слова для обычной
            человеческой прозы – дурной тон. В языке программирования это необходимо.
            Средний взрослый русскоговорящий человек знает примерно 10000 слов. Редкий язык 
            программирования содержит 10000 встроенных команд. И словарь языка программирования определён
            чётче, поэтому он менее гибок, чем человеческий. Поэтому нам обычно приходится добавлять в 
            него свои слова, чтобы избежать излишних повторений.`}
            <p/><p/>
        <Provider store={store}>
            <App/>
        </Provider>
    </div>
)}
