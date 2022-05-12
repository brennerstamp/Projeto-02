import './Chamada.css';
import arrow from './imagens/arrow.png';

function Chamada (props){
    return(
        <section className="chamada">
        <div className="icone-seta"></div>
            <div className="container">
            <div><h2>Minha chamada para o empreendimento</h2></div>
            <div><p>Alguma mensagem para a chamada</p></div>
            </div>
        </section>
    );
}

export default Chamada;