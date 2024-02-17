import { useEffect, useState } from "react"
import Navbar from "./Navbar";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
export default function App(){
  const [value, setValue]= useState(1);
  const[updatedValue, setUpdatedValue]= useState("null")
// ----------Form data_---------------------
  const [validated, setValidated] = useState(false);
  const [expression,setExpression]=useState("")
  const handleSubmit =async (event) => {
    event.preventDefault();
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    // setValidated(true);
    let v= await fetch('http://localhost:5000/getValue',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({expression}),
  });
  v= await v.json();
  setUpdatedValue(v.updatedValue)
  };
 const setNum=(num)=>{
 setExpression((prevInput)=>prevInput+num);
 }
 const clearAll=()=>{
  setExpression("")
 }
 const clearOne=()=>{
  setExpression((prevInput)=>prevInput.slice(0,-1))
 }
return(
  <div className="container-fluid">
 <Navbar/>
 <div className="cal">
  <div className="calHeader">{expression}</div>
  <div className="calHeader">{updatedValue}</div>
  <div className="calBody">
    {/* ----------Row 01------------ */}
    <div className="lbtn clearAll"><Button onClick={clearAll}><p>C</p><p>L</p> <p>E</p> <p>A</p><r>R</r> </Button></div>

    <div className="part-m">
      <div className="row">
        {/* <div className="lbtn"><Button>C</Button></div> */}
        <div className="btnContainer">
          <Button className="btn dfjcac" onClick={()=>setNum(1)}>1</Button>
          <Button className="btn dfjcac" onClick={()=>setNum(2)}>2</Button>
          <Button className="btn dfjcac" onClick={()=>setNum(3)}>3</Button>
          <Button className="btn dfjcac" onClick={()=>setNum(4)}>4</Button>
        </div>
        {/* <div className="lbtn"><Button>X</Button></div> */}
      </div>

      {/* --------Row 02---------------- */}

      <div className="row">
        <div className="btnContainer">
          <Button className="btn dfjcac" onClick={()=>setNum(5)}>5</Button>
          <Button className="btn dfjcac" onClick={()=>setNum(6)}>6</Button>
          <Button className="btn dfjcac" onClick={()=>setNum(7)}>7</Button>
          <Button className="btn dfjcac" onClick={()=>setNum(8)}>8</Button>
        </div>
      </div>

      {/*-----------Row 03 -------------  */}

      <div className="row">
        <div className="btnContainer">
          <Button className="btn dfjcac" onClick={()=>setNum(9)}>9</Button>
          <Button className="btn dfjcac" onClick={()=>setNum(0)}>0</Button>
          <Button className="btn dfjcac" onClick={()=>setNum(".")}>.</Button>
          <Button className="btn dfjcac" onClick={handleSubmit}>=</Button>
        </div>
      </div>

{/* -------------Row 04 ---------------- */}

      <div className="row">
        <div className="btnContainer">
          <Button className="btn dfjcac" onClick={()=>setNum("+")}>+</Button>
          <Button className="btn dfjcac" onClick={()=>setNum("-")}>-</Button>
          <Button className="btn dfjcac" onClick={()=>setNum('*')}>*</Button>
          <Button className="btn dfjcac" onClick={()=>setNum('/')}>/</Button>
        </div>
      </div>

{/* ----------Row 05---------------- */}
      <div className="row">
        <div className="btnContainer">
          <Button className="btn dfjcac" onClick={()=>setNum('{')}>&#123;</Button>
          <Button className="btn dfjcac" onClick={()=>setNum('}')}>&#125;</Button>
          <Button className="btn dfjcac" onClick={()=>setNum('[')}>[</Button>
          <Button className="btn dfjcac" onClick={()=>setNum(']')}>]</Button>
        </div>
      </div>

      {/* -------Row 06 ---------- */}
      <div className="row">
        <div className="btnContainer">
          <Button className="btn dfjcac" onClick={()=>setNum('(')}>(</Button>
          <Button className="btn dfjcac" onClick={()=>setNum(')')}>)</Button>
          <Button className="btn dfjcac" onClick={()=>setNum('%')}>%</Button>
          <Button className="btn dfjcac" onClick={()=>setNum('**')}>x <sup>2</sup></Button>
        </div>
      </div>

      {/* -------------Row 07----------- */}

      <div className="row">
        <div className="btnContainer">
          <Button className="btn dfjcac" onClick={()=>setNum()}>&#8730;</Button>
          <Button className="btn dfjcac" onClick={()=>setNum()}>sin</Button>
          <Button className="btn dfjcac" onClick={()=>setNum()}>cos</Button>
          <Button className="btn dfjcac" onClick={()=>setNum()}>tan</Button>
        </div>
      </div>

      {/* ----------Row 08 ---------- */}

      <div className="row">
        <div className="btnContainer">
          <Button className="btn dfjcac" onClick={()=>setNum()}>cot</Button>
          <Button className="btn dfjcac" onClick={()=>setNum()}>sec</Button>
          <Button className="btn dfjcac" onClick={()=>setNum()}>cosec</Button>
          <Button className="btn dfjcac" onClick={()=>setNum()}>x <sup>3</sup></Button>
        </div>
      </div>
  </div>
  <div className="lbtn clearOne"><Button onClick={clearOne}>X</Button></div>

  </div>
 </div>
  </div>
)
}