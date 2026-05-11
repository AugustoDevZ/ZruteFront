import './ButtonCommon.css'


const ButtonCommon = ({text, action}) => {
  return (
    <a to="#" onClick={ action } className='custom-button' >
      
      <span  >{text}</span>
    </a>
  )
}
export default ButtonCommon