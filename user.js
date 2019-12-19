const app = document.getElementById('root')
//var customerName = prompt("Please enter your name", "<name goes here>");
var v=1;
function load(){
   var request=new XMLHttpRequest()
   url='https://reqres.in/api/users?page='+v;
   request.open('GET',url,true)
   
   request.onload=function()
   {   
       var data=JSON.parse(this.response)
       var dob=data['data'];
       for(i=0;i<dob.length;i++)
       {
      const abc=dob[i]
           UI.addelm(abc);
       
       }
   } 
   v=v+1;
   request.send();


}
var UI={

}
UI.addelm=function(abc)
{ 
  
  
    const card =document.createElement('div')
    card.setAttribute('class','card')
    
    const details=document.createElement('div')
    details.setAttribute('class','details')
  if(abc.avatar)
  {
    const img=document.createElement('img')
    img.setAttribute('class','img')
    //const imgdiv = document.createElement('div')
//    imgdiv.setAttribute('class','imgdiv')
    img.src=abc.avatar
   // imgdiv.appendChild(image)
    details.appendChild(img)
   
  }
 else{
    const imgdiv=document.createElement('div')
    imgdiv.setAttribute('class','abc')
    imgdiv.textContent=abc.first_name.charAt(0) +abc.last_name.charAt(0);
    details.appendChild(imgdiv);

 }
    const p=document.createElement('p')
    p.textContent=abc.first_name + " "+ abc.last_name
    p.setAttribute('class','name')
    const b=document.createElement('b')
    b.textContent=abc.email 
    b.setAttribute('class','email')

   
    app.append(card)
    details.appendChild(b)
    details.appendChild(p)
    //card.appendChild(img)
    card.appendChild(details)
    
  }

    
 
