import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './loginSite.css';
import { useNavigate } from 'react-router-dom';
import { ifLogIn } from '../settings/appSettings';

const LogIn = () => {
    let [login, setLogin] = useState(ifLogIn);
    let [password, setPassword] = useState('');
    let [alertDiv, setAlertDiv] = useState('');
    const navigate = useNavigate();

    const validateLogIn = (event) => {
        event.preventDefault();
        
        if (login != '' && password != '') {
            console.log(login+' '+password);
            //tu ma być skrypt validujący logowanie
            setAlertDiv(<div></div>)
            if(login === 'pstawekl' && password === '123'){
                setLogin(true);
                console.log(ifLogIn);
                navigate('/');
            }
        }else{
            setAlertDiv(<div className="alert alert-danger" role="alert" style={{textAlign: 'center'}}>
                Uwaga! Wprowadź login i hasło.
            </div>);
        }
    }

    return (
        <div className="content">
            <div style={{ width: '20%', marginLeft: "40%", marginTop: '10%'}}>
                {alertDiv}
                <Form>
                    <Form.Label>Logowanie do panelu</Form.Label>
                    <Form.Control style={{ marginTop: "10px" }} id="txtLogIn" type="text" placeholder="Podaj login..." onChange={(event)=>setLogin(event.target.value)} />
                    <Form.Control style={{ marginTop: "10px" }} id="txtPassword" type="text" placeholder="Podaj hasło..." onChange={(event)=>setPassword(event.target.value)} />
                    <Button style={{ width: "100%", marginTop: "10px" }} variant="primary" type="submit" onClick={validateLogIn}> Zaloguj się </Button>
                </Form>
            </div>
        </div>
    )
}

export default LogIn;