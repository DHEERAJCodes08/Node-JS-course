// npm - global command comes with  node 
// npm -verson 

// local dependencies  this only for this perticular package 
//npm i <package_name>                                                //THIS ARE USED TO ADD DEPENDENCIES LIKE LOADASH ,BOOTSTRAP ETC..


//global dependencies use this in Any Project
//npm install -g <package_name>



//these dependencies are present in the Json file Which provides the dependencies and info used in our Project 
//manual approch for Json file is create the file in root and then change the Properties 
//npm init (step by step edit the Properties)
//npm init -y  (everything defaults)



//after using this in terminal it creates an Package.json file 

//to add the dependencies we use the local or global dependencies ex -->
//npm i loadash
//npm i bootstrap

//AS soon as we add the dependencies it automatically creates an node modules files  in the folder
//and the name of the added dependencies will be shown in the Json file



// *NOTE : the added dependencies are always the External Packages So we can use them as -->
 
  const _ = require('lodash');

  const items = [1,[2,[3,[4,[5]]]]]

  const newItems = _.flattenDeep(items)
  console.log(newItems)

 // when we console log this we get the values --> [ 1, 2, 3, 4, 5 ]
// ie it means this Package can Access the Values  even though it is an External Packages



