import './Footer.css';
import DisplayPhoto from '../../images/displayPhoto.jpg'

export default function Footer() {
  return (
    <footer id="about-me">
    <div className="profile">
      <img 
        src={DisplayPhoto}
        alt="display photo"
      />
      <p>~ I don't know, I just got here </p>
    </div>
  </footer>

  )
}