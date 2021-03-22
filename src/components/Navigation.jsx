export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top content'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed '
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            {/* <span><img src={logo} alt='logo'/></span> */}
            DN Organizers  
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse ful'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about'>
                About
              </a>
            </li>
            <li>
              <a href='#services'>
                Services
              </a>
            </li>
            <li>
              <a href='#portfolio'>
                Gallery
              </a>
            </li>
            <li>
              <a href='#team'>
                Team
              </a>
            </li>
            <li>
              <a href='#contact'>
                Contact
              </a>
            </li>
            <li>
              <a href='#contact'>
                Signup
              </a>
            </li>
            <li>
              <a href='#contact'>
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
