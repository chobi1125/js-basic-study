"use strict";
var csv = {
    load: function (filename, id) {
        var data = {};
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", filename, true);
        xmlHttp.send(null);
        xmlHttp.onload = function () {
            if (xmlHttp.status === 200) {
                let separate1 = /\r\n/;
                let separate2 = ",";
                let data_org = xmlHttp.responseText;
                let data_en = data_org.split(separate1);
                for (let d in data_en) {
                    data[d] = data_en[d].split(separate2);
                }
                //data load 
                var t = document.getElementById(id);
                var h = "<table>";

                for (var o in data) {

                    h += "<tr>";
                    for (var r in data[o]) {
                        h += "<td>";
                        h += data[o][r].slice(1, -1);
                        h += "</td>";
                    }
                    h += "</tr>";
                }
                h += "</table>";
                t.innerHTML = h;
            }
        };
    }
};

csv.load("sample.csv", "table");