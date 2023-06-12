import styles from "./header.module.css"
// import MenuLink from "../MenuLink"
// import AddVideo from "../Paginas/AddVideo"
import ButtonHeader from "../Button/ButtonHeader"

import React from "react";
import Logo from "../Logo";


export default function Header (){
    
    return (
        <div  className={styles.btocontainer}>

                <Logo/>
                <ButtonHeader className={styles.botoes}/>

        </div>
    )
}