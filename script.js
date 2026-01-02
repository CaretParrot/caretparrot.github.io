let announcements = [
    {
        date: (new Date(2025, 10, 1).toDateString()),
        image: "./assets/Rishi Flag.png",
        content: `<p>I am happy to announce my new Ko-Fi page! If you would like to support my work, <a href="https://ko-fi.com/caretparrot" target="_blank">go to my page</a> and feel free to tip me. Any amount helps to further my mission of bring more music to the world.</p>`
    },
    {
        date: (new Date(2025, 8, 27).toDateString()),
        image: "./assets/Torque.png",
        content: `<p>I have launched a few new electronic tracks on YouTube, which will be part of my upcoming album, <em>Torque</em>. One of them is a remaster of a work that was previously on Bandlab, <a href="https://youtu.be/bAEICr0filc">Stardust</a>. The other is <a href="https://youtu.be/JkiadaV2_DE">Orange Light</a>, a totally new work. Hope you enjoy!</p>`
    },
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

// @ts-ignore
let pageGroup = new PageGroup("page", "grid");
let year = /** @type {HTMLSpanElement} */ (document.getElementById("year"));

year.innerHTML = (new Date()).getFullYear().toString();

for (let i = 0; i < announcements.length; i++) {
    let card = document.createElement("div");
    card.innerHTML = `<img src="${announcements[i].image}"><div><h1>${announcements[i].date}</h1>${announcements[i].content}</div>`;
    card.classList += "card";
    let announcementsDiv = /** @type {HTMLDivElement} */ (document.getElementById("announcements"));
    announcementsDiv.appendChild(card);
}