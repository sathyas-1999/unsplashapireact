import React from 'react';
import './Login.css';
export default function login(){
  return(
    <div>
<div className="login-form">    
    <form>
        <div className="avatar"><img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/unsplash-512.png"/>
        </div>
        <h4 className="modal-title">Login to Your Account</h4>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Username" required="required" />
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" required="required"/>
        </div>
        <div className="form-group">
            <label className="label1"><input type="checkbox" /> Remember me</label>
            <a href="#" className="forgot-link">Forgot Password?</a>
        </div> 
        <input type="submit" className="btn" value="Login"/>              
    </form>         
    <div className="signup">Don't have an account? <a href="#">Sign up</a></div>
</div>
</div>
);
}