import React from 'react';
import './css/style.css'

class Register extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        name: '',
        password: '',
        isActive: '',
        isView: true,
        border_input: true,
    };
}

    render() {
        const onInput = (e) => {
            this.setState({[e.target.name] : e.target.value})
            this.setState({isActive: ''})
            this.setState({border_input: true})
        }
        const OnData = () => {
            if (this.state.name.toUpperCase().toLowerCase() == 'Rahimjon'.toUpperCase().toLowerCase()  && this.state.password == 2010) {
                this.setState({isActive: `Sizning malumotlaringiz to'gri`})
            }
            else {
                this.setState({isActive: 'Sizning malumotlaringiz notugri'})
                this.setState({border_input: false})
            }
        } 
        const OnView = () => {
            this.setState({isView: !this.state.isView})
        }
        return (
            <div className="Container_Wrapper">
            <div className="container">
              <div className="title-Wrapper">
                <h1 className="title">Login to your account</h1>
                <p className="desc">Enter your details to login.</p>
              </div>
              <div className="inputs">
                <div className="input_one">
                  <p className="input_one_description">Email Adress *  {this.state.isActive}</p>
                <input style={{border: `2px solid ${this.state.border_input ? 'gray' : 'red'}`}}
                 onChange={onInput} name='name' className='input_one_1' type="text" placeholder='Enter your email address' />
                </div>
                <div className="input_two">
                  <p className="input_two_description">Password Adress *</p>
                <input style={{border: `2px solid ${this.state.border_input ? 'gray' : 'red'}`}}
                 onChange={onInput} name='password' className='input_one_2' type={this.state.isView ? 'password' : 'number'} placeholder='**********'/>

                <button onClick={OnView} className='ButtonPasword'>{this.state.isView ? `Parolni ko'rish` : `Parolni berkitish`}</button>
                </div>
              </div>
              <br />
              <div style={{display: 'flex', justifyContent: 'center'}}>
              <button onClick={OnData} className='registerButton'>Login</button>
              </div>
            </div>
          </div>
        );
    }
}
export default Register;


// git init
// git add README.md 
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/raximjon2010/React-Task.git
// git push -u origin main