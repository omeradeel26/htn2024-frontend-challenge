const Text = {
  baseStyle: {
    fontWeight: 500,
    margin: 0,
    fontSize: "md",
    color: "#FFF",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    title: {
      fontSize: "5xl",
      fontWeight: 800
    },
    header: {
        fontSize: "4xl",
        fontWeight: 800
    },
    eventTitle: {
        fontSize: "3xl",
        color: "#000"
    }, 
    eventDescr: {
        color: "#000"
    },
    date: {
      color: "black",
      fontSize: 'md'
    },
    eventSubPage: {
      color: "black",
      fontSize: 'md'
    },
    eventSubPageHeader: {
      fontSize: '3xl',
      color: 'black',
      
    },

    eventSubPageDate: {
      fontSize: 'lg',
      color: 'black',
      
    }
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {},
};

export default Text;
