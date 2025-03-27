import FormTest from '../components/FormTest'

export default function TestPage() {
  const category = {
    title: 'Карьера 💼',
    name: 'career',
    asks: [
      'Насколько вы удовлетворены своей текущей работой или бизнесом? 🤔',
      'Насколько ваша деятельность соответствует вашим целям и ценностям? 🎯',
      'Чувствуете ли вы, что профессионально развиваетесь и движетесь вперед? 📈',
    ],
  }
  return (
    <div className="d-flex vh-100 flex-column p-3 align-items-center justify-content-center">
      <FormTest category={category} />
    </div>
  )
}
