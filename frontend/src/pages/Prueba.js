import Carousel from '../components/Carousel.js'; 
import planner1 from '../image/PLANEADOR.jpg';
import planner2 from '../image/PLANEADOR3.jpg';
import planner3 from '../image/PLANEADOR2.jpg';
import card from '../components/cardIma.js'
import CardImagen from '../components/cardIma.js';


export default function Prueba() {
  const slides = [CardImagen];
  return (
    <main className='Prueba'>
      <div className='max-w-lg ml-[30%] py-[12%]'>
      <Carousel autoSlide={true} autoSlideInterval={10000}>
      {slides.map((s)=>(
          <CardImagen 
          imagen={planner1}
          nombre='Ana'
          descripcion='Experta en boda en la playa'
          />
        ))}
      </Carousel>
      </div>
    
  </main>
  )
}
