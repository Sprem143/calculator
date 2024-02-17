 export default function Navbar(){
    return(
        <div className="navbar dfjcac">
            <h2>Advance Calculator</h2>
            
        </div>
    )
 }



// import React, { useState } from "react";
// import { Button, Container, Row, Col, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function Navbar(){
//   const [input, setInput] = useState("");
//   const [result, setResult] = useState("");

//   const handleButtonClick = (value) => {
//     setInput((prevInput) => prevInput + value);
//   };

//   const handleClear = () => {
//     setInput("");
//     setResult("");
//   };

//   const handleCalculate = () => {
//     try {
//       setResult(eval(input).toString());
//     } catch (error) {
//       setResult("Error");
//     }
//   };

//   return (
//     <Container className="mt-5">
//       <Row>
//         <Col md={{ span: 6, offset: 3 }}>
//           <Form>
//             <Form.Group controlId="formCalculatorInput">
//               <Form.Control
//                 type="text"
//                 placeholder="0"
//                 value={input}
//                 readOnly
//                 className="text-right"
//               />
//             </Form.Group>
//           </Form>
//         </Col>
//       </Row>
       
//       <Row className="mt-3">
//         <Col md={{ span: 6, offset: 3 }}>
//           <Form>
//             <Form.Group controlId="formCalculatorResult">
//               <Form.Control
//                 type="text"
//                 placeholder="Result"
//                 value={result}
//                 readOnly
//                 className="text-right"
//               />
//             </Form.Group>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

