import "./Block.css"
function Block(props) {
    const classes = "block " + props.className;
    return <div className={classes}></div>;
  }
  export default Block;
  