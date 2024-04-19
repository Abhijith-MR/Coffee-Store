import React from 'react';
import Image from 'next/image';
import logo from '../Assets/logo.png';
import '../Styles/Header.css';

export default function Header() {
    return (
        <div className='Main'>

            <div className="Left_Nav">
                <a><Image className='Nav_Logo' src={logo} /></a>
                <div className='Logo_Title'>Coffetto</div>
            </div>

            <div className="Right_Nav">
                <a><li>Home</li></a>
                <a><li>About</li></a>
                <a><li>Steps</li></a>
                <a><li>Testimonial</li></a>

            </div>

        </div>
    );
}
