import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Editform = () =>{
    const [formdata, setFormdata] = useState({
        'name' : '',
        'rollno' : '',
        'college' : '',
        'branch' : ''
        })
        const {id} = useParams()
        //console.log(id)
        useEffect(()=>{
            axios.get('http://localhost:5000/getstudentbyid/'+id)
            .then((res)=>{
                console.log(res.data)
                setFormdata(res.data.studentdata)
            })
            .catch((err)=>console.log(err))
        },[])
        const handlesubmit = (e) =>{
            e.preventDefault();
            console.log(formdata)
            axios.put('http://localhost:5000/updatestudent/'+id,formdata).then((result)=>{alert("result.data.msg")})
        }
        return(
            <div>
                <h1>Form</h1>
                <form onSubmit={handlesubmit}>
                    <label> Name</label>
                    <input 
                    type="text"
                     name="name"
                     value={formdata.name}
                      onChange={(e) =>setFormdata({...formdata,name:e.target.value})}/>
                      <br/>
                      <label>Roll Number</label>
                      <input
                            type="text"
                            name="rollno"
                            value={formdata.rollno}
                            onChange={(e) =>setFormdata({...formdata,rollno:e.target.value})}/>
                         <br/>
                      <label>College</label>
                      <input
                            type="text"
                            name="college"
                            value={formdata.college}
                            onChange={(e) =>setFormdata({...formdata,college:e.target.value})}/>
                    <br/>
                    <label>Branch</label>
                      <input
                            type="text"
                            name="branch"
                            value={formdata.branch}
                            onChange={(e) =>setFormdata({...formdata,branch:e.target.value})}/>
                        <br/>
                    <input type="submit" value="update"/>
                </form>
            </div>
        )
}
export default Editform