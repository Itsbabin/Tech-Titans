import { useState } from 'react';
import CaseContext from './context'
const CaseState = (props) =>{

    const [user, setUser] = useState({});
    

    return(
        <CaseContext.Provider value={{user, setUser}}>
            {props.children}
        </CaseContext.Provider>
    )
}

export default CaseState;