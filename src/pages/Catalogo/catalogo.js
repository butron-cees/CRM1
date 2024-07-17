import React from 'react';
import gel1 from '../../img/gelish1 (convert.io).webp'
import post1 from '../../img/Postizas1 (convert.io).webp'
import gel2 from '../../img/gelish2 (convert.io).webp'
import post2 from '../../img/Postizas2 (convert.io).webp'
import gel3 from '../../img/gelish3.webp'
import post3 from '../../img/Postizas3 (convert.io).webp'
import gel4 from '../../img/Gelish4 (convert.io).webp'
import post4 from '../../img/Postizas4 (convert.io).webp'
import gel5 from '../../img/Gelish5 (convert.io).webp'
import post5 from '../../img/Postizas5 (convert.io).webp'

const Catalogo = () => {
  const decants = [
    {
      Diseño: 'Diseño simple color rosa claro',
      image: gel1,
      Precio: '$350',
      Aplicacion: 'Gelish'
    },
    {
        Diseño: 'Diseño de halloween',
        image: post1,
        Precio: '$700',
        Aplicacion: 'Postizas'
      },
      {
        Diseño: 'Diseño morado con flores',
        image: gel2,
        Precio: '$400',
        Aplicacion: 'Gelish'
      },
      {
        Diseño: 'Diseño azul mate',
        image: post2,
        Precio: '$500',
        Aplicacion: 'Postizas'
      },
      {
        Diseño: 'Diseño rojo con corazones',
        image: gel3,
        Precio: '$400',
        Aplicacion: 'Gelish'
      },
      {
        Diseño: 'Diseño de bad bunny',
        image: post3,
        Precio: '$550',
        Aplicacion: 'Postizas'
      },
      {
        Diseño: 'Diseño Simple para navidad',
        image: gel4,
        Precio: '$400',
        Aplicacion: 'Gelish'
      },
      {
        Diseño: 'Diseño para el 15 de septiembre',
        image: post4,
        Precio: '$600',
        Aplicacion: 'Postizas'
      },
      {
        Diseño: 'Diseño azul fuerte para el 4 de julio',
        image: gel5,
        Precio: '$400',
        Aplicacion: 'Gelish'
      },
      {
        Diseño: 'Diseño de los reyes magos',
        image: post5,
        Precio: '$550',
        Aplicacion: 'Postizas'
      },
    
    // Agrega más decants según sea necesario
  ];

  
  return (
    <div className="relative min-h-screen bg-cover bg-center" >
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.6] to-transparent pointer-events-none"></div>
      <div className="relative container mx-auto p-4">
      <h6>Francisco Emilio Gómez Rojas</h6>
            <h2 className='titulo'>Catálogo</h2>
            <hr className="mb-3 mx-3 border-top-2 border-bottom-1 linea" />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Diseño</th>
              <th className="py-2 px-4 border-b">Foto</th>
              <th className="py-2 px-4 border-b">Precio</th>
              <th className="py-2 px-4 border-b">Aplicacion</th>
            </tr>
          </thead>
          <tbody>
            {decants.map((decant, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4 text-center">{decant.Diseño}</td>
                <td className="py-2 px-4 flex justify-center items-center">
                  <img src={decant.image} alt={decant.Nombre} className="h-16 w-16 object-cover"/>
                </td>
                <td className="py-2 px-4">{decant.Precio}</td>
                <td className="py-2 px-4">
                <span className={`px-2 py-1 rounded ${decant.Aplicacion === 'Agotado'}`}>
                    {decant.Aplicacion}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
}

export default Catalogo;