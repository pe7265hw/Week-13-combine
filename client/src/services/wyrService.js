export default {
    getRandomWYR(){ //returns a Promise object
        return fetch('/wyr').then(response=>{
            return response.json()
        })
    }
}