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