import './Mosaico.css';
import mosaico1 from './imagens/mosaico1.jpg';
import mosaico2 from './imagens/mosaico2.jpg';
import mosaico3 from './imagens/mosaico3.jpg';
import mosaico4 from './imagens/mosaico4.jpg';


function Mosaico (props) {
    return (

<>
<section className='mosaico'>

	<div className='container'>

		<div className='flex-mosaico'>
          <div className='mosaico-um'>  
            <div className='item-1-mosaico'></div>

            <div  className='item-2-mosaico'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo eu sapien ultricies dignissim. Vestibulum feugiat interdum pharetra. Curabitur vulputate a lectus nec maximus. Quisque id interdum eros. Donec porta nibh eget diam consectetur fringilla. Proin in urna faucibus, volutpat enim a, maximus ipsum</p>
            </div>
        </div>
           
		</div>

	
	<div className='flex-mosaico'>
            <div className='mosaico-dois'>
            <div className='item-1-mosaico'>
            </div>

                <div className='item-2-mosaico'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo eu sapien ultricies dignissim. Vestibulum feugiat interdum pharetra. Curabitur vulputate a lectus nec maximus. Quisque id interdum eros. Donec porta nibh eget diam consectetur fringilla. Proin in urna faucibus, volutpat enim a, maximus ipsum</p>
                   
                </div>
            </div>    

		</div>


		<div className='flex-mosaico'>
            <div className='mosaico-tres'>
            <div className='item-1-mosaico'></div>
         

                <div className='item-2-mosaico'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo eu sapien ultricies dignissim. Vestibulum feugiat interdum pharetra. Curabitur vulputate a lectus nec maximus. Quisque id interdum eros. Donec porta nibh eget diam consectetur fringilla. Proin in urna faucibus, volutpat enim a, maximus ipsum</p>
               
                </div>
            </div>    
            
		</div>
            

		<div className='flex-mosaico'>
            <div className='mosaico-quatro'>
                <div  className='item-1-mosaico'></div>

                <div className='item-2-mosaico'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae justo eu sapien ultricies dignissim. Vestibulum feugiat interdum pharetra. Curabitur vulputate a lectus nec maximus. Quisque id interdum eros. Donec porta nibh eget diam consectetur fringilla. Proin in urna faucibus, volutpat enim a, maximus ipsum</p>
                </div>
            </div>    

		</div>

	</div>

</section>

   
</>

    

    );
}


export default Mosaico;


