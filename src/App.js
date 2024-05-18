import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [email, setEmail] = useState('jkrzeminski@agh.edu.pl');

    function handleChange(event) {
        setEmail(event.target.value);
    }
    let length1;
    let message;
    if (email.length < 10) {
        message = <div>Ale masz krótki adres!</div>;
    } else if (email.length < 23) {
        message = <span>Twój adres e-mail jest w sam raz </span>;
    } else {
        message = <span>Twój adres e-mail jest stanowczo za długi </span>;
    }


    length1 = email.length;

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to: {email}</h2>
            <input type="text" value={email} onChange={handleChange}/>
            <span class="text">Twój e-mail to: <b>{email}</b></span><span>{message}, bo ma: <b>{length1}</b> znaki.</span>
        </div>

    );


}

export default App;
