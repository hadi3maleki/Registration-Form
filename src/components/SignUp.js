import React, { useEffect, useState } from 'react';
import {validation} from './validation.js'
const SignUp = () => {
    //------------------------------------------
    const [data, setData] = useState({
        name:"",
        email:"",
        password: "",
        confirmPassword: "",
        isAccepted: false
    });
    //------------------------------------------
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    //------------------------------------------
    useEffect ( () => {
        setErrors(validation(data))
        // console.log(errors)
        },[data]
    )

    //------------------------------------------
    const changeHandler =  event => {
       if(event.target.name === 'isAccepted'){
            setData({...data, [event.target.name]: event.target.checked});
       }
       else{
            setData({...data, [event.target.name]: event.target.value});
       }   
       console.log(data)
    }
    
    //------------------------------------------
    const focusHandler = event=> {
        setTouched({...touched, [event.target.name]: true })
    }

    //------------------------------------------
    return (
        <div>
            
            <form>
                <h2>SignUp</h2>
                <div>
                    <label>Name</label>
                    <input type="text" name='name' value={data.name} onChange = {changeHandler} onFocus={focusHandler}/>
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                
                <div>
                    <label>Email</label>
                    <input type="text" name='email' value={data.email} onChange = {changeHandler} onFocus={focusHandler}/>
                    {errors.email && touched.name &&  <span>{errors.email}</span>}
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name='password' value={data.password} onChange = {changeHandler} onFocus={focusHandler}/>
                    {errors.password && touched.name &&  <span>{errors.password}</span>}
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input type="password" name='confirmPassword' value={data.confirmPassword} onChange = {changeHandler} onFocus={focusHandler}/>
                    {errors.confirmPassword && touched.name &&  <span>{errors.confirmPassword}</span>}
                </div>

                <div>
                    <label>I accept terms of privacy policy</label>
                    <input type="checkbox" name='isAccepted' value={data.isAccepted} onChange = {changeHandler} onFocus={focusHandler}/>
                    {errors.isAccepted && touched.name &&  <span>{errors.isAccepted}</span>}
                </div>

                <div>
                    <a href='#'>login</a>
                    <button type='submit'>SignUp</button>
                </div>
                    
            </form>
            
        </div>
    );
};

export default SignUp;