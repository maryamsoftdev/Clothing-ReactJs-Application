import './button.style.scss';


const BUTTON_TYPE_CLASSES ={
google: 'google-sign-in',
inverted: 'inverted'
}


const Button = ({Children, buttonType, ...otherProps})=>{
return(

    <button 
    className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
    {...otherProps}
    >
      {Children}
    </button>
);


 };
 export default Button;