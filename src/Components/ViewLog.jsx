import axios from 'axios'
import { useEffect, useState } from 'react'


const ViewLog = () => {

    
const[data,changeData] = useState([])

        const fetchData = () => {

            axios.get("http://localhost:3000/viewall").then(

                (response) => {

                    changeData(response.data)


                }

            ).catch()

        }

        useEffect(


            () => {


                fetchData()

            }, []

        )


  return (
    <div>

<h1 align="center">Lab Entries</h1>


<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col xl-12 col-xxl-12">

<div className="container">
    <div className="row g-3">


    {data.map(

        (value,index) => {

                return(

        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<div class="card" >
  <div class="card-body">
    <h5 class="card-title">{value.name}</h5>
    <p class="card-text">{value.department}</p>
    <p class="card-text">{value.sem}</p>
    <p class="card-text">{value.course}</p>
    <p class="card-text">{value.systemnumber}</p>
    <p class="card-text">{value.logintime}</p>
    <p class="card-text">{value.logouttime}</p>
    <p class="card-text">{value.date}</p>
 </div>
</div>


        </div>



                )

        }


    )}


    </div>
</div>


        </div>
    </div>
</div>



    </div>
  )
}

export default ViewLog