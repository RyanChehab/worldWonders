
fetch('https://www.world-wonders-api.org/v0/wonders')
.then(response=> response.json())
.then(data=>
    data.forEach(wonder =>{
    const container = document.getElementById('container')
        const wonderdiv = document.createElement('div')
        wonderdiv.classList.add('wonder-item')
        // get the name 
        const name = document.createElement('h2')
        name.textContent = wonder.name;
        // get summary
        const summary = document.createElement('p')
        summary.textContent = wonder.summary;
        // get location
        const location = document.createElement('p')
        location.classList.add('loc')
        location.textContent = wonder.location
        // get build year
        const year = document.createElement('h3')
        year.classList.add('year')
        year.textContent = `Year: ${wonder.build_year}`
        // get period
        const time_period = document.createElement('h4')
        time_period.innerText = `Time Period:  ${wonder.time_period}`
        // get img
        const image = document.createElement('img')
            image.src = wonder.links.images[0]
            image.alt = wonder.name
            image.style.height = "250px"

        // get categories
        const categories = document.createElement('h3')
        categories.innerText = wonder.categories
        
        const learn = document.createElement('p')
        learn.style.color = 'blue'
        learn.innerText = 'Explore more details...'
        
        // add the name to each div
        wonderdiv.appendChild(name)
        wonderdiv.appendChild(image)
        wonderdiv.appendChild(learn)
        
        // append everything to the parent
        container.appendChild(wonderdiv)


        wonderdiv.addEventListener('click', ()=>{
            window.location.href = `details.html?name=${encodeURIComponent(wonder.name)}`;
        })

        // wonderdiv.appendChild(summary)
        // wonderdiv.appendChild(location)
        // wonderdiv.appendChild(year)
        // wonderdiv.appendChild(categories)
        // wonderdiv.appendChild(time_period)
    }) )
.catch(error =>{
    console.error('Error',error)
})