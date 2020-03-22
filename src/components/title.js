import React from 'react'

/**
 * Usamos Children para que al llamar a este componente se pueda hacer así
 * <Title>Titulo que queramos poner</Title>
 */
export const Title = ({children}) => (
    <h1 className="title">{children}</h1>
)