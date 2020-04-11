const express = require('express');
const app = express();
const PORT = 3000; 
const cors = require('cors');

const taskRouter = require('./routes/task');


app.use(cors());
app.use(express.json()); //bodyparser



app.use('/task',taskRouter)




app.listen(PORT, ()=>console.log(`server running on port ${PORT} `));