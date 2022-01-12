import React from 'react'

const Footer = () => {
    return ( 

        <div className="bg-linear-pink-invert py-12 px-4">
        <div tabindex="0" aria-label="footer" className="focus:outline-none mx-auto container flex flex-col items-center justify-center">
            <div tabindex="0" aria-label="prodify logo" role="img">
               <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_center_aligned_with_logo-svg1.svg" alt="logo"/>
            </div>
            <div className="text-black flex flex-col md:items-center f-f-l pt-3">
                <h1 tabindex="0" className="focus:outline-none text-2xl font-black">TU mejor comida una vez por semana</h1>
                <div className="md:flex items-center mt-5 md:mt-10 text-base text-color f-f-l">
                    <h2  className=" md:mr-6 pb-4 md:py-0 cursor-pointer"><a  className="focus:outline-none focus:underline hover:text-gray-700" href="javascript:void(0)">Descarga ahora</a> </h2>
                    <h2  className="cursor-pointer"><a className="focus:outline-none focus:underline hover:text-gray-700" href="javascript:void(0)">Licencia</a> </h2>
                </div>
                <div className="my-6 text-base text-color f-f-l"> 
                    <ul className="md:flex items-center">
                        <li className="md:mr-6 cursor-pointer pt-4 lg:py-0"><a href="javascript:void(0)" className="focus:outline-none focus:underline hover:text-gray-500">Acerca </a></li>
                        <li className="md:mr-6 cursor-pointer pt-4 lg:py-0"><a href="javascript:void(0)" className="focus:outline-none focus:underline hover:text-gray-500">Caracteristicas </a></li>
                        <li className="md:mr-6 cursor-pointer pt-4 lg:py-0"><a href="javascript:void(0)" className="focus:outline-none focus:underline hover:text-gray-500">Precio </a></li>
                        <li className="md:mr-6 cursor-pointer pt-4 lg:py-0"><a href="javascript:void(0)" className="focus:outline-none focus:underline hover:text-gray-500">Mi cuenta </a></li>
                        <li className="md:mr-6 cursor-pointer pt-4 lg:py-0"><a href="javascript:void(0)" className="focus:outline-none focus:underline hover:text-gray-500">Ayuda </a></li>
                        <li className="cursor-pointer pt-4 lg:py-0"><a href="javascript:void(0)" className="focus:outline-none focus:underline hover:text-gray-500">Politica de privacidad </a></li>
                    </ul>
                </div>
                <div className="text-sm text-color mb-10 f-f-l">
                    <p tabindex="0" className="focus:outline-none">© 2021 Comida. Todos los derechos reservados </p>
                </div>
            </div>
            <div className="w-9/12 h-0.5 bg-gray-100 rounded-full"></div>
            <div className="flex justify-between items-center pt-12">
                <a href="javascript:void(0)" className="hover:shadow-lg mr-4 focus:outline-none rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-gray-600" aria-label="download on the app store"><div className="">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_center_aligned_with_logo-svg2.svg" alt="download on the app store"/>
                </div></a>
                <button  className="hover:shadow-lg focus:outline-none rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-gray-600" aria-label="get it on google play">
                <div>
                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/simple_center_aligned_with_logo-svg3.svg" alt="get it on google play"/>                    
                </div>
                </button>
            </div>
        </div>
    </div>


     );
}
 
export default Footer;