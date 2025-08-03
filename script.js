let works = {
    "Fast & Forte": {
        originality: "Original Work",
        instrumentation: ["String Orchestra"],
        link: "https://www.jwpepper.com/fast-forte-11634015-2603737/p",
        image: "./assets/Fast & Forte.jpg",
        description: `Fast & Forte is a "driving" piece that, when played at full tempo, lasts less than four minutes. But don't let its size fool you! It's filled with intense harmonies and blazing energy that keeps the listener on the edge of their seat, culminating in an even more chaotic ending, with some lighter sections for a good balance. Whether as a concert opener or concert closer, Fast & Forte is sure to be a fun time for the players and the audience.`,
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

        let newEntry = document.createElement("div");
        newEntry.className = "work";
        newEntry.innerHTML = `<a target="_blank" href="${works[work].link}" class="workCard"><img src="${works[work].image}"><p>${works[work].description}</p><p>Duration: ${works[work].duration}</p></a>`;
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