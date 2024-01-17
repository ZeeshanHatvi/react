import React from 'react'

import overview from '../Assets/overview.png';
import Logo from '../Assets/Logo.png';
import Vector from '../Assets/Vector.png';
import Group from '../Assets/Group.png';
import Eye from '../Assets/Eye.png';
import Re from '../Assets/Re.png';


export const Home = () => {
  return (
  <div className="Wraper">
      <div className="nav">
        <div className='logo'>
        <img src={Logo} alt="" />
        </div>
        <div>
          <p><img src={overview} alt="" /> Overview</p>
       
        </div>
        <div>
          <p><img src={Vector} alt="" /> Quotation</p>

        </div>
        <div>
          <p><img src={Group} alt="" /> Hotel</p>

        </div>
        <div>
          <p><img src={Eye} alt="" /> sight seeings</p>
        </div>
        <div>
          <p><img src={Re} alt="" /> transfer</p>
        </div>
        <div>
          <p>  <img src={overview} alt="" /> ROD</p>
        </div>
      </div>
      <div className='hotel-main'>
      <div className="hotel-1">
          <img src="" alt="" />
          <p>Hotel</p>
          <p  className='amb'>AMBASSDOR BANGKOK</p>
          <p>City</p>
          <p className='amb'>Bangkok</p>
          <button className='hbut'>Check Details</button>
          </div>
          <div className="hotel-2">
          <img src="" alt="" />
          <p>Hotel</p>
          <p  className='amb'>AMBASSDOR BANGKOK</p>
          <p>City</p>
          <p className='amb'>Bangkok</p>
          <button className='hbut'>Check Details</button>
          </div>    
          <div className="hotel-3">
          <img src="" alt="" />
          <p>Hotel</p>
          <p  className='amb'>AMBASSDOR BANGKOK</p>
          <p>City</p>
          <p className='amb'>Bangkok</p>
          <button className='hbut'>Check Details</button>
          </div>
          </div>
          <div className='hotel-main-1'>
      <div className="hotel-4">
          <img src="" alt="" />
          <p>Hotel</p>
          <p  className='amb'>AMBASSDOR BANGKOK</p>
          <p>City</p>
          <p className='amb'>Bangkok</p>
          <button className='hbut'>Check Details</button>
          </div>
          <div className="hotel-5">
          <img src="" alt="" />
          <p>Hotel</p>
          <p  className='amb'>AmBASSDOR BANGKOK</p>
          <p>City</p>
          <p className='amb'>Bangkok</p>
          <button className='hbut'>Check Details</button>
          </div>    
          <div className="hotel-6">
          <img src="" alt="" />
          <p>Hotel</p>
          <p  className='amb'>AMBASSDOR BANGKOK</p>
          <p>City</p>
          <p className='amb'>Bangkok</p>
          <button className='hbut'>Check Details</button>
          </div>
          </div>
      </div>
  );
}
export default Home
