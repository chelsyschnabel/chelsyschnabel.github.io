(function () {
  // Skills, grouped by type and listed strongest first.
  // Each entry is ["Tool name", "Expert" | "Intermediate" | "Beginner"].
  var levelRank = { Expert: 0, Intermediate: 1, Beginner: 2 };
  var levelDots = { Expert: "●●●", Intermediate: "●●○", Beginner: "●○○" };
  var groups = [
    ["Instructional and curriculum tools", [["Canvas","Expert"],["Desmos Classroom","Expert"],["GeoGebra","Expert"],["LaTeX / MathType","Expert"],["Desmos Calculators","Intermediate"],["Blackboard Learn","Intermediate"],["Nearpod","Intermediate"],["EdPuzzle","Intermediate"],["Quality Matters","Intermediate"],["Turnitin","Beginner"]]],
    ["Content and media production", [["Canva","Expert"],["DaVinci Resolve","Expert"],["OBS Studio","Expert"],["Meld Studio","Expert"],["Figma","Intermediate"],["Camtasia","Intermediate"],["Adobe Creative Cloud","Beginner"]]],
    ["Collaboration and project management", [["Google Workspace","Expert"],["Microsoft Office 365","Expert"],["Notion","Intermediate"],["Jira","Intermediate"],["Slack","Intermediate"],["Zoom","Intermediate"],["Google Meet","Intermediate"]]],
    ["Programming and development", [["R","Intermediate"],["Python","Intermediate"],["HTML / CSS","Intermediate"],["Node.js","Beginner"],["Webhook integrations","Beginner"],["Pipedream","Beginner"],["Google Apps Script","Beginner"]]],
    ["Content creation and community", [["Discord","Expert"],["Fluxer","Expert"],["Twitch","Expert"],["Elgato Stream Deck","Expert"],["Stoat","Intermediate"],["YouTube","Intermediate"],["TikTok","Intermediate"],["Instagram","Intermediate"],["X","Intermediate"],["Bluesky","Intermediate"],["Kick","Intermediate"],["StreamElements","Intermediate"],["Streamer.bot","Intermediate"],["Matrix","Beginner"],["Stream alert integrations","Beginner"]]]
  ];
  var host = document.getElementById("skills-list");
  groups.forEach(function (g) {
    var box = document.createElement("div");
    var h = document.createElement("h3"); h.textContent = g[0]; box.appendChild(h);
    var ul = document.createElement("ul");
    g[1].slice().sort(function (a, b) { return levelRank[a[1]] - levelRank[b[1]]; }).forEach(function (s) {
      var li = document.createElement("li");
      var name = document.createElement("span"); name.textContent = s[0];
      var level = document.createElement("span"); level.className = "level";
      level.setAttribute("aria-hidden", "true"); level.textContent = levelDots[s[1]];
      var spoken = document.createElement("span"); spoken.className = "sr-only"; spoken.textContent = ", " + s[1];
      name.appendChild(spoken);
      li.appendChild(name); li.appendChild(level); ul.appendChild(li);
    });
    box.appendChild(ul); host.appendChild(box);
  });

  // Work sample filter by level.
  var buttons = document.querySelectorAll(".filters button");
  var cards = document.querySelectorAll("#cards .card");
  var none = document.getElementById("no-match");
  function apply(f) {
    var shown = 0;
    cards.forEach(function (c) {
      var ok = f === "all" || c.getAttribute("data-levels").split(" ").indexOf(f) !== -1;
      c.hidden = !ok; if (ok) shown++;
    });
    none.hidden = shown !== 0;
    buttons.forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-filter") === f)); });
  }
  buttons.forEach(function (b) { b.addEventListener("click", function () { apply(b.getAttribute("data-filter")); }); });

  // Open links to other sites and PDFs in a new tab, and tell screen reader users it will.
  document.querySelectorAll('a[href^="http"], a[href$=".pdf"]').forEach(function (a) {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    var note = document.createElement("span");
    note.className = "sr-only";
    note.textContent = " (opens in a new tab)";
    a.appendChild(note);
  });
})();
