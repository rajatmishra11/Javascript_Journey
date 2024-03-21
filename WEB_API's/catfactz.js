const url = "https://cat-fact.herokuapp.com/facts";

const getData = async () => {
  console.log("loading data...");
  let response = await fetch(url);
  let data = await response.json();
  for (let i = 0; i < data.length; i++) {
    document.getElementById("text").innerHTML += `<p>${data[i].text}</p`;
  }
};

getData();
