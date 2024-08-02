document.addEventListener('DOMContentLoaded', () => {
    const artists = {
        'A': [
            { name: 'Ana Castela', img: 'images/ana_castela.jpg', bio: 'biografia/biografia_ana_castela.html' }
        ],
        'B': [
            { name: 'Billie Eilish', img: 'images/billie_eilish.jpg', bio: 'biografia/biografia_billie_eilish.html' }
        ],
        'C': [
            { name: 'Celine Dion', img: 'images/celine_dion.jpg', bio: 'biografia/biografia_celine_dion.html' }
        ],
        'L': [
            { name: 'Lady Gaga', img: 'images/lady_gaga.jpg', bio: 'biografia/biografia_lady_gaga.html' }
        ],
        'S': [
            { name: 'Sevdaliza', img: 'images/sevdaliza.jpg', bio: 'biografia/biografia_sevdaliza.html' },
            { name: 'SZA', img: 'images/sza.jpg', bio: 'biografia/biografia_sza.html' }
        ],
        'N': [
            { name: 'Netta Barzilai', img: 'images/netta_barzilai.jpg', bio: 'biografia/biografia_netta_barzilai.html' }
        ]
    };

    const artistsContainer = document.getElementById('artists-container');

    Object.keys(artists).sort().forEach(letter => {
        const section = document.createElement('section');
        section.innerHTML = `<h3>${letter}</h3>`;
        const row = document.createElement('div');
        row.className = 'row';

        artists[letter].forEach(artist => {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-3';
            col.innerHTML = `
                <div class="card">
                    <a href="${artist.bio}">
                        <img src="${artist.img}" class="card-img-top" alt="${artist.name}">
                        <div class="card-body">
                            <h5 class="card-title">${artist.name}</h5>
                        </div>
                    </a>
                </div>
            `;
            row.appendChild(col);
        });

        section.appendChild(row);
        artistsContainer.appendChild(section);
    });

    document.getElementById('sugestao-artista-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const nomeArtista = document.getElementById('nomeArtista').value.trim();
        const linkArtista = document.getElementById('linkArtista').value.trim();
        const biografiaArtista = document.getElementById('biografiaArtista').value.trim();

        if (nomeArtista && biografiaArtista) {
            const firstLetter = nomeArtista.charAt(0).toUpperCase();
            if (!artists[firstLetter]) {
                artists[firstLetter] = [];
            }

            artists[firstLetter].push({
                name: nomeArtista,
                img: 'images/default_artist.jpg',
                bio: '#'
            });

            const newArtist = {
                name: nomeArtista,
                img: 'images/default_artist.jpg',
                bio: '#'
            };

            const col = document.createElement('div');
            col.className = 'col-md-4 mb-3';
            col.innerHTML = `
                <div class="card">
                    <a href="${newArtist.bio}">
                        <img src="${newArtist.img}" class="card-img-top" alt="${newArtist.name}">
                        <div class="card-body">
                            <h5 class="card-title">${newArtist.name}</h5>
                        </div>
                    </a>
                </div>
            `;

            let letterSection = document.querySelector(`section h3:contains('${firstLetter}')`);
            if (!letterSection) {
                const section = document.createElement('section');
                section.innerHTML = `<h3>${firstLetter}</h3>`;
                const row = document.createElement('div');
                row.className = 'row';
                section.appendChild(row);
                artistsContainer.appendChild(section);
                letterSection = section;
            }

            letterSection.querySelector('.row').appendChild(col);
            alert('Artista sugerido com sucesso!');
        } else {
            alert('Por favor, preencha todos os campos obrigatórios.');
        }

        document.getElementById('sugestao-artista-form').reset();
    });
});
