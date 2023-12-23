import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fashion1 from "../fashion1.webp"
import fashion3 from "../fashion3.webp"
import fashion4 from "../fashion4.webp"
import fashion5 from "../fashion5.webp"
import fashion6 from "../fashion6.webp"
import fashion7 from "../fashion7.webp"
import "./main.css"

export default function Main() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div>
      <div className='main'>
        <h1>THE FUTURE IS SCOOT</h1>
        <h4>SCOOT ZEROS GEORGIA PEACH</h4>
        <button>SHOP NOW</button>
      </div>
      <div className='main-1'>
        <h1>UP TO 65% OFF</h1>
        <h4>+ EXTRA 20% OFF WITH CODE: SAVE20</h4>
        <h6>LIMITED TIME ONLY. EXCLUSIONS APPLY</h6>
        <button>SHOP NOW</button>
      </div>
      <div className='main-1 feature-3'>
        <h1>FOREVER. FESTIVE.</h1>
        <h4>GET LAST-MINUTE GIFTS</h4>
        <div className='gifts'>
          <button>GIFTS FOR HIM</button>
          <button>GIFTS FOR HER</button>
          <button>GIFTS FOR KIDS</button>
        </div>
      </div>
      <div class="d-flex flex-row mb-2">
        <div class="p-2 main-4 feature-4">
          <h1>E-GIFT CARDS</h1>
          <h6>$20 FOR YOU - WHEN YOU <br></br> BUY A $100 E-GIFT CARD </h6>
        </div>
        <div class="p-2 main-4 feature-5">
          <h1>STOCKING STUFFERS</h1>
        </div>
      </div>
      <div className='text'>
        <h4>COOL COLLABS FOR KIDS</h4>
        <h6>BIG PARTNERSHIPS, LITTLE LOOKS</h6>
      </div>
      <div class="d-flex flex-row mb-4">
        <div class="p-2 kids1 kids extra"><h4>PUMA X L.O.L SURPRISE</h4></div>
        <div class="p-2 kids2 kids">
          <h4>PUMA X PAW PETROL</h4>
        </div>
        <div class="p-2 kids3 kids"><h4>PUMA X SPONGEBOB</h4></div>
        <div class="p-2 kids4 kids"><h4>PUMA X SMURFSS</h4></div>
      </div>
      <div className='text'>
        <h4>STEP UP YOUR SHOE GAME</h4>
        <h6>MUST -HAVE FOOTWEAR</h6>
      </div>
      <div class="d-flex flex-row mb-2">
        <div class="p-2 main-4 feature-6 feature-4">
          <h1>MEN'S SHOES</h1>
    
        </div>
        <div class="p-2 main-4 feature-7 feature-5">
          <h1>WOMEN'S SHOES</h1>
        </div>
      </div>
      <div className='text'>
        <h4>THE PROPER ATTIRE</h4>
        <h6>FIND WINTER ESSENTIALS</h6>
      </div>
      <div class="d-flex flex-row mb-4">
        <div class="p-2 kids1 kids mature1"><h4>FLEECE</h4></div>
        <div class="p-2 kids2 kids mature2">
          <h4>COLD WEATHER</h4>
        </div>
        <div class="p-2 kids3 kids mature3"><h4>BOOTS+MIDS</h4></div>
        <div class="p-2 kids4 kids mature4"><h4>BEANIES</h4></div>
      </div>
      <div className='text text-1'>
        <h6>WINTER FITS</h6>
      </div>
      <div className="carousel-container">
      <Slider {...settings}>
      <div className='fashion1 fashion'>
          <h3>VIEW DETAILS</h3>
        </div>
        <div className='fashion2 fashion'>
          <h3>VIEW DETAILS</h3>
        </div>
        <div className='fashion3 fashion'>
          <h3>VIEW DETAILS</h3>
        </div>
        <div className='fashion4 fashion'>
          <h3>VIEW DETAILS</h3>
        </div>
      <div className='fashion5 fashion'>
        <h3>VIEW DETAILS</h3>
        </div>
        <div>
          <div className='fashion6 fashion'>
          <h3>VIEW DETAILS</h3>
          </div>
        </div>
      </Slider>
    </div>
    <div className='main-1 before'>
        <h1>25 DAYS OF PUMA</h1>
        <h4>DOWNLOAD THE APP NOW FOR 
          <br/>
          EXCITING DROPS, HOLIDAY DEALS, 
          <br/>
          AND A
          <b>SURPRISE ON DAY 25.</b> 
        </h4>
        <button>DOWNLOAD THE APP</button>
      </div>
      <div className='text'>
        <h4>SO MANY WAYS TO SHOP</h4>
        <h6>BIG PARTNERSHIPS, LITTLE LOOKS</h6>
      </div>
      <div class="d-flex flex-row mb-4 ">
        <div class="p-2 kids1 kids mature1 next-row"><h4>NEXT BUSINESS DAY<br/> HOLIDAY SHIPPING</h4></div>
        <div class="p-2 kids2 kids mature2 email">
          <h4>EMAIL SIGN-UP & GET X-MAS GIFT</h4>
        </div>
        <div class="p-2 kids3 kids mature3"><h4>DOWNLOAD PUMA APP</h4></div>
        <div class="p-2 kids4 kids mature4"><h4>E-GIFTS</h4></div>
      </div>
      <div className='button'>
        <h6>GET 20% OFF</h6>
      </div>
      <footer>
        <h5>PUMA- clone website </h5>
        <p>i just copied from puma offical website for practice purpose</p>
      </footer>
    </div>
  )
}
