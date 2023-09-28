import Banner from './components/Banner';
import Form from './components/Form';
import Time from './components/Time';

function App() {
  const times = [
    {
      nome:'League of legends',
      cor1:'#DB6EBF',
      cor2:'#FAE9F5',
    },
    {
      nome:'Overwatch',
      cor1:'#FFBA05',
      cor2:'#FFF5D9',
    },
    {      
    nome:'Valorant',
    cor1:'#E06B69',
    cor2:'#FDE7E8',
    },
    {
    nome:'Fortnite',
    cor1:'#A6D157',
    cor2:'#F0F8E2',
    },
    {
    nome:'Fighting Games',
    cor1:'#6278F7',
    cor2:'#E8F8FF',
    }


  ]
  const novoJogador = (jogador) => {
    console.log(jogador)
  }
  return (
    <div className="App">
      <Banner />
      <Form timesNomes={times.map(time => time.nome)} jogadorCadastrado={ jogador => novoJogador(jogador)}/>
      {times.map(time => <Time
       key={time.nome} 
       nome={time.nome} 
       corPrimaria={time.cor1} 
       corSecundaria={time.cor2} />)}
    </div>
  );
}

export default App;

