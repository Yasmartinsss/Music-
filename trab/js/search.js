document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.querySelector("form");
    const searchResults = document.getElementById("search-results");

    if (searchForm) {
        searchForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const query = event.target.query.value.toLowerCase();
            console.log("Query:", query); // Adicionado para depuração
            if (searchResults) {
                const results = search(query);
                console.log("Results:", results); // Adicionado para depuração
                displayResults(results);
            } else {
                window.location.href = `search.html?query=${query}`;
            }
        });
    }

    if (searchResults) {
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get('query');
        if (query) {
            const results = search(query.toLowerCase());
            displayResults(results);
        }
    }

    function search(query) {
        const pages = [
            { title: "Home", url: "index.html" },
            { title: "Músicas", url: "musicas.html" },
            { title: "Artistas", url: "artistas.html" },
            { title: "Quem somos", url: "quem_somos.html" },
            { title: "Top 10 Músicas dos Anos 90", url: "top10_90s.html" },
            { title: "Celine Dion Documentário", url: "blog/celine_dion.html" },
            { title: "Sabrina Carpenter Filmes", url: "blog/sabrina_carpenter.html" },
            { title: "Retorno de MC Biel", url: "news/retorno_mc_biel.html" },
            { title: "Fim do Mundo Gustavo Mioto", url: "news/fim_do_mundo_mioto.html" },
            { title: "Shakira", url: "artistafav/shakira.html" },
            { title: "Sam Smith", url: "artistafav/sam_smith.html" },
            { title: "Ana Castela Biografia", url: "biografia/biografia_ana_castela.html" },
            { title: "Simone e Simaria", url: "artistafav/simone_simaria.html" },
            { title: "Adele", url: "artistafav/adele.html" },
            { title: "Tate Mcrae", url: "biografia/biografia_tate_mcrae.html" },
            { title: "Lovely", url: "musicas/lovely.html" },
            { title: "Bad Guy", url: "musicas/bad_guy.html" },
            { title: "Human", url: "musicas/human.html" },
            { title: "Shallow", url: "musicas/shallow.html" },
            { title: "American Idiot", url: "musicas/american_idiot.html" },
            { title: "Baby One More Time", url: "musicas/baby_one.html" },
            { title: "Bad Romance", url: "musicas/bad_romance.html" },
            { title: "Because You", url: "musicas/because_you.html" },
            { title: "Broken", url: "musicas/broken.html" },
            { title: "Enter Sandman", url: "musicas/enter_sadman.html" },
            { title: "Good Days", url: "musicas/good_days.html" },
            { title: "I Want It That Way", url: "musicas/i_want_it.html" },
            { title: "Killing Me Softly", url: "musicas/killing_me.html" },
            { title: "Living La Vida Loca", url: "musicas/living_loca.html" },
            { title: "Lose Yourself", url: "musicas/lose_yourself.html" },
            { title: "Love Galore", url: "musicas/love_galore.html" },
            { title: "Marilyn", url: "musicas/marilyn.html" },
            { title: "My Heart Will Go On", url: "musicas/my_heart.html" },
            { title: "Nana Banana", url: "musicas/nana_banana.html" },
            { title: "No Scrubs", url: "musicas/no_scrubs.html" },
            { title: "Poker Face", url: "musicas/poker_face.html" },
            { title: "Rubberband", url: "musicas/rubberband.html" },
            { title: "Shahmaran", url: "musicas/shahmaran.html" },
            { title: "Slower", url: "musicas/slower.html" },
            { title: "The Power", url: "musicas/the_power.html" },
            { title: "Toy", url: "musicas/toy.html" },
            { title: "Umbrella", url: "musicas/umbrella.html" },
            { title: "Vogue", url: "musicas/vogue.html" },
            { title: "Waterfalls", url: "musicas/waterfalls.html" },
            { title: "When the Party's Over", url: "musicas/when_the_party's_over.html" },
            { title: "You Broke Me First", url: "musicas/you_broke.html" }
        ];

        return pages.filter(page => page.title.toLowerCase().includes(query));
    }

    function displayResults(results) {
        if (results.length === 0) {
            searchResults.innerHTML = "<p>Nenhum resultado encontrado</p>";
        } else {
            searchResults.innerHTML = results.map(result => `<p><a href="${result.url}">${result.title}</a></p>`).join("");
        }
    }
});
