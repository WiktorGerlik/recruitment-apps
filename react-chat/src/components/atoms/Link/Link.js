function Link(props) {
    return (
      <div>
        <a href={props.href} target="_blank" rel="noreferrer">
            {props.text}
        </a>
      </div>
    );
  }
  
  export default Link;
  