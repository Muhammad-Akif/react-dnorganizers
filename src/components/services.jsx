import Cards from './Card'
import './Card.scss';
import Sdata from './Service-img'
export const Services = () => {
  return (
    <div id='services' className='text-center'>
      <div className='container-fluid'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <div className='line'></div>
          <p style={{ color: 'red', padding: '15px', fontSize: '20px', fontWeight: 'bold' }}>
            Welcome to DN Event Management
          </p>
        </div>
        <div className='row'>
          {Sdata
            ? Sdata.map((d, i) => (
              <div key={`${d.name}-${i}`} className='col-md-4 pd'>
                {console.log(d)}
                <Cards {...d} />
              </div>
            ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
