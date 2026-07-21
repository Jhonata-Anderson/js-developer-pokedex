function getElement(id) {
    return document.getElementById(id);
}

function updateStatBar(statName, stats, valueId, barId) {
    const stat = stats.find((item) => item.stat.name === statName);

    if (!stat) return;

    getElement(valueId).innerText = stat.base_stat;

    const percentage = Math.min((stat.base_stat / 160) * 100, 100);
    const barElement = getElement(barId);
    barElement.style.width = `${percentage}%`;
    barElement.style.backgroundColor = stat.base_stat >= 50 ? '#4BC59F' : '#FF6B6B';
}

async function showPokemon(id) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = await response.json();

        const mainType = pokemon.types[0].type.name;

        getElement("modalName").innerText = pokemon.name;
        getElement("modalNumber").innerText = `#${String(pokemon.id).padStart(3, '0')}`;
        getElement("modalImage").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
        getElement("modalTypes").innerHTML = pokemon.types
            .map((item) => `<span class="type-badge ${item.type.name}">${item.type.name}</span>`)
            .join('');
        getElement("modalCard").className = `modal-card ${mainType}`;
        getElement("modalHeader").className = `modal-header ${mainType}`;
        getElement("modalHeight").innerText = `${pokemon.height / 10} m`;
        getElement("modalWeight").innerText = `${pokemon.weight / 10} kg`;

        const statConfigs = [
            ['hp', 'statHp', 'barHp'],
            ['attack', 'statAtk', 'barAtk'],
            ['defense', 'statDef', 'barDef'],
            ['special-attack', 'statSpAtk', 'barSpAtk'],
            ['special-defense', 'statSpDef', 'barSpDef'],
            ['speed', 'statSpeed', 'barSpeed']
        ];

        statConfigs.forEach(([statName, valueId, barId]) => updateStatBar(statName, pokemon.stats, valueId, barId));
        getElement("pokemonModal").classList.add("show");
    } catch (error) {
        console.error("Erro ao carregar detalhes:", error);
    }
}

function closeModal() {
    getElement("pokemonModal").classList.remove("show");
}
