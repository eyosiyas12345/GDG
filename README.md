# Task: Create a UserAuthContext that manages user authentication
 status (logged in/logged out).

   I have leant from this topic when Working with contextAPI : the work should pass three(3) steps:
       1, context creation
       2, context providing 
       3, context consuming

 ## The UserContext.jsx file : which is the starting file for the task where the context is created and provided:
 
 ```javascript
   import './App.css'
import { UserProvider } from "./UserContext";
import UserSwitch from "./UserSwitch";

function App(){
  return(
    <UserProvider>
      <UserSwitch/>
    </UserProvider>
  )
}

export default App;
```

## The userSwitch.jsx file : This is the second one where context is used by useContext method.

```javascript
import {UserContext} from './UserContext';
import { useContext } from 'react';

const UserSwitch =()=>{
  const {log, toggleLog} = useContext(UserContext);

  return (
    <div className={log==='login'?'loggedin':'loggedout'} id='app-container'>
      <h1>{log==='login'?'Welcome User':'Please Login'}</h1>
      <button onClick={toggleLog}>{log==='login'?'Logout':'Login'}</button>
    </div>
  );
}

export default UserSwitch;
```
## The App.jsx file: where the the whole is combined and displayed:

```javascript
import './App.css'
import { UserProvider } from "./UserContext";
import UserSwitch from "./UserSwitch";

function App(){
  return(
    <UserProvider>
      <UserSwitch/>
    </UserProvider>
  )
}

export default App;

```


