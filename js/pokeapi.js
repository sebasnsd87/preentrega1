const input = document.querySelector("input");
const button = document.querySelector("button");
const pokemonContainer = document.querySelector(".pokemon-container");

button.addEventListener("click", (e) => {
    e.preventDefault();
    traerPokemon(input.value);
})

function crearPokemon(pokemon) {
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    const h3 = document.createElement('h3')
    h3.textContent = pokemon.name;

    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(h3);

    pokemonContainer.appendChild(div);
    input.value = '';
}

function traerPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then((res) => {
        if (!res.ok) {
            throw new Error("No se encontró el pokemon.");
        }
        return res.json();
    })
    .then((data) => {
        if (data.name) {
            Swal.fire('Se encontró el pokemon.');
            crearPokemon(data);
        } else {
            Swal.fire('No se encontró el pokemon.');
        }
    })
    .catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.message,
        })
        input.value = '';
    })
}