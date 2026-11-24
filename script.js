const MOVIES = [
  {
    id: "interstellar",
    title: "Interstellar",
    tagline: "Mankind was born on Earth. It was never meant to die here.",
    year: 2014,
    duration: "2h 49m",
    cert: "UA",
    language: "English",
    genres: ["Sci-Fi", "Adventure", "Drama"],
    imdbRating: "8.7",
    imdbVotes: "2.2M votes",
    criticsScore: "94%",
    poster: "assets/poster-interstellar.svg",
    backdropColor: "radial-gradient(circle at 70% 30%, #f59e0b, #0d1f3c 65%)",
    trailerId: "zSWdZVtXT7E",
    story:
      "Set in a dystopian future where humanity is struggling to survive due to global crop blight and dust storms, former NASA pilot Joseph Cooper is recruited to pilot a spacecraft through a newly discovered wormhole near Saturn. Alongside a team of researchers, he travels across galaxies in search of a habitable planet while racing against the relentless pull of time dilation.",
    highlights: [
      "Academy Award winner for Best Visual Effects with scientifically accurate black hole rendering.",
      "Iconic pipe-organ musical score composed by Hans Zimmer.",
      "Shot extensively on 70mm IMAX film cameras for breathtaking scale."
    ],
    facts: {
      Director: "Christopher Nolan",
      Writers: "Jonathan Nolan, Christopher Nolan",
      "Release Date": "7 November 2014",
      "Music By": "Hans Zimmer",
      Production: "Paramount / Syncopy"
    },
    cast: [
      { name: "Matthew McConaughey", role: "Joseph Cooper" },
      { name: "Anne Hathaway", role: "Dr. Amelia Brand" },
      { name: "Jessica Chastain", role: "Murphy Cooper" },
      { name: "Michael Caine", role: "Professor John Brand" },
      { name: "Matt Damon", role: "Dr. Mann" },
      { name: "Mackenzie Foy", role: "Young Murph" }
    ],
    defaultReviews: [
      {
        author: "Rohan Verma",
        date: "Verified Viewer",
        text: "An emotional masterpiece wrapped in hard science fiction. The docking sequence still gives chills."
      },
      {
        author: "Meera Nair",
        date: "Verified Viewer",
        text: "Hans Zimmer's score elevates every single frame. Easily one of the greatest theatrical experiences."
      }
    ],
    related: ["inception", "dune", "kalki", "rrr"]
  },
  {
    id: "rrr",
    title: "RRR",
    tagline: "Rise. Roar. Revolt.",
    year: 2022,
    duration: "3h 07m",
    cert: "UA",
    language: "Telugu / Pan-India",
    genres: ["Action", "Epic Drama", "Historical"],
    imdbRating: "7.8",
    imdbVotes: "175K votes",
    criticsScore: "95%",
    poster: "assets/poster-rrr.svg",
    backdropColor: "radial-gradient(circle at 30% 40%, #ea580c, #0c4a6e 70%)",
    trailerId: "NgBoMJy386M",
    story:
      "Set in 1920s pre-independence India, RRR imagines a fictional friendship between two real-life Telugu revolutionaries — Alluri Sitarama Raju and Komaram Bheem. Unaware of each other's true identities and opposing missions, the two forge an unbreakable bond before destiny pits them against each other in a fiery clash for freedom.",
    highlights: [
      "Winner of the Academy Award for Best Original Song for 'Naatu Naatu'.",
      "Directed by S. S. Rajamouli with grand practical set pieces and high-octane choreography.",
      "Celebrated worldwide for its maximalist storytelling and emotional camaraderie."
    ],
    facts: {
      Director: "S. S. Rajamouli",
      Writers: "V. Vijayendra Prasad, S. S. Rajamouli",
      "Release Date": "25 March 2022",
      "Music By": "M. M. Keeravani",
      Production: "DVV Entertainment"
    },
    cast: [
      { name: "N. T. Rama Rao Jr.", role: "Komaram Bheem" },
      { name: "Ram Charan", role: "Alluri Sitarama Raju" },
      { name: "Alia Bhatt", role: "Sita" },
      { name: "Ajay Devgn", role: "Venkata Rama Raju" },
      { name: "Shriya Saran", role: "Sarojini" },
      { name: "Ray Stevenson", role: "Governor Scott Buxton" }
    ],
    defaultReviews: [
      {
        author: "Karthik Reddy",
        date: "Verified Viewer",
        text: "Pure adrenaline from start to finish. The interval block and Naatu Naatu are unforgettable!"
      }
    ],
    related: ["kalki", "vikram", "dune", "interstellar"]
  },
  {
    id: "kalki",
    title: "Kalki 2898 AD",
    tagline: "The future begins where mythology awakens.",
    year: 2024,
    duration: "3h 00m",
    cert: "UA",
    language: "Telugu / Pan-India",
    genres: ["Sci-Fi", "Mythology", "Action"],
    imdbRating: "7.2",
    imdbVotes: "68K votes",
    criticsScore: "82%",
    poster: "assets/poster-kalki.svg",
    backdropColor: "radial-gradient(circle at 60% 35%, #d97706, #1c1917 70%)",
    trailerId: "kQDd1AhGIHk",
    story:
      "In the year 2898 AD, the desert city of Kashi is the last surviving metropolis on a ravaged Earth, ruled by the tyrannical Supreme Yaskin from the floating megastructure known as the Complex. As an ancient prophecy nears fulfillment, a bounty hunter named Bhairava crosses paths with an immortal warrior guarding the key to humanity's rebirth.",
    highlights: [
      "Ambitious fusion of Hindu mythology and cyberpunk dystopian world-building.",
      "Features custom-built futuristic vehicle 'Bujji' and sweeping visual effects.",
      "Ensemble cast uniting legends of Indian cinema across generations."
    ],
    facts: {
      Director: "Nag Ashwin",
      Writers: "Nag Ashwin",
      "Release Date": "27 June 2024",
      "Music By": "Santhosh Narayanan",
      Production: "Vyjayanthi Movies"
    },
    cast: [
      { name: "Prabhas", role: "Bhairava" },
      { name: "Amitabh Bachchan", role: "Ashwatthama" },
      { name: "Kamal Haasan", role: "Supreme Yaskin" },
      { name: "Deepika Padukone", role: "SUM-80 / Sumathi" },
      { name: "Disha Patani", role: "Roxie" },
      { name: "Brahmanandam", role: "Rajan" }
    ],
    defaultReviews: [
      {
        author: "Ananya Sharma",
        date: "Verified Viewer",
        text: "Amitabh Bachchan as Ashwatthama steals every scene. Bold sci-fi ambition for Indian cinema."
      }
    ],
    related: ["rrr", "dune", "vikram", "interstellar"]
  },
  {
    id: "dune",
    title: "Dune: Part Two",
    tagline: "Long live the fighters.",
    year: 2024,
    duration: "2h 46m",
    cert: "UA",
    language: "English",
    genres: ["Sci-Fi", "Adventure", "Epic"],
    imdbRating: "8.5",
    imdbVotes: "590K votes",
    criticsScore: "92%",
    poster: "assets/poster-dune.svg",
    backdropColor: "radial-gradient(circle at 50% 30%, #ea580c, #291008 70%)",
    trailerId: "Way9Dexny3w",
    story:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he must prevent a terrible future that only he can foresee on the desert planet of Arrakis.",
    highlights: [
      "Breathtaking desert cinematography by Greig Fraser.",
      "Thunderous sound design and sandworm-riding set pieces.",
      "Faithful, gripping conclusion to Frank Herbert's landmark novel."
    ],
    facts: {
      Director: "Denis Villeneuve",
      Writers: "Denis Villeneuve, Jon Spaihts",
      "Release Date": "1 March 2024",
      "Music By": "Hans Zimmer",
      Production: "Legendary / Warner Bros."
    },
    cast: [
      { name: "Timothee Chalamet", role: "Paul Atreides" },
      { name: "Zendaya", role: "Chani" },
      { name: "Rebecca Ferguson", role: "Lady Jessica" },
      { name: "Javier Bardem", role: "Stilgar" },
      { name: "Austin Butler", role: "Feyd-Rautha" },
      { name: "Florence Pugh", role: "Princess Irulan" }
    ],
    defaultReviews: [
      {
        author: "Siddharth Menon",
        date: "Verified Viewer",
        text: "Monumental filmmaking. Every frame looks like a painting and the sound design shakes the room."
      }
    ],
    related: ["interstellar", "kalki", "inception", "rrr"]
  },
  {
    id: "vikram",
    title: "Vikram",
    tagline: "Once upon a time there lived a ghost.",
    year: 2022,
    duration: "2h 55m",
    cert: "UA",
    language: "Tamil / Pan-India",
    genres: ["Action", "Thriller", "Crime"],
    imdbRating: "8.3",
    imdbVotes: "85K votes",
    criticsScore: "89%",
    poster: "assets/poster-vikram.svg",
    backdropColor: "radial-gradient(circle at 60% 30%, #dc2626, #09090b 70%)",
    trailerId: "OKBMCL-frPU",
    story:
      "A special investigator is assigned a case of serial killings carried out by a masked vigilante group. As he digs deeper into the underworld, he discovers a massive drug syndicate led by a ruthless kingpin — and realizes the case is not what it seems, pulling an enigmatic former black-ops agent back into the shadows.",
    highlights: [
      "Electrifying background score by Anirudh Ravichander.",
      "Part of the acclaimed Lokesh Cinematic Universe (LCU).",
      "Powerhouse performances from Kamal Haasan, Vijay Sethupathi, and Fahadh Faasil."
    ],
    facts: {
      Director: "Lokesh Kanagaraj",
      Writers: "Lokesh Kanagaraj, Rathna Kumar",
      "Release Date": "3 June 2022",
      "Music By": "Anirudh Ravichander",
      Production: "Raaj Kamal Films International"
    },
    cast: [
      { name: "Kamal Haasan", role: "Agent Vikram" },
      { name: "Vijay Sethupathi", role: "Sandhanam" },
      { name: "Fahadh Faasil", role: "Amar" },
      { name: "Narain", role: "Inspector Bejoy" },
      { name: "Chemban Vinod Jose", role: "Jose" },
      { name: "Suriya", role: "Rolex (Cameo)" }
    ],
    defaultReviews: [
      {
        author: "Pranav Kumar",
        date: "Verified Viewer",
        text: "Tight screenplay, jaw-dropping interval reveal, and Anirudh's BGM is pure fire."
      }
    ],
    related: ["rrr", "kalki", "inception", "dune"]
  },
  {
    id: "inception",
    title: "Inception",
    tagline: "Your mind is the scene of the crime.",
    year: 2010,
    duration: "2h 28m",
    cert: "UA",
    language: "English",
    genres: ["Sci-Fi", "Thriller", "Heist"],
    imdbRating: "8.8",
    imdbVotes: "2.6M votes",
    criticsScore: "87%",
    poster: "assets/poster-inception.svg",
    backdropColor: "radial-gradient(circle at 40% 30%, #0284c7, #020617 70%)",
    trailerId: "YoHD9XEInc0",
    story:
      "Dom Cobb is a skilled thief who steals corporate secrets from deep within the subconscious during the dream state. Offered a chance to have his criminal history erased so he can return home to his children, Cobb must accomplish the impossible: 'inception' — planting an idea inside a target's mind through multi-layered dreams.",
    highlights: [
      "Winner of 4 Academy Awards including Best Cinematography and Best Visual Effects.",
      "Practical rotating hallway fight sequence filmed without CGI.",
      "One of cinema's most debated and iconic endings."
    ],
    facts: {
      Director: "Christopher Nolan",
      Writers: "Christopher Nolan",
      "Release Date": "16 July 2010",
      "Music By": "Hans Zimmer",
      Production: "Warner Bros. / Syncopy"
    },
    cast: [
      { name: "Leonardo DiCaprio", role: "Dom Cobb" },
      { name: "Joseph Gordon-Levitt", role: "Arthur" },
      { name: "Elliot Page", role: "Ariadne" },
      { name: "Tom Hardy", role: "Eames" },
      { name: "Ken Watanabe", role: "Saito" },
      { name: "Cillian Murphy", role: "Robert Fischer" }
    ],
    defaultReviews: [
      {
        author: "Divya Krishnan",
        date: "Verified Viewer",
        text: "Every rewatch reveals a new detail. Clever, stylish, and thrilling from start to finish."
      }
    ],
    related: ["interstellar", "dune", "vikram", "kalki"]
  }
];

// State with localStorage persistence
let currentMovieId = MOVIES[0].id;
let watchlist = JSON.parse(localStorage.getItem("cineverse_watchlist") || "[]");
let userRatings = JSON.parse(localStorage.getItem("cineverse_ratings") || "{}");
let userReviews = JSON.parse(localStorage.getItem("cineverse_reviews") || "{}");

// DOM Elements
const els = {
  heroBackdrop: document.getElementById("heroBackdrop"),
  moviePoster: document.getElementById("moviePoster"),
  movieCert: document.getElementById("movieCert"),
  movieYear: document.getElementById("movieYear"),
  movieDuration: document.getElementById("movieDuration"),
  movieLanguage: document.getElementById("movieLanguage"),
  movieTitle: document.getElementById("movieTitle"),
  movieTagline: document.getElementById("movieTagline"),
  movieGenres: document.getElementById("movieGenres"),
  imdbRating: document.getElementById("imdbRating"),
  imdbVotes: document.getElementById("imdbVotes"),
  criticsScore: document.getElementById("criticsScore"),
  starPicker: document.getElementById("starPicker"),
  userRatingText: document.getElementById("userRatingText"),
  toggleWatchlistBtn: document.getElementById("toggleWatchlistBtn"),
  movieStory: document.getElementById("movieStory"),
  movieHighlights: document.getElementById("movieHighlights"),
  movieFacts: document.getElementById("movieFacts"),
  castGrid: document.getElementById("castGrid"),
  trailerCaption: document.getElementById("trailerCaption"),
  trailerFrame: document.getElementById("trailerFrame"),
  trailerExternalLink: document.getElementById("trailerExternalLink"),
  reviewsList: document.getElementById("reviewsList"),
  reviewForm: document.getElementById("reviewForm"),
  reviewerName: document.getElementById("reviewerName"),
  reviewText: document.getElementById("reviewText"),
  relatedMoviesGrid: document.getElementById("relatedMoviesGrid"),
  searchInput: document.getElementById("searchInput"),
  searchResults: document.getElementById("searchResults"),
  watchlistBtn: document.getElementById("watchlistBtn"),
  watchlistCount: document.getElementById("watchlistCount"),
  watchlistModal: document.getElementById("watchlistModal"),
  watchlistItems: document.getElementById("watchlistItems"),
  closeWatchlistBtn: document.getElementById("closeWatchlistBtn"),
  closeModalBackdrop: document.getElementById("closeModalBackdrop")
};

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function getMovieById(id) {
  return MOVIES.find((m) => m.id === id) || MOVIES[0];
}

function renderMovie(movieId) {
  currentMovieId = movieId;
  const movie = getMovieById(movieId);

  document.title = `${movie.title} (${movie.year}) — CineVerse`;

  // Hero
  els.heroBackdrop.style.background = movie.backdropColor;
  els.moviePoster.src = movie.poster;
  els.moviePoster.alt = `${movie.title} Poster`;
  els.movieCert.textContent = movie.cert;
  els.movieYear.textContent = movie.year;
  els.movieDuration.textContent = movie.duration;
  els.movieLanguage.textContent = movie.language;
  els.movieTitle.textContent = movie.title;
  els.movieTagline.textContent = `"${movie.tagline}"`;

  els.movieGenres.innerHTML = movie.genres
    .map((g) => `<span class="genre-tag">${g}</span>`)
    .join("");

  // Ratings
  els.imdbRating.textContent = movie.imdbRating;
  els.imdbVotes.textContent = movie.imdbVotes;
  els.criticsScore.textContent = movie.criticsScore;
  updateStarDisplay();

  // Watchlist button state
  updateWatchlistButton();

  // Story & Highlights
  els.movieStory.textContent = movie.story;
  els.movieHighlights.innerHTML = movie.highlights
    .map((item) => `<li>${item}</li>`)
    .join("");

  // Facts Sidebar
  els.movieFacts.innerHTML = Object.entries(movie.facts)
    .map(
      ([label, value]) => `
        <div class="fact-row">
          <dt>${label}</dt>
          <dd>${value}</dd>
        </div>`
    )
    .join("");

  // Cast
  els.castGrid.innerHTML = movie.cast
    .map(
      (person) => `
        <article class="cast-card">
          <div class="cast-avatar">${getInitials(person.name)}</div>
          <div>
            <div class="cast-name">${person.name}</div>
            <div class="cast-role">as ${person.role}</div>
          </div>
        </article>`
    )
    .join("");

  // Trailer
  els.trailerCaption.textContent = `${movie.title} (${movie.year}) — Official HD Trailer`;
  els.trailerFrame.src = `https://www.youtube.com/embed/${movie.trailerId}`;
  els.trailerExternalLink.href = `https://www.youtube.com/watch?v=${movie.trailerId}`;

  // Reviews
  renderReviews(movie);

  // Related Movies
  const relatedMovies = movie.related.map(getMovieById);
  els.relatedMoviesGrid.innerHTML = relatedMovies
    .map(
      (rel) => `
        <article class="movie-card" data-id="${rel.id}" tabindex="0">
          <img src="${rel.poster}" alt="${rel.title} Poster" />
          <div class="movie-card-body">
            <h3 class="movie-card-title">${rel.title}</h3>
            <div class="movie-card-meta">
              <span>${rel.year} • ${rel.genres[0]}</span>
              <span class="movie-card-rating">&#9733; ${rel.imdbRating}</span>
            </div>
          </div>
        </article>`
    )
    .join("");
}

function updateStarDisplay() {
  const saved = userRatings[currentMovieId] || 0;
  const buttons = els.starPicker.querySelectorAll("button");
  buttons.forEach((btn) => {
    const val = Number(btn.dataset.star);
    btn.classList.toggle("active", val <= saved);
  });
  els.userRatingText.textContent = saved
    ? `You rated ${saved}/5`
    : "Click to rate";
}

function updateWatchlistButton() {
  const isSaved = watchlist.includes(currentMovieId);
  els.toggleWatchlistBtn.textContent = isSaved
    ? "✓ In Watchlist"
    : "+ Add to Watchlist";
  els.toggleWatchlistBtn.classList.toggle("saved", isSaved);
  els.watchlistCount.textContent = watchlist.length;
}

function renderReviews(movie) {
  const custom = userReviews[movie.id] || [];
  const allReviews = [...custom, ...movie.defaultReviews];

  els.reviewsList.innerHTML = allReviews
    .map(
      (rev) => `
        <article class="review-card">
          <div class="review-header">
            <span class="review-author">${escapeHtml(rev.author)}</span>
            <span class="review-date">${escapeHtml(rev.date)}</span>
          </div>
          <p>${escapeHtml(rev.text)}</p>
        </article>`
    )
    .join("");
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderWatchlistModal() {
  if (watchlist.length === 0) {
    els.watchlistItems.innerHTML =
      '<p style="color: var(--text-secondary);">Your watchlist is empty. Add movies to save them here!</p>';
    return;
  }

  els.watchlistItems.innerHTML = watchlist
    .map((id) => {
      const m = getMovieById(id);
      return `
        <div class="watchlist-item">
          <div class="watchlist-item-info" data-open-id="${m.id}">
            <img src="${m.poster}" alt="${m.title}" />
            <div>
              <strong>${m.title}</strong>
              <div style="font-size: 0.82rem; color: var(--text-secondary);">${m.year} • &#9733; ${m.imdbRating}</div>
            </div>
          </div>
          <button type="button" class="remove-btn" data-remove-id="${m.id}">Remove</button>
        </div>`;
    })
    .join("");
}

// Event Listeners
els.starPicker.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-star]");
  if (!btn) return;
  userRatings[currentMovieId] = Number(btn.dataset.star);
  localStorage.setItem("cineverse_ratings", JSON.stringify(userRatings));
  updateStarDisplay();
});

els.toggleWatchlistBtn.addEventListener("click", () => {
  if (watchlist.includes(currentMovieId)) {
    watchlist = watchlist.filter((id) => id !== currentMovieId);
  } else {
    watchlist.push(currentMovieId);
  }
  localStorage.setItem("cineverse_watchlist", JSON.stringify(watchlist));
  updateWatchlistButton();
});

els.relatedMoviesGrid.addEventListener("click", (e) => {
  const card = e.target.closest(".movie-card");
  if (!card) return;
  renderMovie(card.dataset.id);
  window.scrollTo({ top: 0, behavior: "smooth" });
});

els.reviewForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const author = els.reviewerName.value.trim();
  const text = els.reviewText.value.trim();
  if (!author || !text) return;

  if (!userReviews[currentMovieId]) {
    userReviews[currentMovieId] = [];
  }
  userReviews[currentMovieId].unshift({
    author,
    text,
    date: new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    })
  });
  localStorage.setItem("cineverse_reviews", JSON.stringify(userReviews));
  els.reviewForm.reset();
  renderReviews(getMovieById(currentMovieId));
});

// Live Search
els.searchInput.addEventListener("input", () => {
  const q = els.searchInput.value.trim().toLowerCase();
  if (!q) {
    els.searchResults.classList.add("hidden");
    return;
  }

  const matches = MOVIES.filter(
    (m) =>
      m.title.toLowerCase().includes(q) ||
      m.genres.some((g) => g.toLowerCase().includes(q)) ||
      m.facts.Director.toLowerCase().includes(q)
  );

  if (matches.length === 0) {
    els.searchResults.innerHTML = "<li><span>No matching movies found</span></li>";
  } else {
    els.searchResults.innerHTML = matches
      .map(
        (m) => `
          <li data-id="${m.id}">
            <span><strong>${m.title}</strong> (${m.year})</span>
            <small>&#9733; ${m.imdbRating}</small>
          </li>`
      )
      .join("");
  }
  els.searchResults.classList.remove("hidden");
});

els.searchResults.addEventListener("click", (e) => {
  const item = e.target.closest("li[data-id]");
  if (!item) return;
  renderMovie(item.dataset.id);
  els.searchInput.value = "";
  els.searchResults.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-wrapper")) {
    els.searchResults.classList.add("hidden");
  }
});

// Watchlist Modal Events
els.watchlistBtn.addEventListener("click", () => {
  renderWatchlistModal();
  els.watchlistModal.classList.remove("hidden");
});

function closeModal() {
  els.watchlistModal.classList.add("hidden");
}

els.closeWatchlistBtn.addEventListener("click", closeModal);
els.closeModalBackdrop.addEventListener("click", closeModal);

els.watchlistItems.addEventListener("click", (e) => {
  const removeBtn = e.target.closest("[data-remove-id]");
  if (removeBtn) {
    watchlist = watchlist.filter((id) => id !== removeBtn.dataset.removeId);
    localStorage.setItem("cineverse_watchlist", JSON.stringify(watchlist));
    updateWatchlistButton();
    renderWatchlistModal();
    return;
  }

  const openTarget = e.target.closest("[data-open-id]");
  if (openTarget) {
    renderMovie(openTarget.dataset.openId);
    closeModal();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

// Initial render
renderMovie(currentMovieId);
