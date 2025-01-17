document.addEventListener("DOMContentLoaded", function () {
  fetch("https://fern5-44.github.io/nawis.github.io/tools/navbar.html")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      // Füge den HTML-Inhalt in den Container ein
      document.getElementById("navbar-container").innerHTML = data;

      // Funktionen für die Sidebar mit den geladenen Elementen verbinden
      const openButtons = document.querySelectorAll('[onclick="openNav()"], [onclick="openNavtwo()"]');
      const closeButtons = document.querySelectorAll('[onclick="closeNav()"], [onclick="closeNavtwo()"]');

      openButtons.forEach(button => {
        const action = button.getAttribute("onclick");
        if (action === "openNav()") {
          button.addEventListener("click", () => openNav("SideONE"));
        } else if (action === "openNavtwo()") {
          button.addEventListener("click", () => openNav("SideTWO"));
        }
      });

      closeButtons.forEach(button => {
        const action = button.getAttribute("onclick");
        if (action === "closeNav()") {
          button.addEventListener("click", () => closeNav("SideONE"));
        } else if (action === "closeNavtwo()") {
          button.addEventListener("click", () => closeNav("SideTWO"));
        }
      });
    })
    .catch(error => console.error("Error loading navbar:", error));
});

// Funktion zum Öffnen der Sidebar
function openNav(sidebarId) {
  const sidenav = document.getElementById(sidebarId);
  const main = document.getElementById("main");

  if (sidenav && main) {
    sidenav.style.width = "250px";
    main.style.marginLeft = "250px";
  } else {
    console.error(`${sidebarId} or main content not found.`);
  }
}

// Funktion zum Schließen der Sidebar
function closeNav(sidebarId) {
  const sidenav = document.getElementById(sidebarId);
  const main = document.getElementById("main");

  if (sidenav && main) {
    sidenav.style.width = "0";
    main.style.marginLeft = "0";
  } else {
    console.error(`${sidebarId} or main content not found.`);
  }
}
