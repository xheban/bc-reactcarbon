import React, { Fragment, useState} from 'react';
import {TextInput,PasswordInput, Form, Button} from 'carbon-components-react';
import { ArrowRight32 } from '@carbon/icons-react';
import './Register.scss'
import '../../styles-own.scss'

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <Fragment>
            <Form>
                <div className="bx--row login__heading pb6">
                    <h1>
                        Registrácia
                    </h1>
                </div>
                <div className="bx--row login__line">
                    <hr width="100%" color="#6f6f6f" height="1px"/>
                </div>
                <div className="bx--row inputLabel">
                    <div className="bx--col-lg--auto bx--no-gutter--left text-input__label">
                        Meno
                    </div>
                </div>
                <div className="bx--row login__username pb6">
                    <TextInput
                        labelText=""
                        className="register__input"
                        id="register_name"
                        invalidText="A valid value is required"
                    />
                </div>
                <div className="bx--row inputLabel">
                    <div className="bx--col-lg--auto bx--no-gutter--left text-input__label">
                        Priezvisko
                    </div>
                </div>
                <div className="bx--row login__username pb6">
                    <TextInput
                        labelText=""
                        className="register__input"
                        id="register_lastname"
                        invalidText="A valid value is required"
                    />
                </div>
                <div className="bx--row inputLabel">
                    <div className="bx--col-lg--auto bx--no-gutter--left text-input__label">
                        Email
                    </div>
                </div>
                <div className="bx--row login__username pb6">
                    <TextInput
                        labelText=""
                        className="register__input"
                        id="register_email"
                        invalidText="A valid value is required"
                    />
                </div>
                <div className="bx--row inputLabel">
                    <div className="bx--col-lg--auto bx--no-gutter--left text-input__label">
                        Heslo
                    </div>
                </div>
                <div className="bx--row login__password pb6">
                    <PasswordInput
                        labelText=""
                        className="register__input expressive svg"
                        id="register_password"
                        invalidText="A valid value is required"
                    />
                </div>
                <div className="bx--row inputLabel">
                    <div className="bx--col-lg--auto bx--no-gutter--left text-input__label">
                        Potvrdiť heslo
                    </div>
                </div>
                <div className="bx--row login__password pb6">
                    <PasswordInput
                        labelText=""
                        className="register__input expressive svg"
                        id="register_password_confirm"
                        invalidText="A valid value is required"
                    />
                </div>
                <div className="bx--row button-login">
                    <Button className="button-login__inside bx--btn--expressive svg" renderIcon={ArrowRight32} iconDescription="Registrovať">
                        Registrovať
                    </Button>
                </div>
            </Form>
        </Fragment>
    );
};

export default Register
