import express from "express";
const app =express();

app.get("/",(req,res)=>{
    res.send("<h1>Welcome To My WebPage ❤</h1>");
});

app.get("about",(req,res)=>{
    res.send("<h1>About This WebPage 👨‍💻</h1>");
});

app.use((req,res)=>{
    res.status(404).send("<h1>The Page Not Found</h1>");
});

app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000/");
});