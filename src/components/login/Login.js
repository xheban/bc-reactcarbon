import React, { Fragment, useState} from 'react';
import {Link, TextInput, PasswordInput, Form, Button, Checkbox} from 'carbon-components-react';
import { ArrowRight32 } from '@carbon/icons-react';
import './Login.scss'
import '../../styles-own.scss'

let isEmailValid = true;
let isPasswordValid = true;


const Login = () => {
    const demoUser = {
        email: "admin@admin.com",
        password: "1234"
    }

    const [credentials, setCredentials] = useState({email:"",password:""})

    const emailValidation = email => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return regex.test(email);
    }

    const handleSubmit = e => {
       e.preventDefault();
       isEmailValid = emailValidation(credentials.email);
       console.log(isEmailValid);
    }
    
    return (
        <Fragment>
            <Form onSubmit={handleSubmit}>
                <div className="bx--row login__heading">
                    <h1>
                        Prihlásenie
                    </h1>
                </div>
                <div className="bx--row login__no-acc">
                    <div>Nemáte ešte účet? <Link href="#" className="bx--inline">Zaregistrujte sa tu.</Link>
                    </div>
                </div>
                <div className="bx--row login__line">
                    <hr width="100%" color="#6f6f6f" height="1px"/>
                </div>
                <div className="bx--row inputLabel">
                    <div className="bx--col-lg--auto bx--no-gutter--left text-input__label">
                        Email
                    </div>
                    <div className="bx--col-lg--auto bx--no-gutter--right forget">
                        <Link href="#" className=" bx--inline bx--no-gutter--right fs18">
                            Zabudli ste email?
                        </Link>
                    </div>
                </div>
                <div className="bx--row login__username pb6">
                    <TextInput
                        className="login__input"
                        id="login_email"
                        labelText=""
                        invalidText="Zadaný email je neplatný"
                        onChange={e => setCredentials({...credentials, email: e.target.value})}
                        value={credentials.name}
                        invalid={!isEmailValid}
                    />
                </div>
                <div className="bx--row inputLabel">
                    <div className="bx--col-lg--auto bx--no-gutter--left text-input__label">
                        Heslo
                    </div>
                    <div className="bx--col-lg--auto bx--no-gutter--right forget">
                        <Link href="#" className=" bx--inline bx--no-gutter--right fs18">
                            Zabudli ste heslo?
                        </Link>
                    </div>
                </div>
                <div className="bx--row login__password pb6">
                    <PasswordInput
                        className="login__input expressive svg"
                        id="login_password"
                        labelText=""
                        invalidText="A valid value is required"
                        onChange={e => setCredentials({...credentials, password: e.target.value})}
                        value={credentials.password}
                    />
                </div>
                <div className="bx--row pb4">
                    <Checkbox className="fs18" labelText="Zapamätať údaje" id="user-credentials" />
                </div>
                <div className="bx--row button-login">
                    <Button className="button-login__inside bx--btn--expressive svg"
                            renderIcon={ArrowRight32} iconDescription="Prihlásiť"
                            type="submit"
                    >
                        Prihlásiť
                    </Button>
                </div>
            </Form>
        </Fragment>
    );
};

export default Login