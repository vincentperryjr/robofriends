import React from 'react';

const Card = ( {name, email, id} ) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow ba bw2 shadow-5">
      <img src={'https://robohash.org/' + id + '?set=set4&size=300x300'} alt="robots"/>
      <div className='tc'>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
