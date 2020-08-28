import React from 'react'
import Button from '../Elements/Button'
import InputField from '../Form/InputField'
import { useDispatch } from 'react-redux'

import { useInput } from '../../Hooks/useInput'

const LoginForm = () => {

  const dispatch = useDispatch()
  const { value: email, bind: bindEmail, reset: resetEmail} = useInput('')
  const { value: password, bind: bindPassword, reset: resetPassword} = useInput('')

  const handleLogin = (e) => {
    e.preventDefault()
    resetEmail()
    resetPassword()
  }

  console.log(bindEmail, bindPassword)

  return (
    <form
      className="Form"
      onSubmit={handleLogin}
    >

      <InputField
        type="email"
        label="Email"
        name="admin-email"
        id="admin-email"
        minLength={6}
        maxLength={255}
        required
        {...bindEmail}
      />

      <InputField
        type="password"
        label="Mot de passe"
        name="admin-password"
        id="admin-password"
        minLength={8}
        required
        {...bindPassword}
      />

      <Button
        type="submit"
        color="primary"
        variant="contained"
        label="Se connecter"
      />
    </form>
  )
}

export default LoginForm
