import { useState, useEffect } from "react";
import { Dna } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

import { listar } from "../../../services/Service";
import CardCategorias from "../cardCategoria/CardCategoria";
import Categoria from "../../../models/Categoria";

function ListaCategorias(){
    const [categorias,setCategorias] = useState <Categoria[]>([]);

    let navigate = useNavigate();

    async function ListarCategorias() {
        try {
          await listar('/categorias', setCategorias, {
            headers: {},
          });
        } catch (error: any) {
          if (error.toString().includes('403')) {
            alert('O token expirou, favor logar novamente')
            
          }
        }
      }
      useEffect(() => {
        ListarCategorias();
      }, [categorias.length]);
      return (
        <>
          {categorias.length === 0 && (
            <Dna
              visible={true}
              height="200"
              width="200"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper mx-auto"
            />
          )}
          <div className="flex justify-center w-full my-4">
            <div className="container flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categorias.map((categoria) => (
                  <>
                    <CardCategorias key={categoria.id} categoria={categoria} />
                  </>
                ))}
              </div>
            </div>
          </div>
        </>
      );
    }
    
    export default ListaCategorias;