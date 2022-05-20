"use strict";
function getIpInfo() {
    fetch("https://api.vvhan.com/api/getIpInfo").then(function (e) {
        return e.json()
    }).then(function (e) {
        var n = e.info.country,
            t = e.ip,
            r = e.info.prov,
            i = e.info.city,
            o = e.info.lsp;
        document.getElementById("userAgentIp").innerHTML = t, document.getElementById("userAgentCountry").innerHTML =
            n, document.getElementById("userAgentRegion").innerHTML = r, document.getElementById(
                "userAgentCity").innerHTML = i, document.getElementById("userAgentIsp").innerHTML = o;
        var u = navigator.userAgent;
        document.getElementById("userAgentDevice").innerHTML = u
    })
}
getIpInfo();