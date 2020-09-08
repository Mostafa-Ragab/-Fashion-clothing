import React, { useState } from 'react';
import './sign-up.styles.scss';
// import { createUserProfileDocument, auth} from '../firebase/firebase.utiles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.componenet';
import {signUpStart} from '../../redux/user/user.action';
import { connect } from 'react-redux';

// converting classical component to functional component and use Hooks
const SignUp = ({signUpStart}) => {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

   
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
  signUpStart({displayName, email, password}) ;
  //   try {
  //     const { user } = await auth.createUserWithEmailAndPassword(
  //       email,
  //       password
  //     );

  //     await createUserProfileDocument(user, { displayName });

  //     this.setState({
  //       displayName: '',
  //       email: '',
  //       password: '',
  //       confirmPassword: ''
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials,[name]: value });
  };

    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
}


const mapdDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null,mapdDispatchToProps)(SignUp);