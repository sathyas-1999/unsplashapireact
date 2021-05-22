import React from 'react';
import './Joinfree.css';
export default function join(){
  return(
    <div className="wrapper">
	<div className="registration_form">
		<div className="title">
      Join Unsplash
		</div>
    <div className="acclogin">
      <p style={{color:"white"}}>Already have an account?<a href="login.html">Login</a></p>
    </div>
	<div className="input_wrap">
		<input type="submit" value="Join using Facebook" className="submitbtn" />
	</div>
	<form>
			<div className="form_wrap">
				<div className="input_grp">
					<div className="input_wrap">
						<label for="fname">First Name</label>
						<input type="text" id="fname" />
					</div>
					<div className="input_wrap">
						<label for="lname">Last Name</label>
						<input type="text" id="lname"/>
					</div>
				</div>
				<div className="input_wrap">
					<label for="uname">Username</label>
					<input type="text" id="uname" />
				</div>
				<div className="input_wrap">
					<label>Email Address</label>
          <input type="text" id="email" />
        </div>
				<div className="input_wrap">
					<label for="password">Password</label>
					<input type="text" id="password" />
				</div>
				<div className="input_wrap">
					<input type="submit" value="Join" className="submit_btn"/>
				</div>
        <div className="footer">
          <p>By joining, you agree to the Terms and Privacy Policy.</p>
        </div>
			</div>
		</form>
	</div>
</div>
  );
}