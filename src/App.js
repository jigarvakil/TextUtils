import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
  };

  const toggleMode = clrCls => {
    // console.log(clrCls);
    removeBodyClasses();
    document.body.classList.add(`bg-${clrCls}`);

    setMode(clrCls);
    // document.body.style.backgroundColor = '#042743';
    showAlert(`${clrCls} mode has been enabled`, 'success');
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <hr
          style={{
            border: mode === 'dark' ? 'solid white 1px' : 'solid black 1px',
          }}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            {/* /users --> Component 1
        /users/home --> Component 2 */}
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="TextUtils" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
