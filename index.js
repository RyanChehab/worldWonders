let container = document.getElementById('container') 
fetch('https://www.world-wonders-api.org/v0/wonders')
.then(response=> response.json())
.then(data =>{
    console.log(data)
})
.catch(error =>{
    console.error('Error',error)
})