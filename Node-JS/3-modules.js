/* 1) OS MODULES  */

const os = require('os');
//console.log(os);



// Info about the user
const user = os.userInfo();
console.log(user);



//Method returns the user uptime in seconds

/* 
const usertime = os.uptime();
console.log(usertime); */

   //or

   //console.log(`the user uptime is ${os.uptime()} seconds`);


   //Now we can also get some useful information about the user >>>>

   const Userdetails = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem : os.freemem(),

   }
   //console.log(Userdetails);






/*  2) PATH MODULES */

const path = require('path');

//here it provides the path seperator of the user ex \
console.log(path.sep);




//Now to try path.join we need to create an folder and an subfolder in that subfolder we need to add an txt file

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);     //here as soon as we click on the file path provide in the terminal o/p  we get into the test.txt file



//the acctual file that we are fettching is know as basename , so how can we get it 
const base = path.basename(filePath)        //here we need to provide the filePath ie the actual location of the file
console.log(base);


//when we need to get the complete path

const resolve = path.resolve(__dirname, '/content','subfolder','test.txt'); // or directly write filepath here
console.log(resolve);






/* 3) FS MODULE (Sync) Syncronusily */

//we can use this in two methods but we will be using it this way

const {readFileSync} = require('fs');
const {writeFileSync} = require('fs');

      //or

/* const read = require('fs');
fs.readFileSync */

const first = readFileSync('./Content/first.txt', 'utf8');
const second =readFileSync('./Content/second.txt', 'utf8');
console.log(first,second);

// Now to Write Inside the File it automatically creates a new file

//writeFileSync('./Content/third.txt',`here is the result${first}, ${second}`)

//So baciassayl when we run this statement it will overwrite the values that are accutaly present in the file 
//so to prevent this we need to append that 

//to do that we need to use {flag: 'a'} this feature allows us to append the new values in the previous values present in the file



//writeFileSync('./Content/third.txt',`here is the result${first}, ${second}`, {flag:'a'});



/* FS MODULE (Asunc) */



const {readFile, writeFile} = require('fs');

//reading the first file
readFile('./Content/first.txt','utf8', (err, result)=>{
   if (err) {
      console.log('Error hogya bhai')
      return
   }
   const first = result    //it is storing the result value in the first var

   //reading the second file
   readFile('./Content/second.txt','utf8', (err, result) =>{

      if(err){
         console.log('Error hogya bhai')
         return
      }
      const second = result    //it is storing the result value in the second var


      //creating and writing the fourth file
      writeFile('./Content/fourth.txt',
      `here is the fourth result : ${first}, ${second} `,(err,result) =>{
         if(err){
            console.log('Error hogya Bhai')
            return
         }
         console.log(result)   //here it returns by creating the fourth file with the values of first and second file

      })

   })
   })























