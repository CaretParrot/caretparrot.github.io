let works = {
    "Nocturne": {
        originality: "original work",
        instrumentation: "string orchestra",
        link: "https://youtube.com"
    },
    "Fast & Forte": {
        originality: "original work",
        instrumentation: "string orchestra",
        link: ""
    },
    "Theme & Variations": {
        originality: "original work",
        instrumentation: "string orchestra",
        link: ""
    },
    "Suite For Strings": {
        originality: "original work",
        instrumentation: "string orchestra",
        link: ""
    },
    "Introduction & Allegro": {
        originality: "original work",
        instrumentation: "string orchestra",
        link: ""
    }
}

let events = {
}

window.onload = function () {
    id.setupTree();
    if (Object.keys(works).length === 0) {
        id.works.style.grid = "auto / 1fr";
        id.works.innerHTML = "No works are available! Wait, how did I become a composer without writing any music? @_@";
    } else {
        for (let work in works) {
            let newEntry = document.createElement("div");
            newEntry.className = "work";
            newEntry.innerHTML = `<a target="_blank" href="${works[work].link}"><h3>${work}</h3></a>`;
            try {
                id.works.appendChild(newEntry);
            }
            catch (error) {

            }
        }
    }

    if (Object.keys(events).length === 0) {
        id.events.style.grid = "auto / 1fr";
        id.events.innerHTML = "No events currently! Seems fame has slipped my grasp... :/";
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