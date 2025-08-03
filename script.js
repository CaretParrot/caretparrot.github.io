let works = {
    "Fast & Forte": {
        duration: "3:47",
        opus: 24,
        originality: "Original Work",
        instrumentation: ["String Orchestra"],
        published: "July 2025",
        link: "https://www.jwpepper.com/fast-forte-11634015-2603737/p",
        image: "./assets/Fast & Forte.jpg",
    }
}

let events = {

}

function refreshResults() {
    id.works.innerHTML = "";
    for (let work in works) {
        if (!work.includes(id.searchField.value) && id.searchField.value !== "") {
            continue;
        }

        let newEntry = document.createElement("a");
        newEntry.target = "_blank";
        newEntry.href = works[work].link;
        newEntry.className = "work";
        newEntry.innerHTML = `<img src="${works[work].image}"><h1>${work}</h1><p class="bold">${works[work].instrumentation}</p><p>Opus ${works[work].opus}<br>Duration: ${works[work].duration}<br>Published: ${works[work].published}</p>`;
        try {
            id.works.appendChild(newEntry);
        }
        catch (error) {
            break;
        }
    }

    if (id.works.innerHTML === "") {
        id.works.style.grid = "auto / 1fr";
        id.works.innerHTML = "<p>No filter results found.</p>";
    }
}

window.onload = function () {
    id.setupTree();
    id.year.innerHTML = new Date().getFullYear();

    if (Object.keys(works).length === 0) {
        id.works.style.grid = "auto / 1fr";
        id.works.innerHTML = "<p>No works are available! Wait, how did I become a composer without writing any music? @_@</p>";
    } else {
        refreshResults();
    }

    id.searchField.oninput = function (event) {
        refreshResults();
        console.log();
    }

    if (Object.keys(events).length === 0) {
        id.events.style.grid = "auto / 1fr";
        id.events.innerHTML = "<p>No events currently! Seems fame has slipped my grasp... :/</p>";
    } else {
        for (let event in events) {
            let newEntry = document.createElement("div");
            newEntry.className = "event";
            newEntry.innerHTML = `<a target="_blank" href="${events[event].link}"><h3>${event}</h3></a>`;
            try {
                id.events.appendChild(newEntry);
            }
            catch (error) {
                console.log("No event found!");
            }
        }
    }
}