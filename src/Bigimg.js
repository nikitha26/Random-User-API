 import React from "react";
 import {Card,CardBody,CardHeader,CardText,CardTitle} from "reactstrap"

const Bigimg = (details)=>{
    console.log(`${details} ***`)
    return(
        <Card>
            <CardBody>
                <CardHeader>
                    <h2>HI {details.name?.title}</h2>
                    {/* <img height="300" width="300" 
                    src={details.picture?.large}/> */}
                </CardHeader>
            </CardBody>
        </Card>
    )
}
 export default Bigimg;