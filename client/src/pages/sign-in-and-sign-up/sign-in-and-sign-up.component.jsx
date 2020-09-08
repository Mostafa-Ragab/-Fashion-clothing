import React from 'react';
import './sign-in-and-sing-up.styles.scss';
import SignIn from '../../component/signin/signin.component';
import SignUp from '../../component/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
    <div className='Sign-in-and-sign-up '>
        <SignIn  />
        <SignUp />
    </div>
);

export default SignInAndSignUpPage;