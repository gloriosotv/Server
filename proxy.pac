function FindProxyForURL(url, host) {
    // List of proxies available
    var proxies = [
        "PROXY 4.156.78.45:80",
        "PROXY 80.74.54.148:3128",
        "PROXY 157.66.16.68:8686",
    ];

    // If the URL starts with "https", use a direct connection (no proxy)
    if (url.substring(0, 5) == "https") {
        return "DIRECT";
    }

    // If the URL starts with "http" or "ftp", use a proxy
    for (var i = 0; i < proxies.length; i++) {
        if (url.substring(0, 4) == "http" || url.substring(0, 3) == "ftp") {
            return proxies[i];
        }
    }

    // If no specific protocol match, return direct connection
    return "DIRECT";
}
