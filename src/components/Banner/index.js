import styles from "./banner.module.css"
import MenuLink from "../MenuLink"
import LogoEscrita from "../../assets/AnimeFlixLogoTxt1.png"
import AddVideo from "../Paginas/AddVideo"
export default function Banner (){
    return (
        <div className={styles.banner} >
            <MenuLink to={'/'}>
            <img alt="logo do site" src={LogoEscrita}></img>
            </MenuLink>
            <MenuLink to={'/AddVideo'}>
                <AddVideo />
            </MenuLink>

        </div>
    )
}