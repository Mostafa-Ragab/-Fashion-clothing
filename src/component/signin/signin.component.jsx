import React from 'react';
import FormInput from '../form-input/form-input.component';
import './signin.styles.scss';
import CustomButton from '../custom-button/custom-button.componenet';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };
    handleSubmit = event => {
        event.preventDefault();
        this.setstate({name:'' , password:'' })
    };

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange} 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        required 
                        label='email'

                    />
                    <FormInput 
                        handleChange={this.handleChange} 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        required 
                        label='password'

                    />
                    <CustomButton type='submit'  > sign in</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn;