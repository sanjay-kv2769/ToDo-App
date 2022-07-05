// LOGIN PAGE

let username = document.getElementById("uname");
let password = document.getElementById("pass");
let error = document.getElementById("error");
let count =0;


function validation(callback)
    {
    if(uname.value.trim()=="" || pass.value.trim()=="" ){
                  alert("Fields cannot be empty!");
                 uname.style.border="2px solid red";
                 return false;
    }
    
    else if(uname.value.trim()=="admin" && pass.value.trim()=="12345"){
        uname.style.border="2px solid blue";
        pass.style.border="2px solid blue";
        alert("Log In success!");
        callback();
        return true;
        
    }
    else{
        uname.style.border="2px solid red";
        pass.style.border="2px solid red";
        alert("Incorrect Username or Password");
         return false;
    }
    
}
    

function one(){
    location.href='./Todolist.html';
    alert("working");
}
    

FetchTodo();
FetchTodo2();
FetchTodo3();
FetchTodo4();
FetchTodo5();


// Todo List api fetch---------------------------------------------------------------------

// fetch todo function
function FetchTodo(){
 // http request
 fetch("https://jsonplaceholder.typicode.com/todos/1")
//  fetch("https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5")
 .then(function(data){
     console.log(data)
    return data.json()
 })
 .then(function(data){
    var results=document.getElementById('results')
    results.innerHTML = `<p>${data.id}. ${data.title}</p>`
    console.log(data)
                     
 })
 .catch(function(error){
     console.log(error)
 })
}

// ---------------------------ftchtd2
function FetchTodo2(){
 // http request
 fetch("https://jsonplaceholder.typicode.com/todos/2")
 .then(function(data){
     console.log(data)
    return data.json()
 })
 .then(function(data){
    var results=document.getElementById('results2')
    results.innerHTML = `<p>${data.id}. ${data.title}</p>`
    console.log(data)
                     
 })
 .catch(function(error){
     console.log(error)
 })
}

// ---------------------------ftchtd3
function FetchTodo3(){
    // http request
    fetch("https://jsonplaceholder.typicode.com/todos/3")
    .then(function(data){
        console.log(data)
       return data.json()
    })
    .then(function(data){
       var results=document.getElementById('results3')
       results.innerHTML = `<p>${data.id}. ${data.title}</p>`
       console.log(data)
                        
    })
    .catch(function(error){
        console.log(error)
    })
   }

// ---------------------------ftchtd4
function FetchTodo4(){
    // http request
    fetch("https://jsonplaceholder.typicode.com/todos/4")
    .then(function(data){
        console.log(data)
       return data.json()
    })
    .then(function(data){
       var results=document.getElementById('results4')
       results.innerHTML = `<p>${data.id}. ${data.title}</p>`
       console.log(data)
                        
    })
    .catch(function(error){
        console.log(error)
    })
   }

// ---------------------------ftchtd5
function FetchTodo5(){
    // http request
    fetch("https://jsonplaceholder.typicode.com/todos/5")
    .then(function(data){
        console.log(data)
       return data.json()
    })
    .then(function(data){
       var results=document.getElementById('results5')
       results.innerHTML = `<p>${data.id}. ${data.title}</p>`
       console.log(data)
                        
    })
    .catch(function(error){
        console.log(error)
    })
   }



   // Accessing all checkbox using DOM 
   var checkBoxArray = document.querySelectorAll(".checkbox");
          
   // Adding eventlistner to each checkbox
   checkBoxArray.forEach((a)=>{
     a.addEventListener("change",()=>{

       // Promise 
       var pro = new Promise(function(resolve,reject){

         resolve("Congrats. 5 Tasks have been Successfully Completed !");

       });


       // Checking if the checkbox count is 5
       if(a.checked==true){
         count++;
         console.log("The count is "+ count);
         
         // Promise calling
         if(count==5){
           pro.then((msg)=>{
             console.log(count);
             alert(msg);
           }).catch((e)=>{
             console.log(e)
           });
         }
         

   
       }

     })
   });





























//     function validate(){

//     }
    
// }



// if(pass.value.trim()==""){
//     //  alert("Fields cannot be empty!");
//      pass.style.border="2px solid red";
//      return false;
// }





// maryadakkworkeym
// function isEmail()
//     {
//     if(uname.value.trim()==""){
//                 //  alert("Fields cannot be empty!");
//                  uname.style.border="2px solid red";
//                  return false;
//     }
    
//     if(uname.value.trim()=="admin" && password.value.trim()=="1234"){
//         uname.style.border="2px solid blue";
//         pass.style.border="2px solid blue";
//          alert("Log In success!");
//         return false;

//     }
//     else{
//         uname.style.border="2px solid red";
//         pass.style.border="2px solid red";
//          return false;
//     }
// }

// -------------------------------------------------------------------------------------------------




// function isEmail(){
//     if(email.value.trim()==""){
//         alert("Fields cannot be empty!");
//         email.style.border="2px solid red";
//         return false;
//     }
        
//     let regexp = /^([admin])?$/
//         if(regexp.test(email.value)){
//             return validate();
//         }
//         else{
//             error.innerHTML = "Invalid Email!";
//             error.style.color = "red";
//             return false;
//         }
//     function validate(){
//         if(email.value.trim()==""){
//             alert("Fields cannot be empty!");
//             email.style.border="2px solid red";
//             return false;
//         }
//         else if(pwd.value.trim()==""){
//             alert("Fields cannot be empty!");
//             pwd.style.border="2px solid red";
//             return false;
//         }
//         else{
//             alert("Logged In Successfully");
//             return true;
//         }
//     }      
// }




