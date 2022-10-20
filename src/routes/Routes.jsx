import {Routes as ReactDomRoutes, Route } from "react-router-dom"
import { FormCreateUser } from "../component/FormCreateUser/FormCreateUser"
import { Usuarios } from "../pages/usuarios/Usuarios"



export const Routes = () => {
    return (
        <ReactDomRoutes>
            <Route path='/' element={<Usuarios/>}/>
            <Route path='createuser' element={<FormCreateUser/>}/>
        </ReactDomRoutes>
    )
}