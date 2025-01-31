import React, { useEffect, useMemo, useState } from 'react';
import './Home.css';
import { Image } from './ImageDescription';
import { FaRupeeSign } from 'react-icons/fa';
import ImageDetails from '../ImageDetails/ImageDetails';

function Home({addToCart}) {

  const [showImageDetails,setShowImageDetails] = useState(null);
  const handleShowImage = (img) => {
    setShowImageDetails(img)
  }
  const handleBack = () => {
    setShowImageDetails(null);
  }
  
  const imageDetails = useMemo(()=>{
    return Image.map((img)=>(
      <figure className="card-content" key={img.id} onClick={()=>handleShowImage(img)}>
          <img src={img.src} alt={img.alt} />
          <figcaption>{img.details.type}</figcaption>
          <p><FaRupeeSign />{img.price}</p>
        </figure>
     ))
    },[Image])
  return (
    <>{showImageDetails
    ?(
        <ImageDetails image={showImageDetails} back={handleBack} addToCart={addToCart}/>
    )
   :
   (
    <div>
      <div className="home-img">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-WHP-100125-TOP%20BANNER-P5.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://assets.ajio.com/cms/AJIO/WEB/D-150125-1.0-MHP-mainbanner-z1-p4-poshax-hancock-min75.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://assets.ajio.com/cms/AJIO/WEB/D-1.0-KHP-100125-DailyBanner-Z6-3-Lilpicks-Kuchipoo-Min50.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
     <div className='card-box'>
      {imageDetails}
      </div>
      </div>
    )
      }
   
    </>
  )
   
}

export default Home;

