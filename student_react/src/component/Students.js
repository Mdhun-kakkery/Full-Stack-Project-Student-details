import React from 'react'
import "./Students.css"
import { useEffect,useState } from 'react'

import axios from 'axios'


function Students() {
 
    const [students, setStudents] = useState([])
    const[admissionNo,setAdmissionNo]= useState('')
    const [name, setname] = useState('')
    const [dob, setdob] = useState('')
    const [clas, setclas] = useState('')
    const [division, setdivision] = useState('')
    const [gender, setgender] = useState('')
    const [err, seterror] = useState('')


  
    useEffect(() => {
        axios.get("http://localhost:8080/getall").then((response)=>{
  
              if(response.data.length > 0){
                  var latestAddNumber =response.data[response.data.length-1].admissionNumber
                  if(latestAddNumber!=null){
                      var nextAdmissionNumber=latestAddNumber+1
                  }
                  else
                  {
                  nextAdmissionNumber = 1
                  
                  }
                  
              }
            else{
                nextAdmissionNumber=1
            }
            updateStudentsDetails(response.data)
            setAdmissionNo(nextAdmissionNumber)
      })
    }, [])
  
      const updateStudentsDetails=(data)=> {
          for (let i = 0; i < data.length; i++) {
              if(data[i].admissionNumber != null && data[i].admissionNumber < 10) {
                  let admissionNumberPrefix = "R-00"
                  data[i].admissionNumber = admissionNumberPrefix + data[i].admissionNumber.toString()
              }
              else if(data[i].admissionNumber != null && data[i].admissionNumber < 100){
                  let admissionNumberPrefix = "R-0"
                  data[i].admissionNumber = admissionNumberPrefix + data[i].admissionNumber.toString()
      
              }
              else {
                  if (data[i].admissionNumber != null) {
                      let admissionNumberPrefix = "R-"
                      data[i].admissionNumber = admissionNumberPrefix + data[i].admissionNumber.toString()
                  }
              }
        
             
          }
          SortUpdateStudentsDetails(data)
        }
        const SortUpdateStudentsDetails=(data)=> {
            data.sort(function(a, b) {
                var nameA = a.studentName.toUpperCase(); // ignore upper and lowercase
                var nameB = b.studentName.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
                return 0;
              });
              setStudents(data)
        }
   const submit=()=>{
 if(name===""||dob===""||clas===""||division===""||gender===""){ //if condtion true validate the form
    
     seterror("fill all the flied")
 }else{                                                             //else submit the form through post method
    axios.post("http://localhost:8080/set",
    { studentName:name,
    dob:dob,
    standard:clas,                             
    division:division,
	gender:gender,
    admissionNumber:admissionNo}).then((res)=>{
        setname("")
        setdob("")
        setclas("")
        setdivision("")
        setgender("")

        console.log(res.data)
    })

}
  }
  
    return (
        <div className='base'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='form col-12 col-md-6'>
                        <div className="form-box ">
                            <h1 className='title '>STUDENTS FORM</h1><br />
                            <div className='form'>
                            <form action="" >
                                <div className='form-name'>
                                    <input type="text" className='form-control'
                                        placeholder='Enter student name'
                                        required
                                        name="name"
                                        value={name}
                                        onChange={(e)=>{setname(e.target.value)}}
                                        pattern="^[A-Za-z ]*$"/>
                                </div><br />
                                <div className='birth text-center'>
                                    <label htmlFor="dob" >Date of Birth</label><br />

                                    <input type="date"
                                        className='form-control' 
                                        name="dob"
                                        value={dob}
                                        onChange={(e)=>{setdob(e.target.value)}}
                                        required 
                                       />
                                </div>

                                <br />

                                <div className='division text-center'>
                                    <label htmlFor="division">Class</label><br />
                                    <select className='form-control' 
                                        required
                                        name="clas"
                                        value={clas}
                                        onChange={(e)=>{setclas(e.target.value)}}>
                                        <option selected >--select class--</option>
                                        <option value='I' >I</option>
                                        <option value='II'>II</option>
                                        <option value='III'>III</option>
                                        <option value='IV'>IV</option>
                                        <option value='V'>V</option>
                                        <option value='V1'>V1</option>
                                        <option value='V11'>V11</option>
                                        <option value='V111'>V111</option>
                                        <option value='1X'>1X</option>
                                        <option value='X'>X</option>
                                        <option value='X11'>X11</option>
                                        <option value='X12'>X12</option>
                                        
                                    </select>
                                </div><br />


                                <div className='division text-center'>
                                    <label htmlFor="division">Division</label><br />
                                    <select className='form-control'
                                     required
                                     name="division"
                                     value={division}
                                     onChange={(e)=>{setdivision(e.target.value)}}
                                     >
                                        <option value="slect">--Select Division--</option>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="C">C</option>
                                        <option value="D">D</option>
                                    </select>

                                </div><br />                             
                                
                                <div className='gender text-center'>
                                    <label htmlFor="gender">Gender :</label><br />


                                    <input  type="radio" name="gender" value="male" required
                                    onChange={(e)=>{setgender(e.target.value)}} /> male <br />

                                   <div  className='radio text-center' >
                                        <input type="radio" name="gender" value="female" required
                                         onChange={(e)=>{setgender(e.target.value)}} /> female
                                   </div> 
                                </div>
                                <br />

                                <p className='validate' name="errr" >{err}</p>
                                <div className='submit'>
                                    <button className='btn btn-success ' onClick={submit}>submit</button>
                                </div>
                            </form>
                            </div>
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>

                {/* table section */}

                <div className="form col-12 col-md-6">
                    <div className="table-box ">
                        <h1 className='title '>STUDENTS DETAILS</h1><br />

                        <table class="table">
                            <thead class="table-dark">
                            <th>Add_No</th>
                             <th>Name</th>
                             <th>DOB</th>
                             <th>Standard</th>
                             <th>Division</th>
                             <th>Gender</th>
                                
                            </thead>
                            <tbody className="table-dark">
                            {
                                students.map(student=>
                                    <tr>
                                <td> {student.admissionNumber}</td>
                                <td>{student.studentName}</td>
                                <td >{student.dob}</td>
                                <td>{student.standard}</td>
                                <td>{student.division}</td>
                                <td>{student.gender}</td>
                                </tr>
                                    )
                            }
                                
                            </tbody>
                        </table>
                    </div>
                </div>

                </div>

            </div>
        </div>

    )
}

export default Students
