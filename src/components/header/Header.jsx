import './header.css'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

import compIcon from '../../assets/icons/swap.png'
import favorIcon from '../../assets/icons/love.svg'
import userIcon from '../../assets/icons/users.svg'
import cartIcon from '../../assets/icons/cart.svg'
import logo from '../../assets/icons/logo.png'

const links = [
  { id: 1, name: 'Compare', name1: 'Products', icon: compIcon },
  { id: 2, name: 'Favourite', name1: 'WishList', icon: favorIcon },
  { id: 3, name: 'Login', name1: 'My Account', icon: userIcon },
]

export default function Header() {
  return (
    <>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6 '>
              <p>Free shipping for over $100 purchase</p>
            </div>
            <div className='col-6'>
              <p className='text-end'>
                Hotline: <a href='+23480616322766'>+234 8061 632276</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <section className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <img src={logo} alt='' className='logoImage' />
            </div>
            <div className='col-5'>
              <div className='input-group mb-3 '>
                <input
                  type='text'
                  className='form-control py-2'
                  placeholder='Search products here...'
                  aria-label='Search products here...'
                  aria-describedby='basic-addon2'
                />
                <span className='input-group-text p-3 fs-6' id='basic-addon2'>
                  <BsSearch />
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-links'>
                {links.map((link, idx) => (
                  <div key={idx}>
                    <Link className='maplinks'>
                      <img src={link.icon} className='right-links' />
                      <p>
                        {link.name} <br /> {link.name1}
                      </p>
                    </Link>
                  </div>
                ))}
                <div>
                  <Link className='cartIcon'>
                    <img src={cartIcon} className='right-links cart' />
                    <div className='counter'>
                      <span className='badge bg-white text-dark'>{'0'}</span> <p>{'$0.00'}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='header-bottom py-3'>
        <div className='row'>
          <div className='col-12'>
            <div className='menu-bottom d-flex align-items-center'>
              <div>
                <div className='dropdown'>
                  <button
                    className='btn btn-secondary dropdown-toggle'
                    type='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Dropdown button
                  </button>
                  <ul className='dropdown-menu'>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Action
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='menu-links'>
                <Link to={'/'}>Home</Link>
                <Link to={'/'}>Our Store</Link>
                <Link to={'/'}>Blogs</Link>
                <Link to={'/contact'}>Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
