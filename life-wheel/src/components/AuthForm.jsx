import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useLoginMutation, useRegisterMutation } from '../slices/apiSlice'
import { setUserSession } from '../slices/authSlice'
import { useLocation, useNavigate } from 'react-router-dom'

export default function AuthForm() {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [isLogin, setIsLogin] = useState(true)
  const [login] = useLoginMutation()
  const [registerUser] = useRegisterMutation()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    const response = isLogin ? await login(data) : await registerUser(data)
    if (!response.error) {
      dispatch(setUserSession(response.data))
      setIsLogin(true)
      navigate('/')
    } else {
      alert(response.error.data.error)
    }
  }

  return (
    <div className="text-center w-75">
      <h3 className="mb-5">{isLogin ? 'Вход' : 'Регистрация'}</h3>
      <form
        className="d-flex card p-4 mb-5 flex-column align-items-center justify-content-center shadow"
        onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control mb-3"
          type="text"
          placeholder={isLogin ? 'Логин' : 'Придумайте логин'}
          {...register('username', {
            required: true,
            setValueAs: (value) => value.trim(),
          })}
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder={isLogin ? 'Пароль' : 'Придумайте пароль'}
          {...register('password', {
            required: true,
          })}
        />
        <button type="submit" className="btn btn-outline-success">
          {isLogin ? 'Войти' : 'Зарегестироваться'}
        </button>
      </form>
      <button
        className="btn btn-primary shadow"
        onClick={() => setIsLogin(!isLogin)}>
        {isLogin
          ? 'Нет аккаунта? Зарегистрироваться'
          : 'Уже есть аккаунт? Войти'}
      </button>
    </div>
  )
}
