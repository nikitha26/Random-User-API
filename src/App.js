import React, {useEffect, useState } from 'react';

// import Reducer from './Reducer';
//import UseEffect from './UseEffect';

import {Container,Row,Col,Button} from "reactstrap";
import Axios from "axios";
import "./App.css"
import MyCard from './MyCard';


function App() {
  const[details , setDetails] = useState([]);
  const[response , setResponse] = useState({});


  const fetchdata = async () =>{
    const response = await Axios.get('https://randomuser.me/api/')
    const response1 = response.data
    const details = response1.results[0];

    setResponse(response)
    setDetails(details)
     
    // if(response.status == 200)
    // {
    //   //console.log("Success")
    //   return(                   //Here is the problem
    //       //<MyCard details={details}/>   
    //   )
    // }
    // else{
    //   return(
    //       <h4>Error</h4>
    //   )
    // }
  }
  
  useEffect(() => {
     fetchdata();
    
  },[])

  return(
     <Container fluid className="p-4  App">
       <Row>
           <Col md={12} className=" offset-md-12 ">
           <h2 className="text-center">RANDOM USER API</h2>
          <h6 className="text-center">This webpage is to call <span className="span">Random User Data</span>.</h6>
           </Col>
       </Row>  
       <Row>
         <Col md={4} className="offset-md-4 ">
            {/* <FetchData/> */}
            <MyCard details={details}/>  
          </Col>
       </Row>
       <Row>
         <Col md={5} className="offset-md-5 mt-3">
             <button className="btn ml-2" onClick={fetchdata}>Get New User</button>
         </Col>
       </Row>  
     </Container>
  )
}



export default App;
