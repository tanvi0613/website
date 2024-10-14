import { useMemo, useState } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Orb from './Components/Orb/Orb';
import TopNav from './Components/TopNav/TopNav';

function App() {
  const [active, setActive] = useState(1);

  const displayData= () => {
    switch(active){
      case 1:
        return 
    }
  }

  //save the animation in memory so when you click somewhere it doesn't reset
  const orbMemo = useMemo(()=>{
    return <Orb/>
  },[])

  return (
    <div className="App">
      {orbMemo}
      <div className='MainLayout'>
        <TopNav/>
        <Navigation active={active} setActive={setActive}/>
        <div className='main'>
          {displayData()}
        </div>
      </div>
    </div>
  );
}

export default App;
