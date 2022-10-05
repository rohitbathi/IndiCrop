form = document.getElementById("dataForm")

const predData = {
    'apple': [
        
    ]
}

form.addEventListener('submit',async (event)=>{
    event.preventDefault();

    N = document.getElementById("N").value
    P = document.getElementById("P").value
    K = document.getElementById("K").value
    temperature = document.getElementById("temperature").value
    humidity = document.getElementById("humidity").value
    pH = document.getElementById("pH").value
    rainfall = document.getElementById("rainfall").value

    result = document.getElementById("result")

    await fetch('http://localhost:8000/predict',{
        method: "POST",
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            N: N,
            P: P,
            K: K,
            temperature: temperature,
            humidity: humidity,
            ph: pH,
            rainfall: rainfall
        })
    })
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data.prediction);
        result.innerHTML = '<p> most viable crop is</p><p id="result-text">' +
                            data.prediction +
                            '</p>'
    })
    .catch(err => {
        console.log(err);
    })
})