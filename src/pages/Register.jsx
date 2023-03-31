import React from 'react'
import './style.scss'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chat App</span>
            <span className='title'>Register</span>
            <form>
                <input type='text' placeholder='Display name'/>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <input required style={{ display: "none" }} type="file" id="file" />
                <label htmlFor='file'>asd</label>
                <button>Sign up</button>
            </form>
            <p>Have already an account? <span>Login</span></p>
        </div>
    </div>
  )
}

export default Register