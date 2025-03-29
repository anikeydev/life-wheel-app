import AuthForm from '../components/AuthForm'

export default function AuthPage() {
  return (
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
      <h3 className="mb-5 text-center">
        Добро пожаловать в "Колесо баланса"🎯
      </h3>
      <AuthForm />
    </div>
  )
}
