    var inputs = {
        rua: '',
        numero: '',
        bairro: ''
    };
    var latitude = '';
    var longitude ='';

    function processInputs() {
        
        inputs.rua = document.getElementById("rua").value;
        inputs.numero = document.getElementById("numero").value;
        inputs.bairro = document.getElementById("bairro").value;

        console.log("Rua: " + inputs.rua);
        console.log("Número: " + inputs.numero);
        console.log("Bairro: " + inputs.bairro);

        //=== Function para localizar coordenadas ===
        // ...
        //===========================================

        document.getElementById("lat").value = inputs.latitude;
        document.getElementById("lon").value = inputs.longitude;
    }

    // Event listeners
    document.getElementById("rua").addEventListener("input", processInputs);
    document.getElementById("numero").addEventListener("input", processInputs);
    document.getElementById("bairro").addEventListener("input", processInputs); 