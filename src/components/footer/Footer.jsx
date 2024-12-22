import { BsSearch } from 'react-icons/bs'
import './footer.css'
export default function Footer() {
  return (
    <footer>
      <section className='py-4  '>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='d-flex'>
                <img src='' alt='' />
                <h2></h2>
              </div>
            </div>
            <div className='col-7'>
              <p>
                Sign up for Newsletter <i className='fa-solid fa-envelope'></i>
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
      <section></section>
      <section className='footersect py-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12 text-center mb-0'>
              <p className='p-2 m-0'>@ {new Date().getFullYear()} Powered by More-Links Tech</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
