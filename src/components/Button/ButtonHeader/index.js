
// import styled from "styled-components";
import Botao from "..";
import MenuLink from "../../MenuLink";



export default function ButtonHeader (){
    return(
        <div >

            <MenuLink to={'/AddVideo'}>
                <Botao>Novo Vídeo</Botao>
            </MenuLink>
            <MenuLink to={'/NewCategory'}>
                <Botao>Nova Categoria</Botao>
            </MenuLink>
        </div>
    )
}