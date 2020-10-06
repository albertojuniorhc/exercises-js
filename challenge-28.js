/*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."
  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML; ( NOVA URL - https://apicep.com/api-de-consulta/)
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

const endereco = document.querySelector('[data-js="endereco"]')
const bairro = document.querySelector('[data-js="bairro"]')
const cidade = document.querySelector('[data-js="cidade"]')
const estado = document.querySelector('[data-js="estado"]')
const input = document.querySelector('[data-js="input"]')
const button = document.querySelector('[data-js="button"]')
const aviso = document.querySelector('[data-js="status"]')

button.addEventListener('click', handleClick, false);

function handleClick(event) {
  event.preventDefault();
  getAddressByCEP();
};

function getAddressByCEP() {
  const URL = `https://ws.apicep.com/cep/${input.value}.json`

  fetch(URL)
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      fillTextHtml(data);
    });
}

function fillTextHtml(data) {
  if (isDataOk(data)) {
    aviso.innerText = `Informações para o CEP ${input.value}`
    endereco.innerText = data.address;
    bairro.innerText = data.district;
    cidade.innerText = data.city;
    estado.innerText = data.state
  } else {
    aviso.innerText = `Não foram encontradas informaçoes para o CEP ${input.value}`
    endereco.innerText = '-';
    bairro.innerText = '-';
    cidade.innerText = '-';
    estado.innerText = '-';
  }
};

function isDataOk(data) {
  return data.ok === true;
}