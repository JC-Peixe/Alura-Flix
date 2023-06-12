import LogoEscrita from "../../assets/AnimeFlixLogoTxt1.png"
import MenuLink from "../MenuLink"

export default function Logo() {
    return (
        <MenuLink to={'/'} >
            <img alt="logo do site" src={LogoEscrita}></img>
        </MenuLink>
    )
}