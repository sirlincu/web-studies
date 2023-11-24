function carregarEstados() {
    // https://servicodados.ibge.gov.br/api/v1/localidades/estados

    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    console.log(response);

    const estados = await response.json();
    console.log(estados);

    preencherSelectEstados(estados);

}

async function carregarCidades() {
    limparSelect("cidades");

    const selectEstados = document.getElementById("estados");

    const estado_value = selectEstados.options[estado_index].value;

    if (estado_index === 0 || estado_value === "") {
        return;
    }

    const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado_value}/municipios`)

    const cidades = await response.json();
    preencherSelectCidades(cidades);
}

function preencherSelectCidades(cidades) {
    const selectCidades = document.getElementById("cidades");

    for(const cidade of cidades) {
        const { id, nome } = cidade;

        const option = document.createElement("option");

        option.value = id;
        option.innerHTML = nome;

        selectCidades.appendChild(option);
    }
}

function preencherSelectEstados(estados) {
    for(let i in estados) {
        console.log(estados[i].nome);
    }

    limparSelectEstados()

    const select = document.getElementById("estados");

    estados.sort( (a, b) => a.nome.localeCompare(b.nome) );

    const regiao_norte = estados.filter( (estado) => estado.regiao.id === 3);
    console.log(regiao_norte);

    for(let estado of estados) {
        // const nome = estado.nome;
        // const uf = estado.sigla;

        // DESTRUCTING 
        const { id, nome, sigla } = estado;
        console.log(nome, sigla);

        const option = document.createElement("option");

        option.value = id;

        // option.innerHTML = nome + ' - ' + sigla;

        // TEMPLATE LITERALS
        option.innerHTML =  `${nome}-${sigla}`;

        select.appendChild(option);

        // HYDRATION


    }
}

function limparSelectEstados() {
    const select = document.getElementById("estados");

    while(select.length > 1) {
        select.remove(1);
    }
}

function limparSelect(campo) {
    const select = document.getElementById(campo);

    while(select.length > 1) {
        select.remove(1);
    }
}

// Classica
function soma (a, b) {
    return a + b;
}

// Arrow functions
const somaArrow = (a, b) => {
    return a + b;
}

// Arrow function in line: retorno direto
const somaArrowInLine = (a, b) => a + b;