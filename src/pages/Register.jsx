import React, {useState} from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../firebase';
import '../style.scss'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc,setDoc } from 'firebase/firestore';

const Register = () => {
  const [err, setErr] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
          });

          await setDoc(doc(db, "userChats", res.user.uid), {})
        }
      );
      })
    }catch(err){
      setErr(true);
    }
    
  };

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chat App</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Display name'/>
                <input type='email' placeholder='Email'/>
                <input type='password' placeholder='Password'/>
                <input style={{ display: "none" }} type="file" id="file" />
                <label htmlFor='file'>
                    <img src='https://icons-for-free.com/iconfiles/png/512/gallery+image+landscape+mobile+museum+open+line+icon-1320183049020185924.png' alt="logo" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>Have already an account? <span>Login</span></p>
        </div>
    </div>
  )
}

export default Register