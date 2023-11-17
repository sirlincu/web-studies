function carregarEstados() {
    // https://servicodados.ibge.gov.br/api/v1/localidades/estados

    const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
    console.log(response);

    const estados = await response.json();
    console.log(estados);
}

function carregarCidades() {

}

function preencherSelectEstados(estados) {
    for(let i in estados) {
        console.log(estados[i].nome);
    }

    limparSelectEstados();

    for(let estado of estados) {
        // const nome = estado.nome;
        // const uf = estado.sigla;

        // DESTRUCTING 
        const { nome, sigla } = estado;
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