function getFetch(){
    const url = `https://api.goprogram.ai/inspiration`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            document.querySelector("h2").innerText = `${data.quote}`
            document.querySelector("span").innerText = `- ${data.author}`
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

getFetch()
setInterval(getFetch, 60000);