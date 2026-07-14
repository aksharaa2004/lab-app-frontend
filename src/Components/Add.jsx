import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const Add = () => {
    const[input,changeData]=useState(
        {
            name:"",
            department:"",
            sem:"",
            course:"",
            systemnumber:"",
            logintime:"",
            logouttime:"",
            date:""
        }
    )

    const inputHandler=(event)=>{
        changeData({...input,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(input)
        axios.post("http://localhost:3000/add-login",input).then(
            (response)=>{response.data}
        ).catch()
    }

  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">name</label>
                            <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">department:</label>
                            <input type="text" className="form-control" name='department' value={input.department} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Sem:</label>
                            <input type="text" className="form-control" name='sem' value={input.sem} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">course:</label>
                            <input type="text" className="form-control" name='course' value={input.course} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">systemnumber</label>
                            <input type="text" className="form-control" name='systemnumber' value={input.systemnumber} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">logintime</label>
                            <input type="text" className="form-control" name='logintime'value={input.logintime} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">logouttime:</label>
                            <input type="text" className="form-control" name='logouttime' value={input.logouttime} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">date:</label>
                            <input type="date" className="form-control" name='date'value={input.date} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add