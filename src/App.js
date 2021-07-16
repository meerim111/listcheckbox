import React from 'react'
import Store from './HOC/Store/Store'
import User from "./component/container/user/User"


function App( ) {
  return (
   <Store>
       <User/>
   </Store>
  );
}

export default App;
