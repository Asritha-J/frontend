// //updating the form after click update button
// const handleSubmit = (event) => {
//     event.preventDefault();
//     const api = 'http://localhost:5000/api/edit-user/'+edit_userid
//         axios.put(api,formdata).then((response) => {
//             console.log(response.data)
//             if(response.data.users){
//               alert("Updated successfully.")
//               window.location.href='/usersdata';
//             }          
//         });
//   }