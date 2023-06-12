import React from "react";

import styles from './CampTxt.module.css'

export default function CampTxt(props) {
    const placeholderModificada = `${props.placeholderModificada}...`
    const asTyped = (evento) => {
        props.asChanged(evento.target.value)
    }
    return (
        <div className={styles.camp__Txt}>
            <label>{props.label}</label>
            <input value={props.valor} onChange={asTyped} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}