id.setupTree();

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

window.onload = function () {
    for (let work in works) {
        let newEntry = document.createElement("div");
        newEntry.className = "work";
        newEntry.innerHTML = `<a target="_blank" href="${works[work].link}"><h3>${work}</h3></a>`;
        id.works.appendChild(newEntry);
    }
}