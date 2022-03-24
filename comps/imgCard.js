import styled from 'styled-components';

const RedCont = styled.div`
background-color: ${props=>props.cl};
color:${props=>props.text_color}

`
const NewH1 = styled.h1`
font-size: 5rem;
`

export default function imgCard({
    img='/boxing-basquiat.jpg', h2='This is a cat', 
    bg='red',
    children=null
}) {

    return <RedCont cl={bg}>
        {children}
        <img src={img}/>
        <NewH1>{h2}</NewH1>
    </RedCont>
}