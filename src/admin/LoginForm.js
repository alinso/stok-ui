import React from 'react';
import {FormGroup, ControlLabel,FormControl,Button} from 'react-bootstrap';
import {baseUrl, sendLoginPost} from '../Util';

class LoginForm extends React.Component{
    constructor(...args) {
        super(...args);

        this.handleChange = this.handleChange.bind(this);
        this.save  =this.save.bind(this);

        this.state = {
            user: '',
            pass: ''
        };
    }

    save(){
        console.log(this.state.user +" - -"+this.state.pass);
        sendLoginPost(this.state.user,this.state.pass);
    }

    handleChange(e) {
        console.log(e);

        this.setState({ user: document.getElementById("user").value, pass:document.getElementById("pass").value });

    }

    render(){
        return(
            <form>
                <FormGroup
                    controlId="user">
                    <ControlLabel>Kullanıcı Adı</ControlLabel>
                    <FormControl
                        name="user"
                        type="text"
                        value={this.state.user}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup
                    controlId="pass">
                    <ControlLabel>Şifre</ControlLabel>
                    <FormControl
                        name="pass"
                        type="password"

                        value={this.state.pass}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button onClick={this.save} type="button">Giriş Yap</Button>
            </form>
        )
    }
}

export default LoginForm;