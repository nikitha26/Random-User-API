import React, {useEffect, useState } from 'react';

// import Reducer from './Reducer';
//import UseEffect from './UseEffect';

import {Container,Row,Col} from "reactstrap";
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
     <Container fluid className="p-4 bg-primary App">
       <Row>
         <Col md={4} className="offset-md-4 mt-4">
         <h4 className="text-center">Handle API</h4>
            {/* <FetchData/> */}
            <MyCard details={details}/>  
          </Col>
       </Row>
     </Container>
  )
}



export default App;
