(function () {
    const cloudflareToken = "REPLACE_WITH_CLOUDFLARE_WEB_ANALYTICS_TOKEN";

    if (!cloudflareToken || cloudflareToken === "REPLACE_WITH_CLOUDFLARE_WEB_ANALYTICS_TOKEN") {
        return;
    }

    const script = document.createElement("script");
    script.defer = true;
    script.src = "https://static.cloudflareinsights.com/beacon.min.js";
    script.setAttribute("data-cf-beacon", JSON.stringify({ token: cloudflareToken }));
    document.head.appendChild(script);
})();
