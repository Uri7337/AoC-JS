// Document ready function
document.addEventListener('DOMContentLoaded', function () {
    console.log('hi Uri!');

    // vyjmutí dat z HTML
    const rawPairs = document.getElementById("pairs").innerText.trim();
    const rawSequences = document.getElementById("sequences").innerText.trim();

    // zpracování párů (každý řádek -> [a,b])
    const pairs = rawPairs
      .split("\n")
      .map(line => line.split("|").map(Number));

    // zpracování sekvencí (každý řádek -> pole čísel)
    const sequences = rawSequences
      .split("\n")
      .map(line => line.split(",").map(Number));

    // --------------------------------------------------------------------------

    const prodrawPairs = document.getElementById("prodpairs").innerText.trim();
    const prodrawSequences = document.getElementById("prodsequences").innerText.trim();

    // zpracování párů (každý řádek -> [a,b])
    const prodpairs = prodrawPairs
      .split("\n")
      .map(line => line.split("|").map(Number));

    // zpracování sekvencí (každý řádek -> pole čísel)
    const prodsequences = prodrawSequences
      .split("\n")
      .map(line => line.split(",").map(Number));

    // ukázka výstupu
    console.log("prodPairs:", prodpairs);
    console.log("prodSequences:", prodsequences);

    let res = "test";
    let prodres = "prod";
    let testres = res === "143" ? "Ano!" : "Ne :("; 






   document.getElementById("testoutput").innerText = res;
   document.getElementById("prodoutput").innerText = prodres;
   document.getElementById("testres").innerText = testres;

});

    
