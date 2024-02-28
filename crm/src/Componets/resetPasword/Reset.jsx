import React from 'react';
import './css/style.css'

class Reset extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        select: 'UZB',
        place: '+998 90 000 00 00'
    };
}

    render() {
        const OnSelect = (e) => {
            this.setState({select: e.target.value})
            switch(e.target.value) {
                case 'UZB': this.setState({place: '+998 90 000 00 00'});break;
                case 'ENG': this.setState({place: '+44 20 0000 0000'});break;
                case 'RU': this.setState({place: '+7 (958) 000-00-00'});break;
            }
        }
        return (
        <div className='container_wrapper'>
            <div className="container">
                <h1 className='Name'>Reset Password</h1>
                <p className='desc'>Enter your email to reset your password.</p>
                <div className='input_wrapper'>
                    <p className='input_name'>Phone:</p>
                    <div className='inputs'>
                        <select onChange={OnSelect} name="" id="">
                            <option value="UZB">UZB</option>
                            <option value="ENG">ENG</option>
                            <option value="RU">RU</option>
                        </select>
                        <input maxLength={'20'} type="text" placeholder={this.state.place ? this.state.place : ''}/>
                    </div>
                        <button className='button'>Reset Password</button>
                </div>
            </div>
        </div>
        );
    }
}

export default Reset;