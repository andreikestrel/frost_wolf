import './CampoTexto.css'
import '../Form'

const CampoTexto = (props) =>{

    const onDigit = (event) => {
        props.aoAlterado(event.target.value)
    }
    
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={onDigit} required={props.obrigatorio} type="text" placeholder={props.placeholder}/> 
        </div> 
    )
}

export default CampoTexto