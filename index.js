const express = require('express');
const app = express();


app.get('/', (req,res) => {
    res.status(200).send('Loding Page')
});

app.get('/home', (req,res) =>{
    res.status(200).send('This is Home page!')
})

app.get('/about' , (req,res) =>{
    res.status(200).send('This is About page!')
})

const port = 8080;
app.listen(port, () =>{
    console.log(`server is running at http://127.0.0.1:${port}`)
})