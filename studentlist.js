import Person from "./person";
function Studentlist(){
    const obj = [
        {
            name:'Asritha',
            roll:11
        },
        {
            name:'arshi',
            roll:12
        },
        {
            name:'saritha',
            roll:23
        }
    ]
    return(
        <center>
        <table border={1}>
            <tr>
                <td>name</td>
                <td>roll</td>
            </tr>
        
        <>
        {
            obj.map((ele)=>{
                // return (<p>{ele.name} {ele.roll}</p>)
                return(
                    <Person name={ele.name} roll={ele.roll} />
                )
            })
        }
        </>
</table>
</center>
    )
}
export default Studentlist;