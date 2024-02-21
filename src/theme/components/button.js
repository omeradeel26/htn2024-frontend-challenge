const Button = {
  // style object for base or default style
  baseStyle: {
    fontWeight: 500,
    margin: 0,
    padding: '20px 30px',
    width: 'fit-content'
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants:{
    nav: {
      bg: 'transparent',
      _hover: {
        fontWeight: 700
      }
    },
    calltoaction: {
      bg: "#80b192"

    },
    authButton: {
      bg: "#2e294e",
      color: 'white',
      outline: '1px solid black',
      _hover: {
        color: "red"
      }
    },
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: 'md',
  },
};

export default Button;
