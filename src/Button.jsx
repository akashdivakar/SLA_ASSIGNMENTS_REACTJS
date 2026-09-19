function Button({ color, size, children }) {
  let padding = "8px 16px";
  let fontSize = "14px";

  if (size === "small") {
    padding = "5px 10px";
    fontSize = "12px";
  } else if (size === "medium") {
    padding = "10px 20px";
    fontSize = "16px";
  } else if (size === "large") {
    padding = "15px 30px";
    fontSize = "20px";
  }

  const buttonStyle = {
    backgroundColor: color,
    color: "white",
    padding: padding,
    fontSize: fontSize,
    border: "none",
    borderRadius: "4px",
    margin: "5px",
    cursor: "pointer"
  };

  return (
    <button style={buttonStyle}>
      {children}
    </button>
  );
}

export default Button;
