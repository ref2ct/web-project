var inputs = {
    rua: '',
    numero: '',
    bairro: ''
  };
  var latitude = '';
  var longitude = '';

  var map = L.map('map').setView([-25.536000696659993, -49.325009770874225], 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
  }).addTo(map);

  function retrieveInputs() {
    inputs.rua = document.getElementById("rua").value;
    inputs.numero = document.getElementById("numero").value;
    inputs.bairro = document.getElementById("bairro").value;
  }

  function processInputs() {
    var address = inputs.rua + ' ' + inputs.numero + ', ' + inputs.bairro;
    fetch('https://nominatim.openstreetmap.org/search?format=json&q=' + encodeURIComponent(address))
      .then(response => response.json())
      .then(data => {
        var result = data[0];

        if (result) {
          latitude = parseFloat(result.lat);
          longitude = parseFloat(result.lon);

          document.getElementById("lat").value = latitude;
          document.getElementById("lon").value = longitude;

          /* console.log(document.getElementById("lat").value);
          console.log(document.getElementById("lon").value); */
        } else {
          alert('Endereço não encontrado.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Geocoding quebrou!');
      });
  }

  // Event listeners
  document.getElementById("rua").addEventListener("input", retrieveInputs);
  document.getElementById("numero").addEventListener("input", retrieveInputs);
  document.getElementById("bairro").addEventListener("input", retrieveInputs);
  document.getElementById("cadastrar").addEventListener("click", processInputs);
