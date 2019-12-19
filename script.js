const app = document.getElementById('root')
var x=1;
function load(){
    url="https://reqres.in/api/users?page="+x;
     var request = new XMLHttpRequest()
     request.open('GET',url , true)
     request.onload = function() {
    var data = JSON.parse(this.response)
    
    if (request.status >= 200 && request.status < 400) {
        data['data'].forEach(m => {
          
            const logo = document.createElement('img')
            logo.src = m.avatar ;
            

            const container = document.createElement('span')
             container.setAttribute('class', 'container')

             

             const card = document.createElement('div')
            card.setAttribute('class', 'card')
             
            const h1 = document.createElement('h1')
            h1.textContent = m.first_name

            const p = document.createElement('p')
            p.textContent = m.email

            app.appendChild(container)
            container.appendChild(card)
            card.appendChild(logo)
            card.appendChild(h1)
            card.appendChild(p)

 
        })
      } 
      else {
        console.log('error')
      }
    
    }

    request.send()
    if(x<4)
       {x=x+1;}
}    