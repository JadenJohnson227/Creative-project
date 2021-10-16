function onClick(e) {
  e.preventDefault();
  // get form values
  let s1 = document.getElementById('set-selector');
  let set1 = s1.options[s1.selectedIndex].value;
  let s = document.getElementById('selector');
  let type1 = s.options[s.selectedIndex].value;



  // setup URL
  let url = "https://api.magicthegathering.io/v1/sets/"+set1;
  // call API
  fetch(url)
    .then(function(response) {
      // make sure the request was successful

      if (response.status != 200) {
        return {
          text: "Error calling the Numbers API service: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      console.log(type1);
      let results = json.set[type1];
      updateResult(results);
    });
}

function updateResult(info) {
  document.getElementById('result').textContent = info;
}

document.getElementById('submit').addEventListener('click', onClick);
