import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useLoginMutation, useRegisterMutation } from '../slices/apiSlice'
import { setUserSession } from '../slices/authSlice'

export default function AuthForm() {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [isLogin, setIsLogin] = useState(true)
  const [login] = useLoginMutation()
  const [registerUser] = useRegisterMutation()

  const onSubmit = async (data) => {
    const response = isLogin ? await login(data) : await registerUser(data)
    console.log(response)
    if (!response.error) {
      dispatch(setUserSession(response.data))
      setIsLogin(true)
    } else {
      alert(response.error.data.error)
    }
  }

  return (
    <div>
      <h3>{isLogin ? 'Вход' : 'Регистрация'}</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="login..." {...register('username')} />
        <input
          type="password"
          placeholder="password..."
          {...register('password')}
        />
        <button type="submit">{isLogin ? 'Войти' : 'Зарегестироваться'}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin
          ? 'Нет аккаунта? Зарегистрироваться'
          : 'Уже есть аккаунт? Войти'}
      </button>
    </div>
  )
}
