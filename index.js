
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
        year.textContent = wonder.build_year
        // get period
        const time_period = document.createElement('h4')
        time_period.innerText = wonder.time_period

        // add the name to each div
        wonderdiv.appendChild(name)
        wonderdiv.appendChild(summary)
        wonderdiv.appendChild(location)
        wonderdiv.appendChild(year)
        wonderdiv.appendChild(time_period)
        // wonderdiv.appendChild(year)

        // append everything to the parent
        container.appendChild(wonderdiv)
    }) )
.catch(error =>{
    console.error('Error',error)
})