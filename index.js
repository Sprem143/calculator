const express = require('express')
const { PythonShell } = require('python-shell');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.post('/getValue', (req, res) => {
    const value = req.body.expression;
    console.log(value)
    let options = {
        mode: 'text',
        pythonOptions: ['-u'],
        args: [value]
    }
    PythonShell.run('script.py', options).then((message) => {
        console.log(message[0])
        res.json({ updatedValue: message[0] })
    })
})
app.post('/getAngleValue', (req, res) => {
    let value = req.body.expression;
    if(value='tan90' || value=='cosec0'||value=='sec90' || value=='cot0'){
        res.json({updatedValue:'Not defined'})
    }
    let options = {
        mode: 'text',
        pythonOptions: ['-u'],
        args: [value]
    }
    PythonShell.run('angle.py', options).then((message) => {
        console.log(message[0])
        res.json({ updatedValue: message[0] })
    })
})

app.listen(port, (err) => {
    if (err) { console.log(err) }
})
