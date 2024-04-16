document.addEventListener("DOMContentLoaded", function() {
    const navLinks = [
        { name: "Home", url: "index.html" },
        { name: "RSAPrime Realm", url: "rsaprime_realm.html" },
        { name: "CipherCraft", url: "ciphercraft.html" },
        { name: "Cryptopedia", url: "cryptopedia.html" }
    ];

    const navbar = document.createElement("nav");

    navLinks.forEach(link => {
        const anchor = document.createElement("a");
        anchor.textContent = link.name;
        anchor.setAttribute("href", link.url);
        navbar.appendChild(anchor);
    });

    document.body.insertBefore(navbar, document.body.firstChild);
});
