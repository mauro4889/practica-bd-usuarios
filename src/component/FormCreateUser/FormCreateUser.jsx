import React from 'react'
import { useForm } from "react-hook-form"
import { FromCreateUserStyle } from './FormCreateUserStyle';

export const FormCreateUser = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        reset()
    };
    return (
        <FromCreateUserStyle onSubmit={handleSubmit(onSubmit)}>
            <h3>Formulario de nuevo usuario</h3>
            <label>Nombre</label>
            <input {...register("firstName",{required:true})}/>
            <label>Apellido</label>
            <input {...register("lastName",{required:true})}/>
            <label>Email</label>
            <input {...register("email",{required:true})}/>
            <button type='submit'>Enviar</button>
        </FromCreateUserStyle>        
    )
}
