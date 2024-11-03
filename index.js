
fetch('https://www.world-wonders-api.org/v0/wonders')
.then(response=> response.json())
.then(data=>
    data.forEach(wonder =>{
    const container = document.getElementById('container')
        const wonderdiv = document.createElement('div')
        wonderdiv.classList.add('wonder-item')
        // get the name 
        const name = document.createElement('h3')
        name.textContent = wonder.name;

        // add the name to each div
        wonderdiv.appendChild(name)

        

        // append everything to the parent
        container.appendChild(wonderdiv)
    }) )
.catch(error =>{
    console.error('Error',error)
})