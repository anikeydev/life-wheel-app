import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="p-2 d-flex flex-column align-items-center justify-content-between">
        <h3 className="mb-4 text-center">
          Добро пожаловать в "Колесо Баланса"🎯
        </h3>
        <div className="text-center w-75">
          <h4 className="mb-3">❓ Что это?</h4>
          <p>
            Это простой, но мощный инструмент, который поможет понять, насколько
            гармонично развиваются разные сферы вашей жизни.
          </p>
        </div>
        <div className="text-center">
          <h4 className="mb-3">🧐 Как это работает?</h4>
          <p>
            Вы отвечаете на несколько вопросов из разных сфер жизни, оцениваете
            свои жизненные сферы по шкале, а затем получаете визуальный анализ
            своего "Колеса жизни".
          </p>
        </div>
        <div className="text-center">
          <h4 className="mb-3">🔥 Почему это важно?</h4>
          <p>✔ Узнаете, где ваш баланс нарушен</p>
          <p>✔ Определите, на чем стоит сфокусироваться</p>
          <p>✔ Сделаете первый шаг к улучшениям</p>
        </div>
        <div className="text-center w-75">
          <h4 className="mb-3">🤝 Поделитесь тестом!</h4>
          <p>
            Пригласите друзей и коллег — сравните результаты, вдохновляйте друг
            друга и двигайтесь к целям вместе!
          </p>
        </div>
        <div className="mb-3 text-center">
          <h4 className="mb-4">
            🚀 Готовы узнать, на чем вам стоит сосредоточиться?
          </h4>
          <Link to="/test" className="btn btn-outline-success btn-lg mb-3">
            Пройти тест
          </Link>
        </div>
      </div>
    </div>
  )
}
