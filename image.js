import userimage from './user.jpg'
import boyimg from './boy.jpg'
const Image = () => {
    return(
        <div>
             <h1>Image</h1>
             <img src={userimage} style={{width:"200px",height:"200px"}}alt=''/>
             {/* <br></br> */}
             <img src={boyimg}style={{width:"200px",height:"200px"}}alt=''/>

        </div>
    )
}


 export default Image;


// 2nd way of importing image
// import userimage from'./user.jpg'
// function Image(){
//     return(
//         <div>
//             <img src={userimage}></img>
//         </div>
//     )
// }
// export default Image;