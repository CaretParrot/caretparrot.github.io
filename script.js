let announcements = [
    {
        date: (new Date(2025, 8, 13).toDateString()),
        image: "./assets/Lullaby.png",
        content: `<p>Probably should have done this earlier, but I have also added a listing for "Lullaby," a short work scored for two violas. If you would be interested in premiering this piece, please contact me through Instagram.</p>`
    },
    {
        date: (new Date(2025, 7, 31).toDateString()),
        image: "./assets/5 Vignettes.png",
        content: `<p>I've finished drafts of two works, both of which I have spent well over half a year working on: "5 Vignettes For Violin & Piano," and my first symphony. I hope to be able to make the MIDI recordings available on my <a target="_blank" href="https://youtube.com/@rvcomposition">YouTube channel</a> shortly. I'm very excited to share these new works with you.</p>
        <p>Additionally, I have a request. If any of you would be interested in premiering any of the movements in the 5 Vignettes, please contact me through <a href="https://discord.gg/hAd2mcstZe">The Composers Foundry</a>! The work is scored for <strong>violin and piano</strong>, and generally demands <strong>advanced</strong> skills from both players. Key signatures and accidentals are challenging in all movements, but the work is generally tonal and requires no contemporary techniques (like Bartok pizzicato, col legno, etc). Further details are available through contact.</p>`
    }
]

window.onload = function () {
    id.setupTree();
    id.year.innerHTML = new Date().getFullYear();
    
    id.phoneNav.onchange = function (event) {
        window.location.href = event.target.value;
    }

    for (let i = 0; i < announcements.length; i++) {
        let card = document.createElement("div");
        card.innerHTML = `<img src="${announcements[i].image}"><div><h1>${announcements[i].date}</h1>${announcements[i].content}</div>`;
        card.classList += "card";
        id.announcements.appendChild(card);
    }
}


