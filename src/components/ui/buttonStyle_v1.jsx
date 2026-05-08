import '../../styles/button_v1.css'


const button_v1 = ({text, action}) => {
  return (
    <a to="#" onClick={ action } className='custom-button' >
      
      <span  >{text}</span>
    </a>
  )
}
export default button_v1 