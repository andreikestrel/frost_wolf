import './Form.css'
import CampoTexto from '../CampoTexto';
import Button from '../Button';
import ListaSuspensa from '../ListaSuspensa'
import { useState } from 'react';

const Form = (props) => {
    const [nick, setNick] = useState('')
    const [funcao, setFuncao] = useState('')
    const [twitch, setTwitch] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const onSave = (event) =>{
        event.preventDefault()
        props.jogadorCadastrado({
            nick,
            funcao,
            twitch,
            imagem,
            time
        })
    }
    return (
        <section className="formulario">

            <form onSubmit={onSave} >
                <h2>O clã Frost Wolf cresce!</h2>
                <CampoTexto obrigatorio={true} label="Nick" placeholder="Digite seu nick" valor={nick} aoAlterado={valor => setNick(valor)}/>
                <CampoTexto obrigatorio={true} label="Função" placeholder="Digite sua função" valor={funcao} aoAlterado={valor => setFuncao(valor)} />
                <CampoTexto obrigatorio={true} label="Twitch" placeholder="Informe o endereço do canal na twitch" valor={twitch} aoAlterado={valor => setTwitch(valor)}/>
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa label="Time" itens={props.timesNomes} valor={props.timesNomes} aoAlterado={valor => setTime(time)}/>
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form