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
                <label htmlFor='file'>
                    <img src='https://icons-for-free.com/iconfiles/png/512/gallery+image+landscape+mobile+museum+open+line+icon-1320183049020185924.png' alt="logo" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>Have already an account? <span>Login</span></p>
        </div>
    </div>
  )
}

export default Register