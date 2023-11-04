import axios from "axios";
import React,{ useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Getdata = () => {
    let [students,datalist] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/getstudent').then((response)=>{
            datalist(response.data.studentdata)
        })
    },[])
    const Deletestu =(id)=>{
        axios.delete('http://localhost:5000/deleteuser/'+id)
        .then(res=>{console.log(res.data.msg)
            if(res.data.msg==="deleted"){
                alert("data deleted successfully")
                window.location.reload()
            }})
            .catch(err=>{console.log(err)})
    }
    return(
        <>
            <table align="center" border={1}>
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Rollno</th>
                    <th>College</th>
                    <th>Branch</th>
                    <th colSpan={2}>Action</th>
                    
                </tr>
                {students.map((ele,i,arr)=>{
                    return(
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{ele.name}</td>
                            <td>{ele.rollno}</td>
                            <td>{ele.college}</td>
                            <td>{ele.branch}</td>
                            <td><Link to={`/editform/${ele._id}`}><button>Edit</button></Link></td>
                            <td><button onClick={()=>Deletestu(ele._id)}>Delete</button></td>

                  
                        </tr>
               )
                })}
            </table>
        </>
            )
    }
    

export default Getdata;