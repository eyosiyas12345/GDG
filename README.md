# GDG Task: State and Props
I learnt the use of state and props in this topic 

## project Over view
The project contain three components
* App: which used to render other projects.
* counter: which show the use of state
* card: which is involve the use of props

## Counter
```javascript
import React, {useState} from 'react'

function Counter(){

const [number, setnumber]= useState(0);
const increase =()=>{setnumber(number+1);
}
const decrease =()=>{ if(number>0){setnumber(number-1)}}
const reset = ()=>{setnumber(0)}

return(
   <div className='container'>
   <p>Counter: {number}</p>
<button onClick={increase}>Increament</button>
<button onClick={reset}>Reset</button>
<button onClick={decrease}>Decreament</button>
</div>);

export default Counter
```
## Card
```javascript
function  Card(props){
  const cardStyle = {
    backgroundColor: props.backgroundColor || '#f0f0f0', // Default color if not provided
    padding: '20px',
     border: '1px solid #ccc',
    borderRadius: '5px',
    maxWidth: '300px',
     margin: '10px',
     boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
  };

    return(
<div className="card" style={cardStyle}>
  <h1></h1> 
  <p>Name: {props.name}</p>
  <p>Email: {props.email}</p>
  <p>Age: {props.age}</p>
</div>
    );
}

export default Card;
```
## App
```javascript
import Counter from './components/Counter'
import Card from './components/Card'
function App() {
  return (
    <>
 <Counter/>
 <Card name="Eyosiyas" email="eyosiyasgezahegn326@gmail.com" age={21} backgroundColor="green" />
 <Card name="Biniyam" email="biniyamberihun326@gmail.com" age={20} backgroundColor="yellow" />
  <Card name="Betsinat" email="betsnatgezachew326@gmail.com" age={20}  backgroundColor="red" />
  </>
```
  );

}

export default App






