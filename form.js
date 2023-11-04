import { useState } from "react";
import axios from 'axios';
const Form = () => {
    const [formdata, setFormdata] = useState({
        'username':'',
        'email':'',
        'password':'',
        'branch':''
    })//const formdata={'fname':'','lname':''}
    //console.log(formdata)
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formdata)
        axios.post('http://localhost:5000/addDetails',{formdata})
        // .then(result)=>{
        //     alert("success")
        // }
    .then((res)=>console.log(res.data))
    }
    let backend_api="http://localhost:5000/addstudent"
    const handlesubmit=(e)=>{
        const inputfileds=new FormData();
        inputfileds.append('myfile',formdata.profilePic,formdata.profilePic.name)
        inputfileds.append('name',formdata.username)
        inputfileds.append('email',formdata.email)
        inputfileds.append('college',formdata.password)
        inputfileds.append('branch',formdata.branch)
        e.preventDefault();
        console.log(inputfileds)
        axios.post(backend_api,inputfileds).then((res)=>{
            console.log(res.body)
       })
    }

 return(
    <div>
        <h1>Registration Form</h1>
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" name="username" onChange={(e) => setFormdata({...formdata,username:e.target.value})}/>
            <br/>
            <label>Email</label>
            <input type="email" name="email" onChange={(e) => setFormdata({...formdata,email:e.target.value})}/>
            <br/>
            <label>Password</label>
            <input type="password" name="password" onChange={(e) => setFormdata({...formdata,password:e.target.value})}/>
            <br/>
              <label>Branch</label> 
            <input type="branch" name="branch" onChange={(e) => setFormdata({...formdata,branch:e.target.value})}/> 
            {/* <br/>
            <input type="submit" value="submit"/> */}
            <br/>
            <label>upload</label>
            <input type="file" name="myfile" onChange={(e)=>setFormdata({...formdata,profilePic:e.target.files[0]})}></input>
             <br/>
            <input type="submit" value="submit"/>
        </form>
    </div>
)
}
export default Form;