import { useState } from 'react';
import CaseContext from './context'
const CaseState = (props) =>{

    const [state, setState] = useState({});
    

    return(
        <CaseContext.Provider value={{state, setState}}>
            {props.children}
        </CaseContext.Provider>
    )
}

export default CaseState;