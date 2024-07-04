const url = "https://cat-fact.herokuapp.com/facts";

const getData = async () => {
  console.log("loading data...");
  let response = await fetch(url).then((res) => {
    const data = res.json();
    console.log(data);
  });
};

getData();
