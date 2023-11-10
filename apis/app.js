import express from 'express'; 
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());



function hello(req, res){
    res.json({"message": "Hello Abhishek"});
}


function sumOfTwo(req, res){
    console.log(req.body)
   let num1 = +(req.body.num1)
   let num2 = +(req.body.num2)
   console.log(num1, num2)

   let sum = num1 + num2
    res.json({"message" : `The sum of ${num1} and ${num2} is ${sum}`})
}


app.get("/greet" , hello);
app.post("/sum" , sumOfTwo);

app.listen(5000, () => console.log("Server is running on port 5000"));