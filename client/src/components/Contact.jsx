import React, { useState } from 'react'
import './Contact.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [inputValue,setInputValue] = useState({
    fname:"",
    lname:"",
    email:"",
    mobile:"",
    message:""
  })
  console.log(inputValue)

  const getValue = (e) => {
    const {name,value} = e.target
    setInputValue(() => {
      return {
        ...inputValue,
        [name]:value
      }
    })
  }

  const sentUserData =async(e)=>{
    e.preventDefault();

    const {fname,lname,email,mobile,message} = inputValue;
    console.log(fname,lname,email,mobile,message)
    if(fname == ''){
      toast.error('First Name is required')
    }else if(lname == ''){
      toast.error('Last Name is required')
    }else if(email == ''){
      toast.error('Email is required')
    }else if(!email.includes("@")){
      toast.error('Invalid Email')
    }else if(mobile == ''){
      toast.error('Mobile is required')
    }else{
      const res = await fetch("http://localhost:6002/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          fname,lname,email,mobile,message
        })
      })
      const data = await res.json();
      console.log(data)

      if(data.status == 200){
        toast.success('Your Response Submitted Successfully')
        setInputValue({
        ...inputValue,fname:"",
        lname:"",
        email:"",
        mobile:"",
        message:""})
      }
    }
  }

  return (
    <>
      <div className="container mb-3 contact">
        <h2 className='text-center'>Contact Us</h2>
        <div className='container mt-4'>
          <Form className='row mt-2'>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label> First Name </Form.Label>
              <Form.Control type="text" name='fname' value={inputValue.fname} onChange={getValue}/>
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label> Last Name </Form.Label>
              <Form.Control type="text" name='lname' value={inputValue.lname} onChange={getValue}/>
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label> Email </Form.Label>
              <Form.Control type="email" name='email' value={inputValue.email} onChange={getValue}/>
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label> Mobile </Form.Label>
              <Form.Control type="text" name='mobile' value={inputValue.mobile} onChange={getValue}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} name='message' value={inputValue.message} onChange={getValue}/>
            </Form.Group>
            <div className='d-flex justify-content-center'>
              <Button variant="primary" className='col-lg-6' type="submit" onClick={sentUserData}>
                Submit
              </Button>
            </div>
          </Form>
          <ToastContainer/>
        </div>
      </div>
    </>
  )
}

export default Contact