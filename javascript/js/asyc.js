async function arup() {
    let delhiweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("29 deg")
        }, 1000)
    })
    let bangaloreweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 deg")
        }, 7000)
    })

    // delhiweather.then(alert)
    // bangaloreweather.then(alert)
    console.log("featching delhi weather please wait...")
    let delhiW = await delhiweather
    console.log("featching delhi weather" + delhiW)
    console.log("featching delhi weather please wait...")
    let bangaloreW = await bangaloreweather
    console.log("featching delhi weather" + bangaloreW)
    return [delhiW, bangaloreW]
}
console.log(" welcome to weather forcast")
let a = arup()
a.then((value) => {
    console.log(value)
})