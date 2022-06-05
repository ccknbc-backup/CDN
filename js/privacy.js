"use strict";

function getIpInfo() {
    fetch("https://ip.useragentinfo.com/jsonp").then(function (a) {
        return a.json()
    }).then(function (a) {
        var b = a.ip,
            c = a.country,
            d = a.province,
            e = a.city,
            f = a.area,
            g = a.isp;
            i = a.desc + a.code;
        document.getElementById("userAgentIp").innerHTML = b, document.getElementById("userAgentCountry").innerHTML =
            c, document.getElementById("userAgentRegion").innerHTML = d, document.getElementById(
                "userAgentCity").innerHTML = e, document.getElementById(
                    "userAgentArea").innerHTML = f, document.getElementById("userAgentIsp").innerHTML = g;
        var h = navigator.userAgent;
        document.getElementById("userAgentDevice").innerHTML = h,document.getElementById(
            "userAgentCode").innerHTML = i;
    })
}
getIpInfo();