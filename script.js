let select = document.querySelector("#options")
let url = 'https://api.ratesapi.io/api/latest';


let devices = []
let rates = []

fetch(url)
.then(res => res.json())
.then((out) => {

  let a = Object.values(out)[1]
  for (const [key, value] of Object.entries(a)) {
      devices.push(key)
      rates.push(value)
  }

  document.getElementById("update").innerText = "Date mise à jour de l'api : " + out.date


    for (let index = 0; index < devices.length; index++) {
        select.options[select.options.length] = new Option(devices[index] + " - " + rates[index], rates[index]);
    }

})

.catch(err => { throw err });



function checkSelected()
{
    var e = select;
    var value = e.options[e.selectedIndex].value;
    var text = e.options[e.selectedIndex].text;

    let res = document.querySelector("#res")
    let u_input = document.querySelector("#u_input")

    res.innerText = "Résultat : " + (u_input.value * value).toFixed(4)
    console.log(u_input.value*value)

    
}









