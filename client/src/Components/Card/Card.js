import React, { useMemo, useState } from 'react';
import '../Home/Home.css';
import { Image } from '../Home/ImageDescription';
import { FaRupeeSign } from 'react-icons/fa';
import ImageDetails from '../ImageDetails/ImageDetails';

function Card({category,addToCart}){
  const [showImageDetails,setShowImageDetails] = useState(null);
  const filterImage = useMemo(()=>{
    return Image.filter(img=>img.category===category);
  },[category])

  
 const handleShowImage = (img) => {
    setShowImageDetails(img);
  }
 const handleBack = () => {
    setShowImageDetails(null);
  }
  
  return (
    <>{showImageDetails
    ?(
        <ImageDetails image={showImageDetails} back={handleBack} addToCart={addToCart}/>
    )
   :
   (
     <div className='card-box'>
          {filterImage.map((img)=>(
            <figure className="card-content" key={img.id} onClick={()=>handleShowImage(img)}>
                <img src={img.src} alt={img.alt} />
                <figcaption>{img.details.type}</figcaption>
                 <p><FaRupeeSign/>{img.price}</p>
              </figure>
           ))}
          </div>
    )
      }
    </>
  )
}

export default Card;
