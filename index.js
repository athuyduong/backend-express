const app = require(`express`)();

const PORT = 4000;

app.listen(
    PORT,
    () => console.log(`server is running on ${PORT}`)
);

app.get(`/getRequest`, (req, res)=>{
    res.send("Hello this is GET METHOD")
});

app.post (`/postRequet`, (req,res) =>{
    res.send("Hello this is POST METHOD")
});