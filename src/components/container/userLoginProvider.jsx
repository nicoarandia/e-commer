import React,{useState,useContext} from 'react';

const userContext=React.createContext();
const userToggleContext=React.createContext();


export function useUserContext(){
    return useContext(userContext)
}

export function useUserToggleContext() {
    return useContext(userToggleContext);
}



const UserLoginProvider = (props) => {

    
    const [user, setUser] = useState({state:0});
    
    const cambiaLogin = () => {
        if (user.state === 0) {
            setUser({state:1});
            alert(" Inicio de seccion exitoso ")
        }
        if (user.state === 1){
            setUser({state:0});
            alert("Se cerro la seccion con exito")
        }
        
    }

    return (
        <userContext.Provider value={user}>
            <userToggleContext.Provider value={cambiaLogin}>
                {props.children}
            </userToggleContext.Provider>
        </userContext.Provider>
    );
}

export default UserLoginProvider;
