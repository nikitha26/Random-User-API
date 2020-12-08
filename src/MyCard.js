import React from "react";
import {Card,CardBody,CardText,CardTitle} from "reactstrap"
import {FaEnvelope,FaPhone,FaLocationArrow} from "react-icons/fa"
const MyCard = ({details}) => {
    
    return(
        <Card>
            <CardBody className="text-center">
               <img height="150" width="150"
               className="rounded-circle img-thumbnail border-danger"
               src={details.picture?.large}/>
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