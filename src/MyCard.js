import React from "react";
import {Card,CardBody,CardHeader,CardText,CardTitle} from "reactstrap"
import {FaEnvelope,FaPhone,FaLocationArrow} from "react-icons/fa"
 import Bigimg from "./Bigimg";

    const MyCard = ({details}) => {
    //console.log(details.picture?.large)

    return(
        <Card>
            <CardBody className="text-center">
                <img height="150" width="150"
                    className="rounded-circle img-thumbnail border-danger"
                    src={details.picture?.large} 
                    onClick={(details) => {
                        console.log(`${details.name?.titile} ****`);
                        <Bigimg details={details}/>
                        //console.log(`${details.picture?.large} may be`);
                    }}
                />
               <CardTitle>
               <h5>Hi,My name is </h5>
                    <h3 className="text-primary">
                        <span className="pr-3">{details.name?.title}</span>
                        <span>{details.name?.first}</span>
                        <span>{details.name?.last}</span>
                    </h3>
                    <p><FaEnvelope/>{details.email}</p>
                    <p><FaPhone/>{details.phone}</p>
                    <p><FaLocationArrow/>{details.location?.city}</p>
               </CardTitle>
            </CardBody>
        </Card>
    )
}
export default MyCard;