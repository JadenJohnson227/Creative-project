function onClick(e) {
  e.preventDefault();
  // get form values
  let s1 = document.getElementById('set-selector');
  let set1 = s1.options[s1.selectedIndex].value;




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
      
      let results = "<p>Set code: " + json.set["code"]+"</p><p>Set type: "+json.set["type"]+"</p>Set Release Date: " + json.set.releaseDate+"</p>";
      updateResult(results);
    });
}

function updateResult(info) {
  document.getElementById('result').innerHTML = info;
}

document.getElementById('submit').addEventListener('click', onClick);
