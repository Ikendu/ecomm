import './footer.css'
export default function Footer() {
  return (
    <footer>
      <section></section>
      <section></section>
      <section>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12 text-center mb-0'>
              <p>@ {new Date().getFullYear()} Powered by More-Links Tech</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  )
}
