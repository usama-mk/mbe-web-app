import Login from './Login/Login';
import './App.css';
import { firebaseApp } from './firebase';
import { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Home/Home';

function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Emailerror, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const handleLogin = ()=>{
      clearErrors();
      firebaseApp.auth().signInWithEmailAndPassword(email, password).catch(error=>{
          switch(error.code){
              case "auth/invalid-email":
              case "auth/user-disabled":
              case "auth/user-not-found":
                  setEmailError(error.message);
                  console.log("error")
                  break;
              case "auth/wrong-password":
                  setPasswordError(error.message);
                  console.log("error")
                  break;
              
          }
      })
      console.log(`user is: ${user}`)
  }

  const handleLogout= ()=>{
      firebaseApp.auth().signOut();
  }

  const authListener = ()=>{
      firebaseApp.auth().onAuthStateChanged((user)=>{
          if(user){
              clearInputs();
              setUser(user);
          }
          else{
              setUser("");
          }
      })
  }
  useEffect(()=>{
      authListener();
  },[]);

  const clearInputs = ()=>{
      setEmail('');
      setPassword('');
  }
  
  const clearErrors = ()=>{
    setEmailError('');
    setPasswordError('');
}


  return (
    <div className="App">
      {user?(
       <div className="loggedInApp">
         {/* <p> hi user: is logged in</p>
         <Button onClick={handleLogout}>Logout</Button>
         {console.log(user.email)} */}
         <BrowserRouter>
     <Header/>
     <Switch>
      <Route exact path='/' render={()=>(<Home user={user} handleLogout={handleLogout} />)}  />
      {/* <Route exact path='/allmaterials' render={()=>(<AllMaterials data={this.state.imageUrls} />)}  />
      <Route exact path='/mymaterials' render={()=>(< MyMaterials data={this.state.videoUrls} />)}  />
      <Route exact path='/myhours' render={()=>(<MyHours data={this.state.pdfUrls} />)} />
      <Route exact path='/addworklocation' render={()=>(<AddWorkLocation data={this.state.pdfUrls} />)} /> */}

    
     </Switch>
   </BrowserRouter>
          </div>
      ):( <Login 
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        Emailerror={Emailerror}
        passwordError={passwordError}
        />) }
     
    </div>
  );
}

export default App;
 