



async function fetchData(){
    const endpoint = 'http://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=London&aqi=no'

    const response = await fetch(endpoint)

    const data = await response.json()

    console.log(data)

}

fetchData()