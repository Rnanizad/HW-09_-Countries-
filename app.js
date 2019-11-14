var a;
var b;

function myfunction() {

    function loadJSON(m, u, c) {
        var xHR = new XMLHttpRequest;
        xHR.open(m, u);
        xHR.onreadystatechange = function () {
            if (xHR.readyState == 4) {
                res = JSON.parse(xHR.response);
                c(res);
            }
        }
        xHR.send();
    }

    loadJSON("GET", "https://api.myjson.com/bins/kzau4", function (d) {
        build(d, "output");
    });


    function build(d, id) {
        var html = "";
        rand = Math.floor(Math.random() * (d.length));
        a = d[rand].name;
        b = a.split("");

        for (var i = b.length - 1; i > 0; i--) {
            var rand = Math.floor(Math.random() * (i + 1));
            var temp = b[i];
            b[i] = b[rand];
            b[rand] = temp;
        }
        html = b.join("");
        document.getElementById(id).innerHTML = html;
    }
}


var word = "";

function compare($this) {
    var guess = $this.value;
    var c = guess.split("");
    var e = a.split("");
    word += "<br>";
    for (var i = 0; i < e.length; i++) {
        if (e[i] != c[i]) {
            word += "-";
        } else {
            word += e[i];
        }
    }
    document.getElementById("check").innerHTML = word;
    document.getElementById("guess").value = null;

} 
