function UI(dob)
{ 
    const app=document.getElementById('root')

  for(var i=0;i<dob.length;i++)
  {
    
    const card =document.createElement('div')
    card.setAttribute('class','card')
    const img=document.createElement('img')
    img.src=dob[i].avatar;
    img.setAttribute('class','img')
    const details=document.createElement('div')
    details.setAttribute('class','details')

    const info_name=document.createElement('p')
    info_name.textContent=dob[i].first_name+" "+dob[i].last_name;
    info_name.setAttribute('class','info_name')
 
    const email=document.createElement('p')
    email.textContent=dob[i].email;
    email.setAttribute('class','email')

    details.appendChild(info_name)
    details.appendChild(email)
    card.appendChild(img)
    card.appendChild(details)
    
  }
}
    
 
