const express = require('express'); 

const app = express(); 

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Calvin Server is here!!!')
})

app.post('/', (req,res)=>{
    const {a,b, operator} = req.body
    let result = 0;
    if (operator === 'plus'){
        result = a+b; 
    }
    res.send(result); 
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log('server is running!!!!!!!!')
})