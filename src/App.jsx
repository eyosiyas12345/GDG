
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
