// import { BsSearch } from 'react-icons/bs'
import {
  FaSquareFacebook,
  FaLinkedin,
  FaSquareXTwitter,
  FaInstagram,
  FaGithub,
  FaSquareYoutube,
} from 'react-icons/fa6'
import logo from '../../assets/icons/logo.png'
import './footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <section className='py-4 '>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <img src={logo} alt='' className='footerLogo' />
            </div>
            <div className='col-7'>
              <p className='newlettericon'>
                <i className='fa-solid fa-envelope'></i> Sign up for Newsletter
              </p>
              <div className='input-group'>
                <input
                  type='text'
                  className='form-control py-1'
                  placeholder='Your Email Address'
                  aria-describedby='basic-addons2'
                />
                <span className='input-group-text p-2' id='basic-addon2'>
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-4'>
        <div className='container-xxl'>
          <div className='row footerContent'>
            <div className='col-3 footerSect'>
              <h4 className='text-white mb-3'>Contact Us</h4>
              <div className='footer-link d-flex flex-column footerList'>
                <Link to={'tel:06061632276'}>08061632276</Link>
                <Link to={'mailto:ndubest56@gmail.com'}>ndubest56@gmail.com</Link>
                <address className='fs-6'>5 Aku Road Nsukka Enugu, Nigeria</address>
                <div className='socialIcons'>
                  <Link to={'https://facebook.com'}>
                    <FaSquareFacebook />
                  </Link>
                  <Link to={'https://facebook.com'}>
                    <FaLinkedin />
                  </Link>
                  <Link to={'https://facebook.com'}>
                    <FaInstagram />
                  </Link>
                  <Link to={'https://facebook.com'}>
                    <FaGithub />
                  </Link>
                  <Link to={'https://facebook.com'}>
                    <FaSquareYoutube />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-3 footerSect'>
              <h4 className='text-white mb-3'>Information</h4>
              <div className='footer-link d-flex flex-column footerList'>
                <Link>Privacy Policy</Link>
                <Link>Shipping Policy</Link>
                <Link>Refund Policy</Link>
                <Link>Terms & conditions</Link>
                <Link>Blogs</Link>
              </div>
            </div>
            <div className='col-3 footerSect'>
              <h4 className='text-white mb-3'>Pages</h4>
              <div className='footer-link d-flex flex-column footerList'>
                <Link>Privacy Policy</Link>
                <Link>Shipping Policy</Link>
                <Link>Refund Policy</Link>
                <Link>Terms & conditions</Link>
                <Link>Blogs</Link>
              </div>
            </div>
            <div className='col-3 footerSect'>
              <h4 className='text-white mb-3'>Information</h4>
              <div className='footer-link d-flex flex-column footerList'>
                <Link>Privacy Policy</Link>
                <Link>Shipping Policy</Link>
                <Link>Refund Policy</Link>
                <Link>Terms & conditions</Link>
                <Link>Blogs</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='footersect py-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12 text-center mb-0 footerLast'>
              <p className='p-2 m-0'>@ {new Date().getFullYear()} Powered by More-Links Tech</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
