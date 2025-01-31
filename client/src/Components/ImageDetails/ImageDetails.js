import './ImageDetails.css';
import { IoMdArrowBack } from 'react-icons/io';
import { FaRupeeSign } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Card from '../Card/Card';

function ImageDetails({image,back,addToCart}){
  const navigate = useNavigate();
  const handleBuyNow = () => {
    addToCart(image);
    navigate('/cart');
  }

  const renderCard = () =>{
    if(image.category==='men'){
     return <Card category='men' addToCart={addToCart}/>
    }
    else if(image.category==='women'){
      return <Card category='women' addToCart={addToCart}/>
    }
    else if(image.category==='kids'){
      return <Card category='kids' addToCart={addToCart}/>
    }
  }
    return(
      <>
       
      <p onClick={back}><IoMdArrowBack/></p>
      <div className='image-details'>
        <div className="image-details1">
          <div className='image-img'>
          <img src={image.src} alt={image.alt} />
          </div>
          <div className='image-btn'>
            <p className='image-type'>{image.details.type}</p>
            <button className='img-btn1' onClick={handleBuyNow}>Buy Now</button>
         </div>
        </div>
        <div className="image-details2">
          {/* {image.details.size} */}
          <p><strong>{image.details.name2}</strong></p>
          <p className='rupees'><FaRupeeSign />{image.price}</p>
           <h3>Product Details</h3>
          <table>
            <tbody>
              <tr><th>Type:</th><td>{image.details.type}</td></tr>
              <tr><th>Fabric:</th><td>{image.details.fabric}</td></tr>
              <tr><th>Occasion type:</th><td>{image.details.occasion_type}</td></tr>
              <tr><th>Color:</th><td>{image.details.color}</td></tr>
              <tr><th>Net Quantity:</th><td>{image.details.quantity}</td></tr>
              <tr><th>Size:</th><td>{image.details.size}</td></tr>
              <tr><th>Design:</th><td>{image.details.design}</td></tr>
              <tr><th>Department:</th><td>{image.category}</td></tr>
              <tr><th>Product ID:</th><td>{image.id}</td></tr>
              <tr><th>Country of Origin:</th><td>{image.details.country}</td></tr>
            </tbody>
          </table>
          </div>
      </div>
    {renderCard()}
      </>
    )
  }

  export default ImageDetails;