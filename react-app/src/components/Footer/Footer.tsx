import './Footer.scss';
import DisplayPhoto from '../../images/displayPhoto.jpg'
import { useState } from 'react';

export default function Footer() {
  const [flipCard, setFlipCard] = useState('');

  function cardFlipper() {
    if (flipCard) {
      setFlipCard('');
    } else {
      setFlipCard('flipCard')
    }
  }

  return (
    <footer id="about-me">
      <div className="profile-container">
        <div className={`profile ${flipCard}`}>
          <div className='profile__front'>
            <img 
              src={DisplayPhoto}
              alt="display photo"
            />
            <p>~ I don't know, I just got here </p>
          </div>
          <div className='profile__back'>
            <p>webster.zw@gmail.com</p>
          </div> 
        </div>
        <button className='flip-card-btn' onClick={() => cardFlipper()}><i className="fa-solid fa-repeat fa-rotate-270"></i></button>
      </div>
    </footer>

  )
}

