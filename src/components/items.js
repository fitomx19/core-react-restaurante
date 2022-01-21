import React ,{useContext,useEffect} from 'react';
import MenuContext from '../context/menu/menuContext'


const Items = () => {
  const menuContext = useContext(MenuContext);
  const { mostrarMenu,menu } = menuContext;
  useEffect(() => {
    mostrarMenu()
  }, []);

    return ( 

        <section className="py-8">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -m-4">



            
 
     {menu.map((e)=>{
       return (
        <div className="w-full md:w-1/2 lg:w-1/4 p-4">
        <div className="p-6 bg-white rounded">
          <div className="flex items-center mb-6">
            <span className="flex-shrink-0 inline-flex justify-center items-center mr-3 w-10 h-10 rounded-full bg-purple-500">
              <svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.8335 2.58333H9.60014L9.33348 1.75C9.1606 1.26102 8.83993 0.837918 8.41589 0.539299C7.99185 0.24068 7.48544 0.0813322 6.96681 0.0833316H3.16681C2.50377 0.0833316 1.86788 0.346724 1.39904 0.815565C0.930201 1.28441 0.666809 1.92029 0.666809 2.58333V13.4167C0.666809 14.0797 0.930201 14.7156 1.39904 15.1844C1.86788 15.6533 2.50377 15.9167 3.16681 15.9167H14.8335C15.4965 15.9167 16.1324 15.6533 16.6012 15.1844C17.0701 14.7156 17.3335 14.0797 17.3335 13.4167V5.08333C17.3335 4.42029 17.0701 3.78441 16.6012 3.31557C16.1324 2.84672 15.4965 2.58333 14.8335 2.58333ZM15.6668 13.4167C15.6668 13.6377 15.579 13.8496 15.4227 14.0059C15.2665 14.1622 15.0545 14.25 14.8335 14.25H3.16681C2.9458 14.25 2.73383 14.1622 2.57755 14.0059C2.42127 13.8496 2.33348 13.6377 2.33348 13.4167V2.58333C2.33348 2.36232 2.42127 2.15036 2.57755 1.99408C2.73383 1.8378 2.9458 1.75 3.16681 1.75H6.96681C7.14151 1.74955 7.31194 1.80401 7.454 1.9057C7.59606 2.00739 7.70257 2.15115 7.75848 2.31667L8.20848 3.68333C8.26438 3.84885 8.37089 3.99261 8.51295 4.0943C8.65501 4.19598 8.82544 4.25045 9.00014 4.25H14.8335C15.0545 4.25 15.2665 4.3378 15.4227 4.49408C15.579 4.65036 15.6668 4.86232 15.6668 5.08333V13.4167Z" fill="#E6D4F8" />
              </svg>
            </span>
            <div>
              <p className="text-xs font-bold">{e.nombre}</p>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-3">
              <span className="mr-3 ">
                  <img className="object-center rounded-md" src={e.url}/>
              </span>
              
            </div>
            <div className="flex items-center mb-3">
              <span className="mr-3">
               
              </span>
            </div>
            <div className="flex items-center justify-between mb-10" data-removed="true">
              <div className="flex items-center">
              <p>{e.tags}</p>
              </div>
              <a href="#">
                <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.00001 6.66666C7.26363 6.66666 6.66668 7.26362 6.66668 8C6.66668 8.73637 7.26363 9.33333 8.00001 9.33333C8.73639 9.33333 9.33334 8.73637 9.33334 7.99999C9.33334 7.26362 8.73639 6.66666 8.00001 6.66666Z" fill="#E1E4E8" />
                  <path d="M12.6667 6.66666C11.9303 6.66666 11.3333 7.26362 11.3333 8C11.3333 8.73637 11.9303 9.33333 12.6667 9.33333C13.403 9.33333 14 8.73637 14 7.99999C14 7.26362 13.403 6.66666 12.6667 6.66666Z" fill="#E1E4E8" />
                  <path d="M3.33332 6.66666C2.59694 6.66666 1.99999 7.26362 1.99999 8C1.99999 8.73637 2.59694 9.33333 3.33332 9.33333C4.0697 9.33333 4.66666 8.73637 4.66666 7.99999C4.66666 7.26362 4.0697 6.66666 3.33332 6.66666Z" fill="#E1E4E8" />
                </svg>
              </a>
            </div>
            <div className="relative w-full h-1 mb-3 rounded-full bg-gray-50">
              {/*aqui va lo de la barra*/}
              <div className="absolute top-0 left-0 h-full w-1/2 rounded-full bg-purple-500" />
            </div>
            <div className="flex items-center">
              <span className="inline-block py-1 px-2 mr-2 bg-indigo-50 rounded-full text-xs text-indigo-500">Organico</span>
              <span className="text-xs text-gray-500 font-medium">{e.calorias} calorias</span>
              <div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
     );})}

           



            </div>
          </div>
         </section>

     );
}
 
export default Items;