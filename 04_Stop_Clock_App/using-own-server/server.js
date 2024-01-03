const http = require('http');
// const url=require('url');
const fs = require('fs').promises;
// console.log(http);

const server=http.createServer((req,res)=>{
    // res.writeHead(200,{'Content-Type':'text/html'});
    
    fs.readFile(__dirname + "./index.html")
        .then(content =>{
            res.writeHead(200,{'Content-Type':'text/html'});
            // res.write(data);
            res.end(data);
        })
        .catch(error =>{
            res.writeHead(404);
            res.end(err);
            return;
        })

/*
    fs.readFile('./index.html',null,function(error,data){
        if(error){
            res.writeHead(404);
            res.write("Whops! Page not found");
        }
        else{
            res.write(data);
        // res.write('Thakkavechikiten');   
        }
        res.end();
    });*/
});

server.listen(3000,()=>{
    console.log("Server is running on https://localhost:3000");
})

// console.log(process.arg);