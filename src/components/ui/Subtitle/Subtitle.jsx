import './Subtitle.css'


const Subtitle = ({text}) => {
  return (
    <a to="" className='custom-subtitle' >
      <div className='subtitle-point'></div>
      <span>{text}</span>
    </a>
  )
}


export default Subtitle


