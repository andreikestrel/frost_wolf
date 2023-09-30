import './Player.css'

const Player = (props) =>{
    return(
        <div className='player'>

            <div className='header'>
                <img src={props.imagem} alt="Kestrel" />
            </div>
            <div className='footer'>
                <h4>{props.nome}</h4>
                <h5>{props.twitch}</h5>
                <h5>{props.funcao}</h5>
            </div>
        </div>
    )

}

export default Player