import { useState } from 'react'
import * as userService from '../../utilities/users-service'
import styles from '../LoginForm/LoginForm.module.scss'
// import { useNavigate } from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom'

export default function LoginForm ({
  setUser,
  user,
  getFollowers
}) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('')

  const handleChange = (evt) => {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value })
    setError('')
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      const user = await userService.login(credentials)
      setUser(user)
      getFollowers(user._id)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>
      <div className={styles.formContainer}>
        <h1>Instafake</h1>
        <form autoComplete='off' onSubmit={handleSubmit}>
          <input type='email' name='email' value={credentials.email} onChange={handleChange} placeholder='email' required />
          <input type='password' name='password' value={credentials.password} onChange={handleChange} placeholder='password' required />
          <button type='submit'>LOG IN</button>
        </form>
        <h3 className={styles.errorMessage}>&nbsp;{error}</h3>
        <div>Dont have an account?<Link to='/signup'>signup</Link></div>
        <br />
        <div><strong>Test account</strong><p> Email: george@george.com <br />Password: 123abc</p></div>
      </div>
    </div>
  )
}
