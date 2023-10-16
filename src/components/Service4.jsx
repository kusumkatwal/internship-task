import './Service.css';
function  Service4(props)
 {
    const{title,description1,description2,photo,icon} = props.data || {};

    return (
      <div className='service-card' style={{flexDirection:'row-reverse'}} >
        <div className='card-image'>
          <img src={icon}
          alt='yellow'/>
        </div>
        <div className='card-details'>
          <div className='card-icon'>
            <img src={photo}
            alt='icon'/>
          </div>
          <div className='card-title'>
            <h3>{title}</h3>
          </div>
          <div className='card-desc'>
            <p className='text'>{description1}</p>
          </div>
          <div className='card-description'>
            <p className='text-long'>{description2}</p>
          </div>
        </div>
      </div>
    );
  };

  export default Service4;