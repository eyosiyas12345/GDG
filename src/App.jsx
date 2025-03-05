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

  );

}

export default App

