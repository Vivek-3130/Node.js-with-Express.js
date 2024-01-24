import express from "express";

const app = express();
const port = 3000;

// app.use((req,res,next)=>{
//   console.log("Request Method",req.url);
//   next();
// })

// app.get("/",(req,res)=>{
//   res.send("Hello Sweetie")
// })

//Middleware
function logger(req,res,next){
  console.log("Requesting Method",req.method);
  console.log("Requesting URL",req.url);
  next(); //without this next(),the other requests in qyue will nor get updated
}
app.use(logger);


app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/submit",(req,res)=>{
  res.send("Hello Again");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
