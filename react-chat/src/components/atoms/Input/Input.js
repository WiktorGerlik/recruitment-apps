function Input(props) {
    return (
        <div>
            <input
                type="text"
                value={props.value}
                onChange={props.onChange}>
            </input>
        </div>
    )
}
export default Input