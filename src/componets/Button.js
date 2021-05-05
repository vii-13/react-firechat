const Button = ({ onClick = null, children = null }) => (
  <button className="sign-in" onClick={onClick}>
    {children}{" "}
  </button>
);
export default Button;
