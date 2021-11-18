import React from 'react';
import './App.css';
import ComponentA from './components/contexthooks/ComponentA';
import DataFetching from './components/hooks/DataFetching';
export const UserContext = React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value = {'Praveena'} >
    <ComponentA/>
     </UserContext.Provider>
      
    </div>
  );
}

export default App;
