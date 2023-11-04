function Click(){
    const handleClick = () => {
        alert("clicked")
    }
    const handleClick2 = (name) => {
        alert("name")
    }
    const handleInput = (e) => {
        console.log(e.target.value)
    }

    return(
        <div>
            React Events
            <button onMouseOver={handleClick}>Click button</button>
            <br/>
            <button onClick={handleClick}>Click button</button>
            <br/>
            <input type="text" name="asritha" onChange={handleInput}/>
        </div>
    )
}
export default Click;