import styles from "./dropdownList.module.css"
import React from "react";


export default function DropdownList (props){
    return(
        <div className={styles.dropdownList}>
            <label>{props.label}</label>
            <select 
            onChange={(evento)=>props.aoAlterado(evento.target.value)}
            required={props.obrigatorio} 
            value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>

        </div>
    )
}