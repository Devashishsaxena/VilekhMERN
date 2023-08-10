import './manageusers.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { apiurluser } from '../apiurls';

function Manageusers() {
  
  const [ userDetails , setUserDetails ] = useState([]);

  useEffect(()=>{
   axios.get(apiurluser+"fetch").then((response)=>{
    setUserDetails(response.data);
   }).catch((error)=>{
    console.log(error);
   });
  });

  return (
    <>
    {/* About Start */}
         <div class="container-fluid bg-secondary p-0">
          <div class="row g-0">
              <div class="col-lg-12 py-6 px-5">
<h1 class="display-5 mb-4">View & Manage User Details Here!!!</h1>

<table class="table table-bordered">
<tr>
<th>#</th>
<th>Name</th>
<th>Email</th>
<th>Mobile</th>
<th>Address</th>
<th>City</th>
<th>Gender</th>
<th>Info</th>
<th>Action</th>  
</tr>  

{
  userDetails.map((row)=>(
    <tr>
    <td>{row._id}</td>
    <td>{row.name}</td>
    <td>{row.email}</td>
    <td>{row.mobile}</td>
    <td>{row.address}</td>
    <td>{row.city}</td>
    <td>{row.gender}</td>
    <td>{row.info}</td>

    { row.status==0 && <font color="green">Active</font>}

    { row.status==1 && <font color="orange">Inactive</font>}
    &nbsp;&nbsp;
    <font color="red">Delete</font>

    <td>

    </td>
    </tr>
  ))
}

</table>

              </div>
          </div>
      </div>
      {/* About End */}
     </>		
  );
}

export default Manageusers;
