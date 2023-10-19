document.addEventListener('DOMContentLoaded',()=>{
  const api_url = 'https://api.ipify.org/?format=json'
  const response =  fetch(api_url)
    .then(res=>res.json())
    .then(({ ip }) => {
       return ip 
    })

   response.then( ip =>{
    fetch(`https://ipinfo.io/${ip}?token=d7b7f9591d96b8`)
    .then(res=>res.json())
    .then(data =>{
       const location = data.loc.split(',')
       document.getElementById('maps').innerHTML=`

       <iframe
        width="650"
        height="250"
        frameborder="0" style="border:0"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://maps.google.com/maps?q=${ location[0] },${ location[1] }&hl=es;z=14&amp;output=embed"
        allowfullscreen>
      </iframe>
       <div class="json">
        <pre>${JSON.stringify(data, null,2)}</pre>  
       </div>
       `
    })
   })
})