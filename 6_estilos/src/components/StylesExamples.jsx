import React from 'react'
import "./StylesExamples.css";
import styles from "./StylesExamples.module.css"

const StylesExamples = () => {

    const inlineStyle= {
        color: "red",
        fontSize: "20px",
    }
  return (
    <div>
        <h2 style={inlineStyle}>Estilos</h2>
        
        
        {/* css importado */}
        <p className='text'>Css importado</p>

        {/* Css modules */}
        <p className={styles.textPurple}>Css modules</p>
    </div>
  )
}

export default StylesExamples