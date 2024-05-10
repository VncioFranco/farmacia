import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-blue-600 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>LegalDrugs</div>

            <div className='flex gap-4'>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>
              <Link to='/home' className='hover:underline'>Home</Link>
              <Link to='/cadastrarCategoria' className='hover:underline'>Cadastrar Categoria</Link>

            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar