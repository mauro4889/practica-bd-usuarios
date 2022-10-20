import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavBarContainerStyled } from './NavbarStyle'

export const Navbar = () => {
    return (
        <NavBarContainerStyled>
            <ul>
                <li><NavLink to='/'>Inicio</NavLink></li>
                <li>Usuarios</li>
            </ul>
        </NavBarContainerStyled>
    )
}
