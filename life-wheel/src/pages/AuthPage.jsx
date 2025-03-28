import AuthForm from '../components/AuthForm'

export default function AuthPage() {
  return (
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
      <h2 className="mb-5">Добро пожаловать в "Колесо баланса"🎯</h2>
      <AuthForm />
    </div>
  )
}
