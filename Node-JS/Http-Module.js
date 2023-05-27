// this module is used to create server for our application project 
//we will also be creating the server for our application


const http = require('http');                   //basic require module statement

const server = http.createServer((req,res) => {                 //here the 'req' means request and 'res' means Response and hence creating the Server
    
    //console.log(req) this will only get shown after we refresh the server from google
    //res.write('Welcome to my homepage!');    //we are providing the responce when we get to the homepage 
    //res.end()                                // we are Ending the response


   // or


   //when we want to get the response for multiple pages we will use this >>>

   if(req.url === '/'){                                        //its basically used for the homepages '/' 
    res.end('Welcome to my homepage!')                     //we are providing the responce when we get to the
   }


   
   else if(req.url === '/about'){
    res.end('How is my About page ') 
   }


   else{                                                      //this will be our deafult response if the  webpage is not found !

    res.end(`                                            
   <h1>Opps!</h1>
   <img src ="Images/NotFound.jpg" alt="this is an image ">
   <p>404 Error occured </p>
   <a href="/"> Go back </a> 
   
   `);
   
   }
   //this will be our deafult response if the  webpage is not found !
   

})

server.listen(5000, () => {
    console.log('live sever is running')
     
})    //this is the port of the server ex: the numbers that  are represented in domain names

//Now to check the server go to google and search the port given in the project ie i have ex  :  (localhost:5000) !
