console.log("Ajax");
var employee=document.getElementById("employee");
var fetchBtn=document.getElementById("fetchBtn")
 console.log("click the button fetchBtn")

 fetchBtn.addEventListener('click', function(){
// Instantiate an xhr object
  var xhr=new XMLHttpRequest();
  xhr.open('GET','https://jsonplaceholder.typicode.com/users');
  // What to do on progress (optional)
  xhr.onprogress = function(){
    console.log('On progress');
    }
     xhr.onload=function(){
         var ourData=JSON.parse(xhr.responseText)
         renderHTML(ourData);
    };
        xhr.send(); 
});


function renderHTML(data){
  var htmlstring=" ";
  for(var i=0;i<data.length;i++)
  {
    htmlstring+="<p>"+"ID:"+data[i].id+"<br>"+"Name:"+data[i].name+"<br>"+"User Name:"+data[i].username+"<br>"+"Email"+data[i].email+".<p>";
  }
  employee.insertAdjacentHTML("beforeend", htmlstring);
}




