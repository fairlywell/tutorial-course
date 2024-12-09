import profilePicture from './assets/profile.jpg'

function Card() {

  return(
    <div className="card">
      <img className="card-image" src={profilePicture}></img>
      <h2 className='card-title'>Bro Code</h2>
      <p className='card-text'>I make Youtube videos and play video games</p>
    </div>
  );
}

export default Card