async function getData() {
    const url = "http://www.omdbapi.com/?i=tt3896198&apikey=c7bb4d1"
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json
    }
    
}