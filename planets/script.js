let currentPageUrl = 'https://swapi.dev/api/planets'

const images = [
    '',
    'https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/4/4b/Tatooine-3.jpg',
    'https://starwars-visualguide.com/assets/img/planets/2.jpg',
    'https://starwars-visualguide.com/assets/img/planets/3.jpg',
    'https://starwars-visualguide.com/assets/img/planets/4.jpg',
    'https://starwars-visualguide.com/assets/img/planets/5.jpg',
    'https://starwars-visualguide.com/assets/img/planets/6.jpg',
    'https://starwars-visualguide.com/assets/img/planets/7.jpg',
    'https://starwars-visualguide.com/assets/img/planets/8.jpg',
    'https://starwars-visualguide.com/assets/img/planets/9.jpg',
    'https://starwars-visualguide.com/assets/img/planets/10.jpg',
    'https://starwars-visualguide.com/assets/img/planets/11.jpg',
    'https://starwars-visualguide.com/assets/img/planets/12.jpg',
    'https://starwars-visualguide.com/assets/img/planets/13.jpg',
    'https://starwars-visualguide.com/assets/img/planets/14.jpg',
    'https://starwars-visualguide.com/assets/img/planets/15.jpg',
    'https://starwars-visualguide.com/assets/img/planets/16.jpg',
    'https://starwars-visualguide.com/assets/img/planets/17.jpg',
    'https://starwars-visualguide.com/assets/img/planets/18.jpg',
    'https://starwars-visualguide.com/assets/img/planets/19.jpg',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a5b8dc94-de3a-4c5e-b12b-e7e0590fa969/d32k9ri-fe3ee88e-d293-4afb-b9a5-789baeaac77f.png/v1/fill/w_900,h_675,strp/stock_planet_01_by_regulus36_d32k9ri-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02NzUiLCJwYXRoIjoiXC9mXC9hNWI4ZGM5NC1kZTNhLTRjNWUtYjEyYi1lN2UwNTkwZmE5NjlcL2QzMms5cmktZmUzZWU4OGUtZDI5My00YWZiLWI5YTUtNzg5YmFlYWFjNzdmLnBuZyIsIndpZHRoIjoiPD05MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.xSmnOH6EnSJxUn60gALJ6gFlr0yWGAhpZeDDSqAhTa4',
    'https://starwars-visualguide.com/assets/img/planets/21.jpg',
    'https://static.wikia.nocookie.net/starwars/images/7/7f/Corellia_SOF.png',
    'https://static.wikia.nocookie.net/ptstarwars/images/c/c3/Rodia_canon.png',
    'https://static.wikia.nocookie.net/starwars/images/8/8d/Nal-hutta.png',
    'https://static.wikia.nocookie.net/starwars/images/a/a5/Dantooine_Resistance.jpg',
    'https://static.wikia.nocookie.net/starwars/images/7/79/Bestine_TEA.png',
    'https://static.wikia.nocookie.net/starwars/images/3/36/Ord_Mantell_EotECR.png',
    '',
    'https://static.wikia.nocookie.net/starwars/images/4/40/Trandosha-PL.png',
    'https://static.wikia.nocookie.net/star-wars-extended-universe/images/5/5f/Alderaan.png',
    'https://static.wikia.nocookie.net/starwars/images/0/04/Dac-AORCR.png',
    'https://static.wikia.nocookie.net/starwars/images/9/9b/Chandrila_AoRCR.png',
    'https://static.wikia.nocookie.net/starwars/images/2/2d/SullustAoR.png',
    'https://static.wikia.nocookie.net/starwars/images/d/d6/Toydaria-TCW.png',
    'https://static.wikia.nocookie.net/starwars/images/0/00/Malastare_TEA.jpg',
    'https://static.wikia.nocookie.net/starwars/images/3/34/DathomirJFO.jpg',
    'https://static.wikia.nocookie.net/theclonewiki/images/0/0d/135.jpg',
    'https://static.wikia.nocookie.net/starwars/images/f/f6/Aleen_NEGAS.jpg',
    'https://static.wikia.nocookie.net/starwars/images/b/be/Vulpter_FF7.jpg',
    'https://static.wikia.nocookie.net/starwars/images/3/3a/TroikenQuermia.jpg',
    'https://static.wikia.nocookie.net/starwars/images/3/31/Tund_TEA.jpg',
    'https://static.wikia.nocookie.net/starwars/images/7/75/HaruunKalCSWE.jpg',
    'https://static.wikia.nocookie.net/starwars/images/c/cc/Cerea-FDCR.png',
    'https://static.wikia.nocookie.net/starwars/images/0/0c/GleeAnselm.jpg',
    'https://static.wikia.nocookie.net/starwars/images/c/c5/Iridonia.jpg',
    'https://static.wikia.nocookie.net/starwars/images/9/94/Jabiim.png',
    'https://static.wikia.nocookie.net/starwars/images/f/f1/Iktotch_FDNP.png',
    'https://static.wikia.nocookie.net/starwars/images/2/29/Quermia_NEGAS.jpg',
    'https://static.wikia.nocookie.net/starwars/images/9/9b/Dorin-FDCR.png',
    'https://static.wikia.nocookie.net/starwars/images/d/d7/Champala_NEGAS.jpg',
    'https://static.wikia.nocookie.net/star-wars-pathfinder/images/e/e0/Mirial.jpg',
    'https://static.wikia.nocookie.net/starwars/images/b/b2/Serenno-Massacre.png',
    'https://static.wikia.nocookie.net/starwars/images/8/84/Concord_Dawn_system.png',
    'https://static.wikia.nocookie.net/starwars/images/6/66/Zolan.jpg',
    'https://static.wikia.nocookie.net/starwars/images/9/9f/Ojom.jpg',
    'https://static.wikia.nocookie.net/starwars/images/5/5b/Skako-Minor-ADE.png',
    'https://static.wikia.nocookie.net/starwars/images/1/19/Muunilinst.jpg',
    'https://static.wikia.nocookie.net/starwars/images/b/b8/ShiliNEGAS.jpg',
    'https://static.wikia.nocookie.net/starwars/images/c/c1/Kalee_TEA.jpg',
    'https://static.wikia.nocookie.net/starwars/images/2/2d/Umbara-Planet_SWTOR.jpg'
]

window.onload = async () => {
    try {
        await loadCharacters(currentPageUrl)
    } catch (error) {
        console.log(error);
        alert('Erro ao carregar cards');
    }

    const nextButton = document.getElementById('next-button')
    const backButton = document.getElementById('back-button')

    nextButton.addEventListener('click', loadNextPage)
    backButton.addEventListener('click', loadPreviousPage)
};

async function loadCharacters(url) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = ''; // Limpar os resultados anteriores
    

    try {

        const response = await fetch(url);
        const responseJson = await response.json();

        responseJson.results.filter((item) => item.name !== 'unknown').forEach((character) => {
            const card = document.createElement('div')
            card.style.backgroundImage = `url(${images[character.url.replace(/\D/g, "")]})`
            card.className = 'cards'

            const characterNameBG = document.createElement('div')
            characterNameBG.className = 'character-name-bg'

            const characterName = document.createElement('span')
            characterName.className = 'character-name'
            characterName.innerText = `${character.name}`

            characterNameBG.appendChild(characterName)
            card.appendChild(characterNameBG)

            card.onclick = () => {
                const modal = document.getElementById('modal')
                modal.style.visibility = 'visible'

                const modalContent = document.getElementById('modal-content')
                modalContent.innerHTML = ''

                const exitButton = document.createElement('div')
                exitButton.className = 'exit-button'
                exitButton.innerText = 'X'

                const characterImage = document.createElement('div')
                characterImage.style.backgroundImage = `url(${images[character.url.replace(/\D/g, "")]})`
                characterImage.className = 'character-image'

                const name = document.createElement('span')
                name.className = 'character-details'
                name.innerText = `Nome: ${character.name}`

                const rotation = document.createElement('span')
                rotation.className = 'character-details'
                rotation.innerText = `Rotacao: ${convertRotation(character.rotation_period)}`

                const orbital = document.createElement('span')
                orbital.className = 'character-details'
                orbital.innerText = `Translacao: ${convertOrbital(character.orbital_period)}`

                const diameter = document.createElement('span')
                diameter.className = 'character-details'
                diameter.innerText = `Diametro: ${convertDiameter(character.diameter)}`
                
                const climate = document.createElement('span')
                climate.className = 'character-details'
                climate.innerText = `Clima: ${convertClimate(character.climate)}`

                const gravity = document.createElement('span')
                gravity.className = 'character-details'
                gravity.innerText = `Gravidade: ${convertGravity(character.gravity)}`

                const terrain = document.createElement('span')
                terrain.className = 'character-details'
                terrain.innerText = `Terreno: ${convertTerrain(character.terrain)}`

                const water = document.createElement('span')
                water.className = 'character-details'
                water.innerText = `Superficie com agua: ${convertWater(character.surface_water)}`

                const population = document.createElement('span')
                population.className = 'character-details'
                population.innerText = `Populacao: ${convertPopulation(character.population)}`

                modalContent.appendChild(exitButton)
                modalContent.appendChild(characterImage)
                modalContent.appendChild(name)
                modalContent.appendChild(rotation)
                modalContent.appendChild(orbital)
                modalContent.appendChild(diameter)
                modalContent.appendChild(climate)
                modalContent.appendChild(gravity)
                modalContent.appendChild(terrain)
                modalContent.appendChild(water)
                modalContent.appendChild(population)

            }

            mainContent.appendChild(card)
        });

        const nextButton = document.getElementById('next-button')
        const backButton = document.getElementById('back-button')

        nextButton.disabled = !responseJson.next
        backButton.disabled = !responseJson.previous

        backButton.style.visibility = responseJson.previous? 'visible' : 'hidden'
        nextButton.style.visibility = responseJson.next? 'visible' : 'hidden'

        const pagesContainer = document.getElementById('pages-container')
        pagesContainer.innerText = `Pagina ${getPageID(url)} de ${Math.ceil(responseJson.count / 10)}`

        currentPageUrl = url

    } catch (error) {
        console.log(error);
        alert('Erro ao carregar os personagens');
    }
}

async function loadNextPage() {
    if (!currentPageUrl) return;

    try {
        const response = await fetch(currentPageUrl)
        const responseJson = await response.json()

        await loadCharacters(responseJson.next)

    } catch (error) {
        console.log(error)
        alert('Erro ao carregar a próxima página')
    }
}

async function loadPreviousPage() {
    if (!currentPageUrl) return;

    try {
        const response = await fetch(currentPageUrl)
        const responseJson = await response.json()

        await loadCharacters(responseJson.previous)

    } catch (error) {
        console.log(error)
        alert('Erro ao carregar a página anterior')
    }
}

function hideModal() {
    const modal = document.getElementById('modal')
    modal.style.visibility = 'hidden'
}

function getPageID(url) {
    if(url.length === 0) return null;
    const lastChar = url[url.length - 1];
    if(lastChar === 's') return 1;
    return lastChar
}

function convertRotation(rotation) {
    if (rotation === "unknown") {
        return "desconhecido";
    }
    
    return `${rotation} h`;
}

function convertOrbital(orbital) {
    if (orbital === "unknown") {
        return "desconhecido";
    }
    
    return `${orbital} dias`;
}

function convertDiameter(diameter) {
    if (diameter === "unknown") {
        return "desconhecido";
    }
    
    return `${diameter} km` || diameter;
}

function convertGravity(gravity) {
    if (gravity === "unknown") return "desconhecida";
    if (gravity === "1.5 (surface), 1 standard (Cloud City)") return "1.5 atm (superficie), 1 atm (Cloudy City)";
    const newGravity = gravity.replace('standard', 'atm')    
    return newGravity || gravity;
}

function convertWater(water) {
    if (water === "unknown") return "desconhecida";
    
    return `${water}%` || water;
}

function convertPopulation(population) {
    if (population === "unknown") {
        return "desconhecida";
    }
    
    return `${population} hab.` || population;
}

function convertClimate(climate) {
    let clima = climate;
    clima = clima.replace('unknown', 'desconhecido')
    clima = clima.replace('arid',  'arido')
    clima = clima.replace('artificial temperate', 'temperado artificialmente')
    clima = clima.replace('artic',  'artico')
    clima = clima.replace('frozen',  'congelado')
    clima = clima.replace('frigid',  'frigido')
    clima = clima.replace('hot',  'quente')
    clima = clima.replace('humid',  'umido')
    clima = clima.replace('moist',  'umido')
    clima = clima.replace('murky',  'obscuro')
    clima = clima.replace('polluted',  'poluido')
    clima = clima.replace('rocky',  'rochoso')
    clima = clima.replace('subartic',  'subartico')
    clima = clima.replace('superheated',  'superaquecido')
    clima = clima.replace('temperate',  'temperado')
    clima = clima.replace('windy',  'ventoso')
    
    return clima;
}

function convertTerrain(terrain) {
    let terreno = terrain;
    terreno = terreno.replace('unknown', 'desconhecido')
    terreno = terreno.replace('acid pools',  'piscinas acidas')
    terreno = terreno.replace('airless asteroid',  'asteroide se mar')
    terreno = terreno.replace('ash', 'cinzas')
    terreno = terreno.replace('barren',  'esteril')
    terreno = terreno.replace('bogs',  'pantanos')
    terreno = terreno.replace('ice canyons',  'canions de gelo')
    terreno = terreno.replace('rocky canyons',  'canions rochosos')
    terreno = terreno.replace('canyon',  'canion')
    terreno = terreno.replace('ice caves',  'cavernas de gelo')
    terreno = terreno.replace('caves',  'cavernas')
    terreno = terreno.replace('cities',  'cidades')
    terreno = terreno.replace('urban',  'paisagem urbana')
    terreno = terreno.replace('cityscape',  'paisagem urbana')
    terreno = terreno.replace('cliff',  'penhasco')
    terreno = terreno.replace('desert',  'deserto')
    terreno = terreno.replace('field',  'campo')
    terreno = terreno.replace('fungus forests',  'florestas de fungos')
    terreno = terreno.replace('rainforest',  'floresta')
    terreno = terreno.replace('forest',  'floresta')
    terreno = terreno.replace('gas giant',  'gasoso')
    terreno = terreno.replace('glaciers',  'geleiras')
    terreno = terreno.replace('grassland',  'gramado')
    terreno = terreno.replace('grassy hills',  'montes gramados')
    terreno = terreno.replace('grass',  'grama')
    terreno = terreno.replace('hill',  'monte')
    terreno = terreno.replace('rocky islands',  'ilhas rochosas')
    terreno = terreno.replace('island',  'ilha')
    terreno = terreno.replace('jungle',  'selva')
    terreno = terreno.replace('lake',  'lago')
    terreno = terreno.replace('mountain ranges',  'cadeias de montanhas')
    terreno = terreno.replace('mountain',  'montanha')
    terreno = terreno.replace('ocean',  'oceano')
    terreno = terreno.replace('plain',  'planicie')
    terreno = terreno.replace('plateaus',  'platos')
    terreno = terreno.replace('reef',  'falesia')
    terreno = terreno.replace('lava rivers',  'rios de lava')
    terreno = terreno.replace('river',  'rio')
    terreno = terreno.replace('rocky',  'rochoso')
    terreno = terreno.replace('rock arches',  'arcos de rocha')
    terreno = terreno.replace('rock',  'rocha')
    terreno = terreno.replace('savanna',  'savana')
    terreno = terreno.replace('savannah',  'savana')
    terreno = terreno.replace('scrublands',  'matagais')
    terreno = terreno.replace('sinkhole',  'sumidouro')
    terreno = terreno.replace('seas',  'mares')
    terreno = terreno.replace('swamp',  'pantano')
    terreno = terreno.replace('toxic cloudsea',  'mar de nuvens toxicas')
    terreno = terreno.replace('valley',  'vale')
    terreno = terreno.replace('verdant',  'verdejante')
    terreno = terreno.replace('vines',  'videiras')
    terreno = terreno.replace('volcanoes',  'vulcoes')
    
    return terreno;
}