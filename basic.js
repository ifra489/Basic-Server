const http=require('http');

const server=http.createServer((req,res)=>{
  //write Log Request Info
  console.log(`Received request: ${req.method}  request for ${req.url}`);
  //write set  code
  res.writeHead(200,{'Content-Type':'text/plain'});
  //send response body
  res.end('Hello, World!\n This is a basic HTTP server.');
})

const PORT=3000;
server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server.');
})