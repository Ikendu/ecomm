import { Link } from 'react-router-dom'
import { LiaGiftSolid, LiaShippingFastSolid, LiaMoneyCheckAltSolid } from 'react-icons/lia'
import { RiCustomerService2Fill, RiMoneyPoundBoxLine } from 'react-icons/ri'

import banner from '../../assets/img/smiles1.webp'
import headphone from '../../assets/img/headphone.jpg'
import laptop from '../../assets/img/laptop.jpg'
import phone from '../../assets/img/phone.jpg'
import home from '../../assets/img/home.jpg'

import './home.css'

export default function Home() {
  return (
    <>
      <section className='home-wrapper-1 py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative p-3'>
                <img src={banner} alt='Lady smiling with set' className='img-fluid rounded-3' />

                <div className='main-banner-content position-absolute'>
                  <h4>Super Charged for Pros</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>From $200</p>
                  <Link to={'#'} className='button'>
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex align-items-center flex-wrap justify-content-center'>
                <div className='small-banner position-relative p-3'>
                  <img
                    src={laptop}
                    alt='Lady smiling with set'
                    className='img-fluid rounded-3 banner-items'
                  />

                  <div className='small-banner-content position-absolute'>
                    <h4>Super Charged for Pros</h4>
                    <h5>iPad S13+ Pro</h5>
                    <p>From $200</p>
                  </div>
                </div>
                <div className='small-banner position-relative p-3'>
                  <img
                    src={phone}
                    alt='Lady smiling with set'
                    className='img-fluid rounded-3 banner-items'
                  />

                  <div className='small-banner-content position-absolute'>
                    <h4>Super Charged for Pros</h4>
                    <h5>iPad S13+ Pro</h5>
                    <p>From $200</p>
                  </div>
                </div>
                <div className='small-banner position-relative p-3'>
                  <img
                    src={headphone}
                    alt='Lady smiling with set'
                    className='img-fluid rounded-3 banner-items'
                  />

                  <div className='small-banner-content position-absolute'>
                    <h4>Super Charged for Pros</h4>
                    <h5>iPad S13+ Pro</h5>
                    <p>From $200</p>
                  </div>
                </div>
                <div className='small-banner position-relative p-3'>
                  <img
                    src={home}
                    alt='Lady smiling with set'
                    className='img-fluid rounded-3 banner-items'
                  />

                  <div className='small-banner-content position-absolute'>
                    <h4>Super Charged for Pros</h4>
                    <h5>iPad S13+ Pro</h5>
                    <p>From $200</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex justify-content-between align-items-center'>
                <div className='service'>
                  <div className='service-icon'>
                    <LiaGiftSolid />
                  </div>

                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div className='service'>
                  <div className='service-icon'>
                    <LiaShippingFastSolid />
                  </div>

                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div className='service'>
                  <div className='service-icon'>
                    <LiaMoneyCheckAltSolid />
                  </div>
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div className='service'>
                  <div className='service-icon'>
                    <RiCustomerService2Fill />
                  </div>
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
                <div className='service'>
                  <div className='service-icon'>
                    <RiMoneyPoundBoxLine />
                  </div>
                  <div>
                    <h6></h6>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
