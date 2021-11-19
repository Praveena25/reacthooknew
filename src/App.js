import React from 'react';
import './App.css';
import ComponentA from './components/contexthooks/ComponentA';
export const UserContext = React.createContext()
export const BatchContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Praveena'} >
        <BatchContext.Provider value={'dxc batch 2'}>
        <ComponentA/>
     
    </BatchContext.Provider>
    </UserContext.Provider>
      
    </div >
  );
}

export default App;
