import React from 'react';
import homeLogo from '../../assets/home2.png'
import './Home.css';
import ListaCategorias from '../../components/categorias/listarCategorias/ListarCategorias';


function Home() {
    return (
        <>
        
        <div className="bg-blue-500 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Bem vindes!</h2>
              <p className='text-xl'>LegalDrugs! A Farmácia do povo</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver Categorias!</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      <ListaCategorias />
     
      </>
    );
}

export default Home;