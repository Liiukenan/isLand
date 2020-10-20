import React,{useEffect} from 'react'
import Help from '@views/Help'
function App(props) {
    useEffect(() => {
        window.serviceNumber=serviceNumber;
    }, []);
    const serviceNumber=(data)=>{
      return data;
    }
     return (
          <Help />
      );
}
export default App
