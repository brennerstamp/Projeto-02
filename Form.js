import './Form.css';
import bgform from './imagens/bgform.jpg';


function Form(props) {
    return (
        <>
        <section className="cover-form">
            
        <div className="container bg">
        
            <div className="form-container">
                <h2>PODE ACREDITAR, POR DENTRO É AINDA MAIS BONITO.</h2>
                <form>
                    <div className="form-wraper">
                        <p>Nome Completo</p>
                        <input type="text" name="nome" required placeholder="Nome"/>
                    </div>
    
                    <div className="form-wraper">
                        <p>E-mail</p>
                        <input type="text" name="email" required placeholder="E-mail"/>
                    </div>
    
                    <div className="form-wraper">
                        <p>Telefone</p>
                        <input type="text" name="telefone" required placeholder="Telefone"/>
                    </div>
    
                    <div className="form-wraper">
                        <input type="submit" name="acao" value="Enviar"/>
                    </div>
                    <div class="form-wraper">
                        <p>* Campos Obrigatórios</p>
                    </div>
                </form>
            </div>
        </div>
    </section>
    </>
    

    );
}

export default Form;