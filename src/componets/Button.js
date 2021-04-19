const Button = ({
    onclick = null,
    children = null
}) => 
(
    <button onclick ={onclick} >{children} </button> 
);
export default Button;  