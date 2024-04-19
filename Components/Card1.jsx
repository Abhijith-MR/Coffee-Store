import React from 'react';
import Image from 'next/image';
import homecoffee from '../Assets/home-coffee.png';
import homecoffeetitle from '../Assets/home-coffee-title.png';
import '../Styles/Card1.css';

export default function Content() {
  return (
    <div className="Card1">
       <div className='Left_card'>
       <Image className='img' src={homecoffee} />
       </div>

       <div className='Right_card'>
           <h2 className='home_subtitle'>EXCEPTIONAL QUALITY</h2>
           <h1 className='home_title'>It's time for a <br/> good coffee <Image className='img' src={homecoffeetitle}/></h1>
           <p className='home_description'>Each select coffee bean reflects our commitment to <br/> Peruvian coffee growers, who bring the best select <br/> coffee to your table.</p>
           <a href="#" className='button'>Get Started</a>
       </div>
    </div>
  );
}
