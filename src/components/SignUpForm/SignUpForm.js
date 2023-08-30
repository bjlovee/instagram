import { Component } from 'react'
import { signUp } from '../../utilities/users-service'
import styles from '../SignUpForm/SignUpForm.module.scss'
import { Link } from 'react-router-dom'

export default class SignUpForm extends Component {
  state = {
    name: '',
    handle: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  }

  handleSubmit = async (evt) => {
    evt.preventDefault()

    try {
      const formData = { ...this.state }
      console.log(formData)
      delete formData.error
      delete formData.confirm
      const user = await signUp(formData)
      this.props.setUser(user)
    } catch (error) {
      console.log(error)
      this.setState({ error: 'Sign Up Failed' })
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render () {
    const disable = this.state.password !== this.state.confirm
    return (
      <div>
        <div className={styles.formContainer}>
          <h1>Instafake</h1>
          <p>Sign up to see photos and videos from tour friends</p>
          <form autoComplete='off' onSubmit={this.handleSubmit}>
            <input type='text' name='name' value={this.state.name} onChange={this.handleChange} placeholder='name' required />
            <input type='text' name='handle' value={this.state.handle} onChange={this.handleChange} placeholder='username' required />
            <input type='email' name='email' value={this.state.email} onChange={this.handleChange} placeholder='email' required />
            <input type='password' name='password' value={this.state.password} onChange={this.handleChange} placeholder='password' required />
            <input type='password' name='confirm' value={this.state.confirm} onChange={this.handleChange} placeholder='confirm password' required />
            <button type='submit' disabled={disable}>SIGN UP</button>
          </form>
          <p className={styles.errorMessage}>&nbsp;{this.state.error}</p>
          <div>Already have an account?<Link to='/'>login</Link></div>
        </div>
      </div>
    )
  }
}
