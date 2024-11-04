// getting the name of the param i passed in the url
const params = new URLSearchParams(window.location.search)
const wondername = params.get('name')

// getting all the wonders

fetch('https://www.world-wonders-api.org/v0/wonders')
.then(response =>response.json())
.then(data=> {
    // finding the name of the wonder by its name
    const wonder = data.find(item=>item.name === wondername)

    if(wonder) {
        displayWonder(wonder)
    }else{
        console.error('wonder not found')
    }
})
.catch(error =>{
    console.error('Error fetching details', error)
})

// displaying the details
function displayWonder(wonder){
    document.getElementById('wonderImage').src = wonder.links.images[0];
    document.getElementById('wonderName').textContent = wonder.name;
    document.getElementById('wonderLocation').textContent = `Location: ${wonder.location}`;
    document.getElementById('wonderSummary').textContent = wonder.summary;
    document.getElementById('wonderYear').textContent = `Year: ${wonder.build_year}`;
    document.getElementById('wonderPeriod').textContent = `Time Period: ${wonder.time_period}`;
    document.getElementById('wonderLink').href = wonder.links.website;
}