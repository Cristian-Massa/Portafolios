import React from "react";
import styled from "styled-components";
import tw from "twin.macro";



export const Form = () =>{
    return(
        <div>
            <form>
                <label htmlFor="Nombre y apellido">Nombre y apellido:</label>
                <input type="text" />
                <label htmlFor="email">Email:</label>
                <input type="email" name="" id="" />
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}