import React, { useEffect, useState } from 'react';

// import Reducer from './Reducer';
//import UseEffect from './UseEffect';

import {Container,Row,Col} from "reactstrap";
import Axios from "axios";
import "./App.css"
import MyCard from './MyCard';
 //import Bigimg from './Bigimg';

function App() {
  const[details , setDetails] = useState({});

  const fetchdata = async () =>{
    const response = await Axios.get('https://randomuser.me/api/')
    const response1 = response.data
    const details = response1.results[0];
    //console.log(details.picture)
    setDetails(details)
  }
  useEffect(() => {
     fetchdata();
  },[])
  return(
     <Container fluid className="p-4 bg-primary App">
       <Row>
         <Col md={4} className="offset-md-4 mt-4">
           <MyCard details={details}/>
          
                   </Col>
       </Row>
     </Container>
     
  )
}

export default App;
