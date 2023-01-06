
function MessagesList(props) {
    return (
      <div>
        <ul>
            {
                props.messages.map(message => {
                    return (
                        <li key={message.id}>
                            {message.message} - <strong>{message.author}</strong>
                        </li>
                    )
                })
            }
        </ul>
      </div>
    );
  }
  
  export default MessagesList;
  