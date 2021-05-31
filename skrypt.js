//input for size of Table
let numInput = document.createElement("INPUT");
numInput.setAttribute("type", "number");
numInput.setAttribute("value", 5);
numInput.id = "numInput";
//buttion realizing table creating function
let btn = document.createElement("button");
btn.innerHTML = "Function";
btn.id = "button";
btn.onclick = function() {
  let num = document.getElementById("numInput").value;
  let tbl = document.createElement("table");
  tbl.id = "table";
  let tblBody = document.createElement("tbody");
  tblBody.id = "tableBody";
  for (let i = 0; i < num; i++) {
    let row = document.createElement("tr");
  for (let j = 0; j < num; j++) {
    let cell = document.createElement("td");
    let cellText = document.createTextNode("1");
    //formatting cells according to task requirements
    if ((i+1) % 2 == 0) {
      if ( (j+1)% 3 == 0) {
        cell.id = "blackCell";
      }
      else {
        cell.id = "whiteCell";
      }
    }
    else {
      if ( (j+1)% 3 == 0) {
        cell.id = "whiteCell";
      }
      else {
        cell.id = "blackCell";
      }
    }
    cell.appendChild(cellText);
    row.appendChild(cell);
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  document.querySelector("body").appendChild(tbl);
};

let form = document.createElement("form");
form.id = "form";

form.setAttribute("method", "post");

let selectProvince = document.createElement("select");
selectProvince.id = "selectProvince";
//array of provinces
let provinces = ["Dolnośląskie", "Kujawsko-Pomorskie", "Lubelskie",
"Lubuskie", "Łódzkie", " Małopolskie", "Mazowieckie", "Opolskie",
"Podkarpackie", "Podlaskie", "Pomorskie", "Śląskie", "Świętokrzyskie",
"Warminsko-Mazurskie", "Wielkopolskie", "Zachodniopomorskie"];

let dolnoslaskie = ["Wrocław", "Wałbrzych", "Legnica"],
kujawskopomorskie = ["Bydgoszcz", "Toruń", "Włocławek"],
lubelskie = ["Lublin", "Zamość", "Chełm"],
lubuskie = ["Zielona Góra", "Gorzów Wielkopolski"],
lodzkie = ["Łódź", "Piotrków Trybunalski"],
malopolskie = ["Kraków", "Nowy Targ", "Zakopane"],
mazowieckie = ["Warszawa", "Radom", "Płock"],
opolskie = ["Opole", "Nysa"],
podkarpackie = ["Rzeszów", "Mielec", "Przemyśl"],
podlaskie = ["Białystok", "Suwałki", "Łomża"],
pomorskie = ["Gdańsk", "Gdynia", "Słupsk"],
slaskie = ["Katowice", "Częstochowa", "Gliwice"],
swietokrzyskie = ["Kielce", "Skarżysko-Kamienna"],
warminsko = ["Olsztyn", "Elbląg"],
wielkopolskie = ["Poznań", "Kalisz", "Gniezno"],
zachodniopomorskie = ["Szczecin", "Świnioujscie"];
//array of cities corresponding with provinces array
let cities = [dolnoslaskie, kujawskopomorskie, lubelskie, lubuskie,
lodzkie, malopolskie, mazowieckie, opolskie, podkarpackie,
podlaskie, pomorskie, slaskie, swietokrzyskie, warminsko,
wielkopolskie, zachodniopomorskie];
//creating options for province selection
for (let i = 0; i < provinces.length; i++) {
    let option = document.createElement("option");
    option.value = provinces[i];
    option.text = provinces[i];
    selectProvince.appendChild(option);
}
//creating options for city selection
selectProvince.addEventListener("mouseup", event => {
  let oldCity = document.getElementById("selectCity");
  let selectCity = document.createElement("select");
  selectCity.id = 'selectCity';
  province = document.getElementById("selectProvince")
  citiesList = cities[province.selectedIndex];
  for (let i = 0; i < citiesList.length; i++) {
    let option = document.createElement("option");
    option.value = citiesList[i];
    option.text = citiesList[i];
    selectCity.appendChild(option);
  }
  form.replaceChild(selectCity, oldCity);
});
form.appendChild(selectProvince);
let selectCity = document.createElement("select");
selectCity.id = 'selectCity';
citiesList = dolnoslaskie;
for (let i = 0; i < citiesList.length; i++) {
  let option = document.createElement("option");
  option.value = citiesList[i];
  option.text = citiesList[i];
  selectCity.appendChild(option);
}
form.appendChild(selectCity);

document.querySelector('body').appendChild(btn);
document.querySelector('body').appendChild(numInput);
document.querySelector('body').appendChild(form);
