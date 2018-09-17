import React from 'react';
import SliderController from './controller';
import SlidersContent from './sliders';
import './styleSlider.scss';

const data = [
  { title: 'historia', content: 'El Grimm’s Kindergarten fue fundado en 1975 por Antonio José Garavito Durán (Director Administrativo) y Dora Ujfalussy de Garavito (Directora General)...' },
  { title: 'misión', content: 'Formar niños alegres en un ambiente afectuoso, inculcando en ellos valores y la fe católica, a la vez que desarrollan habilidades y destrezas que le permiten un crecimiento armonioso...' },
  { title: 'visión', content: 'Mantener la calidad alcanzada en la presentación del servicio educativo ofrecido, aplicando innovaciones que enriquezcan cada vez más nuestra propuesta educativa y que benefician el desarrollo integral de nuestros niños.' },
  { title: 'características', content: "El Grimm's KinderGarden adopta un MODELO PEDAGÓGICO INTEGRAL. No nos hemos matriculado en una sola vertiente de la educación, abordamos la educación de nuestros niños desde la multidimensionalidad..." }
];

const CoverSlider = () => (
    <aside className='Slider-container'>
      <SlidersContent data={data} />
      <SliderController pags={data.length} />
    </aside>
  );

export default CoverSlider;
