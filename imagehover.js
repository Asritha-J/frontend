import mountains from './mountains.jpg'
const Imagehover = () => {
    const handleImage= (e) =>{
        console.log("overed")
        e.target.style.height = '400px'
        e.target.style.width = '300px'

    }
    return(
        <div>
            <h1>This is component D</h1>
            <img src={mountains} alt= '' onMouseOver={handleImage} ></img>
        </div>
    )
}
export default Imagehover;