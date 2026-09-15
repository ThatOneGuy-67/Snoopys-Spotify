/*
 * Static playlist catalog.
 * GitHub Pages cannot enumerate folders, so each playlist lists its song metadata here.
 * Passwords in this static demo are metadata only; public repository files are still directly accessible.
 */
const playlistCatalog = [
    {
        id: "global",
        name: "Top 50 - Global",
        description: "Your daily update of the most played tracks ...",
        folder: "music/public/",
        cover: "assets/card1img.jpeg",
        privacy: "public",
        songs: [
            { title: "California Girls", artist: "Snoop Dogg/Katy Perry", file: "California Gurls.mp3", cover: "assets/Cal.jpg" },
            { title: "Never Gonna Give U Up", artist: "Rick Astley", file: "Never Gonna Give You Up.mp3", cover: "assets/rick.jpg" },
            { title: "Crank That", artist: "Soulja Boy", file: "Crank That.mp3", cover: "assets/SB.jpg" },
            { title: "Stand by me", artist: "Ben King", file: "Stand by me.mp3", cover: "assets/Stan.jpg" },
            { title: "Steve's Lava", artist: "Mojang", file: "Steve's Lava Chicken.mp3", cover: "assets/MM.jpg" },
            { title: "Murder business", artist: "Young Boy", file: "Murder business -YoungBoy.mp3", cover: "assets/YB.jpg" },
            { title: "Hot Now", artist: "Young Boy", file: "Hot Now -YoungBoy.mp3", cover: "assets/YB2.jpg" }
        ]
    },
    {
        id: "tupac",
        name: "2Pac",
        description: "2Pac songs, I think all songs...",
        folder: "music/public/",
        cover: "assets/2pac.jpg",
        privacy: "public",
        songs: [
            { title: "Bomb First", artist: "2Pac", file: "Bomb First (My Second Reply).mp3" },
            { title: "Can_t C Me", artist: "2Pac", file: "Can_t C Me.mp3" },
            { title: "Definition Of A Thug Nigga", artist: "2Pac", file: "Definition Of A Thug Nigga.mp3" },
            { title: "Ambitionz Az A Ridah", artist: "2Pac", file: "Ambitionz Az A Ridah.mp3" },
            { title: "Dear Mama", artist: "2Pac", file: "Dear Mama.mp3" },
            { title: "All Eyez On Me", artist: "2Pac", file: "All Eyez On Me (ft. Big Syke).mp3" }
        ]
    }
];

function buildPlaylistSongs(playlist) {
    const folder = playlist.folder.replace(/\/?$/, "/");
    return playlist.songs.map((track) => ({
        title: track.title,
        artist: track.artist,
        src: `${folder}${track.file}`,
        cover: track.cover || playlist.cover || "assets/EX.jpg"
    }));
}
