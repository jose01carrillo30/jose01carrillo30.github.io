// Some words can be spelled multiple ways. Change this based on time.
function setRandomSpellings() {
    var d = new Date();
    var diacrits = ["Resume", "Resumé", "Résumé"];
    r = d.getHours() % diacrits.length;

    var results = document.getElementsByClassName("resume-capital");
    for (i = 0; i < results.length; i++) {
        results[i].innerHTML = diacrits[r];
    }

    results = document.getElementsByClassName("resume-lower");
    for (i = 0; i < results.length; i++) {
        results[i].innerHTML = diacrits[r].toLowerCase();
    }

    // Bit of an odd-ball case where I can't just use <a> to wrap word
    var result = document.getElementById("resume-title");
    if (result) {
        result.innerHTML = diacrits[r] + " - GHDE";
    }
}
// Call this immediately. Note this means that update.js must be in the html after all updated text.
setRandomSpellings();
