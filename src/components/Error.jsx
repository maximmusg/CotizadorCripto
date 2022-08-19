import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: #b7322c;
    color: #FFF;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    text-align: center;
`

const Error = () => {
  return (
    <Texto>Todos los campos son obligatorios</Texto>
  )
}

export default Error