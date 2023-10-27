import React from "react";

export default function SignIn(props)
{
    console.log("Signin")
    console.log(props)
    const showSignInFlag = props?.showSignIn
    if (showSignInFlag===false) return null

    return(
        <div class="sign-in rounded">
            <form className="sign-in__form" action="https://www.reece.com/login">
            <h2 className="fs-5">Sign In</h2>
            {/* <label>Email Address</label>
            <input type="email" placeholder="Enter Email Address" />
            <label>Password</label>
            <input type="password" placeholder="Enter Password" /> */}
            <div className="sign-in__controls">
                <a href="https://www.reece.com/forgot-password">Forgot Password?</a>
                {/* <a className="btn btn--dark" href="https://www.reece.com/login">Sign In</a> */}
                <button className="btn btn--dark">Sign In</button>
            </div>
            </form>
            <div className="sign-in__register">
            <h3 className="fs-5">New to Reece online?</h3>
            <p>Registering for online access is easy.</p>
            <p>
                <a href="https://www.reece.com/register">Sign up now</a>
            </p>
            </div>
        </div>
    )
}