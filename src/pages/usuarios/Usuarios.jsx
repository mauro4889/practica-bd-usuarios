import React from 'react'
import { ButtonStyle, UsuariosContainerStyled } from './UsuariosStyle'

export const Usuarios = () => {
    return (
        <UsuariosContainerStyled>
            <ButtonStyle>Agregar usuario</ButtonStyle>
            <ButtonStyle>Quitar</ButtonStyle>
            <ButtonStyle>Ver usuarios</ButtonStyle>
            <ButtonStyle>Buscar</ButtonStyle>
        </UsuariosContainerStyled>
    )
}
