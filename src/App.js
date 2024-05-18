import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import ReactDOM from "react-dom";
import "milligram";


function App() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "jkrzeminski@agh.edu.pl"
    },
    {
      username: "fracz@agh.edu.pl"
    }
  ];

  const errors = {
    uname: "Niepoprawna nazwa użytkownika",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var { uname } = document.forms[0];
    const userData = database.find((user) => user.username === uname.value);
    var nazwa = uname.value;
    if (userData) {
        setIsSubmitted(true);
      }
    else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };
  const handleClick = (event) => {
      event.preventDefault();
      var { uname } = document.forms[0];
      const userData = database.find((user) => user.username === uname.value);

      if (userData) {
          setIsSubmitted(true);
        }
      else {
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };
    function handleClick1() {
        setIsSubmitted(false);
      }
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Adres e-mail: </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
      <h2>System do zapisów na zajęcia</h2>
        <div className="title"></div>
        {isSubmitted ? <div> Zostałeś poprawnie zalogowany <input value="wyloguj" onClick={handleClick1} type="button" /></div> : renderForm}
      </div>
    </div>
  );
}

export default App;
