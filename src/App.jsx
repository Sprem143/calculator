import './App.css'
import Navbar from "./Navbar";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
export default function App(){
  const [fvalue, setFvalue]=useState("0")
  const[updatedValue, setUpdatedValue]= useState("0.0")
// ----------Form data_---------------------
  const [expression,setExpression]=useState('')
  const [exp,setExp]=useState('')
  const [ex,setEx]=useState('')
  const handleSubmit =async (event) => {
    event.preventDefault();
    let v= await fetch('http://localhost:5000/getValue',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({expression}),
  });
  v= await v.json();
  setUpdatedValue(v.updatedValue)
  };
  const search=(exp)=>{
    switch(exp){
      case 'sin0':
        setFvalue(0);
        break;
      case 'sin30':
        setFvalue('1/2');
        break;
        case 'sin-30':
        setFvalue('-1/2');
        break;
      case 'sin45':
        setFvalue('1/\u221A2');
        break;
        case 'sin-45':
        setFvalue('-1/\u221A2');
        break;
      case 'sin60':
        setFvalue(`\u221A3/2`)
        break;
      case 'sin-60':
        setFvalue('-\u221A3/2')
        break;
      case 'sin90':
        setFvalue(1)
        break;
        case 'cos0':
          setFvalue(1)
          break;
          case 'sin-90':
        setFvalue('-1')
        break;
        case 'cos-30':
          setFvalue('-\u221A3/2')
          break;
        case 'cos30':
          setFvalue('\u221A3/2');
          break;
        case 'cos45':
          setFvalue(`1/\u221A2`);
          break;
        case 'cos60':
          setFvalue('1/2')
          break;
        case 'cos90':
          setFvalue(0)
          break;
          case 'cos-45':
          setFvalue('-1/\u221A2');
          break;
        case 'cos-60':
          setFvalue('-1/2')
          break;
        case 'cos-90':
          setFvalue('0')
          break;

        case 'tan0':
          setFvalue(0)
          break;
          case 'tan-0':
          setFvalue(0)
          break;
        case 'tan30':
          setFvalue(`1/\u221A3`);
          break;
        case 'tan45':
          setFvalue(`1`);
          break;
        case 'tan60':
          setFvalue('\u221A3')
          break;
        case 'tan90':
          setFvalue("Not defined")
          break;
          case 'tan-90':
          setFvalue("Not defined")
          break;

          case 'tan-30':
          setFvalue('-1/\u221A3');
          break;
        case 'tan-45':
          setFvalue(-1);
          break;
        case 'tan-60':
          setFvalue('-\u221A3')
          break;
          case 'cot0':
          setFvalue('Not defined')
          break;
        case 'cot30':
          setFvalue(`\u221A3`);
          break;
        case 'cot45':
          setFvalue(`1`);
          break;
        case 'cot60':
          setFvalue('1/\u221A3')
          break;
        case 'cot90':
          setFvalue("0")
          break;

          case 'cot-0':
          setFvalue('Not defined')
          break;
        case 'cot-30':
          setFvalue('-\u221A3');
          break;
        case 'cot-45':
          setFvalue('-1');
          break;
        case 'cot-60':
          setFvalue('-1/\u221A3')
          break;
        case 'cot-90':
          setFvalue("0")
          break;

          case 'sec0':
          setFvalue(1)
          break;
        case 'sec30':
          setFvalue('2/\u221A3');
          break;
        case 'sec45':
          setFvalue(`\u221A2`);
          break;
        case 'sec60':
          setFvalue('2')
          break;
        case 'sec90':
          setFvalue("Not defined")
          break;
          case 'sec-0':
          setFvalue('-1')
          break;
        case 'sec-30':
          setFvalue('-2/\u221A3');
          break;
        case 'sec-45':
          setFvalue('-\u221A2');
          break;
        case 'sec-60':
          setFvalue('-2')
          break;
        case 'sec-90':
          setFvalue("Not defined")
          break;
          case 'cosec30':
            setFvalue(`2`);
            break;
          case 'cosec45':
            setFvalue(`\u221A2`);
            break;
          case 'cosec60':
            setFvalue('2/\u221A3')
            break;
          case 'cosec90':
            setFvalue("1")
            break;

            case 'cosec-0':
            setFvalue("Not defined")
            break;
          case 'cosec-30':
            setFvalue('-2');
            break;
          case 'cosec-45':
            setFvalue('-\u221A2');
            break;
          case 'cosec-60':
            setFvalue('-2/\u221A3')
            break;
          case 'cosec-90':
            setFvalue("-1")
            break;
            
     }
  }
 
     const handleAngleSubmit=async()=>{
      let updatedExp=''
       const updatedExpression = expression.slice(0,3)+ parseInt(expression.slice(3))%360;
      let angle = parseInt(updatedExpression.slice(3));
      if(angle<=90){search(updatedExpression)}
      if((updatedExpression.slice(3)=='0'|| parseInt(updatedExpression.slice(3))%30==0||parseInt(updatedExpression.slice(3))%45==0|| parseInt(updatedExpression.slice(3))%60==0|| parseInt(updatedExpression.slice(3))%90==0)){
         if(angle>90 && angle<=180 && updatedExpression.slice(0,3)=='sin'){
           angle=angle-90;
           setExp((prevInput) => {
            updatedExp = prevInput+'cos'+angle;
            alert(updatedExp)
            search(updatedExp)
          });
         }
      if(angle>90 && angle<=180 && updatedExpression.slice(0,3)=='cos'){
        angle=-(angle-90);
        setExp((prevInput) => {
          updatedExp = prevInput+'sin'+angle;
          search(updatedExp)
        });
      }
      if(angle>90 && angle<=180 && updatedExpression.slice(0,3)=='tan'){
        angle=-(angle-90);
        setExp((prevInput) => {
          updatedExp = prevInput+'cot'+angle;
          search(updatedExp)
        });
      }

      if(angle>90 && angle<=180 && updatedExpression.slice(0,3)=='cot'){
        angle=-(angle-90);
        alert(angle)
        setExp((prevInput) => {
          updatedExp = prevInput+'tan'+angle;
          search(updatedExp)
        });
      }
      if(angle>90 && angle<=180 && updatedExpression.slice(0,3)=='sec'){
        angle=-(angle-90);
        setExp((prevInput) => {
          updatedExp = prevInput+'cosec'+angle;
          search(updatedExp)
        });
        }
// --------------angle between 180 and 270
        if(angle>180 && angle<=270 && updatedExpression.slice(0,3)=='sin'){
           angle=-(angle-180);
           setExp((prevInput) => {
            updatedExp = prevInput+'sin'+angle;
            alert(updatedExp)
            search(updatedExp)
          });
         }
        if(angle>180 && angle<=270 && updatedExpression.slice(0,3)=='cos'){
          angle=-(angle-180);
          setExp((prevInput) => {
            updatedExp = prevInput+'cos'+angle;
            search(updatedExp)
          });
        }
        if(angle>180 && angle<=270 && updatedExpression.slice(0,3)=='tan'){
          angle=angle-180;
          setExp((prevInput) => {
            updatedExp = prevInput+'tan'+angle;
            search(updatedExp)
          });
        }
  
        if(angle>180 && angle<=270 && updatedExpression.slice(0,3)=='cot'){
          angle=angle-180;
          alert(angle)
          setExp((prevInput) => {
            updatedExp = prevInput+'cot'+angle;
            search(updatedExp)
          });
        }
        if(angle>180 && angle<=270 && updatedExpression.slice(0,3)=='sec'){
          angle=-(angle-180);
          setExp((prevInput) => {
            updatedExp = prevInput+'sec'+angle;
            search(updatedExp)
            });
          }

          // ----------angle bteween 270 and 360 ---------
          if(angle>270 && angle<=360 && updatedExpression.slice(0,3)=='sin'){
             angle=-(angle-270);
             setExp((prevInput) => {
              updatedExp = prevInput+'cos'+angle;
              alert(updatedExp)
              search(updatedExp)
            });
           }
          if(angle>270 && angle<=360 && updatedExpression.slice(0,3)=='cos'){
            angle=(angle-180);
            setExp((prevInput) => {
              updatedExp = prevInput+'sin'+angle;
              search(updatedExp)
            });
          }
          if(angle>270 && angle<=360 && updatedExpression.slice(0,3)=='tan'){
            angle=-(angle-270);
            setExp((prevInput) => {
              updatedExp = prevInput+'cot'+angle;
              search(updatedExp)
            });
          }
    
          if(angle>270 && angle<=360 && updatedExpression.slice(0,3)=='cot'){
            angle=-(angle-270);
            setExp((prevInput) => {
              updatedExp = prevInput+'tan'+angle;
              search(updatedExp)
            });
          }
          if(angle>270 && angle<=360 && updatedExpression.slice(0,3)=='sec'){
            angle=(angle-270);
            setExp((prevInput) => {
              updatedExp = prevInput+'cosec'+angle;
              search(updatedExp)
            });
            }
      }
       else if(updatedExpression=="cosec0" ||parseInt(updatedExpression.slice(5))%30==0||parseInt(updatedExpression.slice(5))%45==0||parseInt(updatedExpression.slice(5))%60==0||parseInt(updatedExpression.slice(5))%90==0){
        if(angle>90 && angle<=180 && updatedExpression.slice(0,5)=='cosec'){
          angle=-(angle-90);
          alert(angle)
          setExp('sec'+angle)
          alert(exp)
        }
        switch(updatedExpression){
          case 'sec0':
            setFvalue(1)
            break;
          case 'sec30':
            setFvalue('2/\u221A3');
            break;
          case 'sec45':
            setFvalue(`\u221A2`);
            break;
          case 'sec60':
            setFvalue('2')
            break;
          case 'sec90':
            setFvalue("Not defined")
            break;
          
            case 'sec-0':
            setFvalue('-1')
            break;
          case 'sec-30':
            setFvalue('-2/\u221A3');
            break;
          case 'sec-45':
            setFvalue('-\u221A2');
            break;
          case 'sec-60':
            setFvalue('-2')
            break;
          case 'sec-90':
            setFvalue("Not defined")
            break;
              case 'cosec0':
            setFvalue("Not defined")
            break;
          case 'cosec30':
            setFvalue(`2`);
            break;
          case 'cosec45':
            setFvalue(`\u221A2`);
            break;
          case 'cosec60':
            setFvalue('2/\u221A3')
            break;
          case 'cosec90':
            setFvalue("1")
            break;

            case 'cosec-0':
            setFvalue("Not defined")
            break;
          case 'cosec-30':
            setFvalue('-2');
            break;
          case 'cosec-45':
            setFvalue('-\u221A2');
            break;
          case 'cosec-60':
            setFvalue('-2/\u221A3')
            break;
          case 'cosec-90':
            setFvalue("-1")
            break;
            }  
       }
            let v= await fetch('http://localhost:5000/getAngleValue',{
              method:'POST',
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify({expression}),
        });
            v= await v.json();
            setUpdatedValue(v.updatedValue)    
       }
  
      
  
 const setNum=(num)=>{
    setExpression((prevInput)=>prevInput+num);
 }
 const setsq=()=>{
 setUpdatedValue(expression*expression)
 }
 const setq=()=>{
  setUpdatedValue(expression*expression*expression)
 }
 
 const clearAll=()=>{
  setExpression('');
  setUpdatedValue("0.0")
  setFvalue("0")
  stop=true
 }
 const clearOne=()=>{
  setExpression((prevInput)=>prevInput.slice(0,-1))
 }
return(
  <div className="container-fluid">
 <Navbar/>
 <div className="cal">
  <div className="calHeader">I :&nbsp; {expression}</div>
  <div className="calHeader">O :&nbsp;{updatedValue}</div>
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
          <Button className="btn dfjcac" onClick={setsq}>x <sup>2</sup></Button>
        </div>
      </div>

      {/* -------------Row 07----------- */}

      <div className="row">
        <div className="btnContainer">
          <Button className="btn dfjcac" onClick={()=>setNum()}>&#8730;</Button>
          <Button className="btn dfjcac" onClick={()=>setq()}>x <sup>3</sup></Button>
        </div>
      </div>

  </div>
  <div className="lbtn clearOne"><Button onClick={clearOne}>X</Button></div>
  </div>
 </div>

 {/* -----------trigonomatry value--------------- */}

 <div className="cal">
    <div className="calHeader"><span style={{color:"red"}}>I</span> :&nbsp; {expression}</div>
    <div className="calHeader"><span style={{color:"red"}}>D</span> :&nbsp;{updatedValue}</div>
    <div className="calHeader"><span style={{color:"red"}}>F</span> :&nbsp;{fvalue}</div>
    <div className="calBody">
    <div className="lbtn clearAll"><Button onClick={clearAll}><p>C</p><p>L</p> <p>E</p> <p>A</p><r>R</r> </Button></div>
      <div className="part-m">
      <div className="row">
        <div className="btnContainer">
          <Button className="btn dfjcac" onClick={()=>setNum('sin')}>sin</Button>
          <Button className="btn dfjcac" onClick={()=>setNum('cos')}>cos</Button>
          <Button className="btn dfjcac" onClick={()=>setNum('tan')}>tan</Button>
          <Button className="btn dfjcac" onClick={()=>setNum('cot')}>cot</Button>
        </div>
      </div>
      <div className="row">
        <div className="btnContainer">
          <Button className="btn dfjcac" onClick={()=>setNum('sec')}>sec</Button>
          <Button className="btn dfjcac" onClick={()=>setNum('cosec')}>cosec</Button>
          <Button className="btn dfjcac" onClick={()=>setNum(0)}>0</Button>
          <Button className="btn dfjcac" style={{background:"magenta", color:'white'}} onClick={handleAngleSubmit}>=</Button>
        </div>
      </div>
      <div className="row">
        <div className="btnContainer">
          <Button className="btn dfjcac" onClick={()=>setNum(1)}>1</Button>
          <Button className="btn dfjcac" onClick={()=>setNum(2)}>2</Button>
          <Button className="btn dfjcac" onClick={()=>setNum(3)}>3</Button>
          <Button className="btn dfjcac" onClick={()=>setNum(4)}>4</Button>
        </div>
      </div>
      <div className="row">
        <div className="btnContainer">
          <Button className="btn dfjcac" onClick={()=>setNum(5)}>5</Button>
          <Button className="btn dfjcac" onClick={()=>setNum(6)}>6</Button>
          <Button className="btn dfjcac" onClick={()=>setNum(7)}>7</Button>
          <Button className="btn dfjcac" onClick={()=>setNum(8)}>8</Button>
        </div>
      </div>

      <div className="row">
        <div className="btnContainer">
          <Button className="btn dfjcac" onClick={()=>setNum(9)}>9</Button>
          <Button className="btn dfjcac" onClick={()=>setNum(30)}>30</Button>
          <Button className="btn dfjcac" onClick={()=>setNum(60)}>60</Button>
          <Button className="btn dfjcac" onClick={()=>setNum(90)}>90</Button>
        </div>
      </div>
    </div>
    <div className="lbtn clearOne"><Button onClick={clearOne}>X</Button></div>
    </div>
</div>

  </div>
)
}