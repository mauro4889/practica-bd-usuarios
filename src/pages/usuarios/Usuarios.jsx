import React from 'react'
import { NavLink } from 'react-router-dom'
import { ButtonStyle, UsuariosContainerStyled } from './UsuariosStyle'

export const Usuarios = () => {
    return (
        <UsuariosContainerStyled>
            <NavLink to='/createuser'><ButtonStyle>Agregar usuario</ButtonStyle></NavLink>
            <ButtonStyle>Quitar</ButtonStyle>
            <ButtonStyle>Ver usuarios</ButtonStyle>
            <ButtonStyle>Buscar</ButtonStyle>
        </UsuariosContainerStyled>
    )
}
