const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

// Define as perguntas e alternativas
const perguntas = [
    {
        enunciado: "Qual é a principal missão do Exército Brasileiro?",
        alternativas: [
            {
                texto: "Defesa da soberania nacional",
                afirmacao: "A principal missão do Exército Brasileiro é a defesa da soberania nacional e a proteção do território brasileiro contra ameaças externas."
            },
            {
                texto: "Promoção de eventos culturais",
                afirmacao: "Embora o Exército possa participar de eventos culturais, sua principal missão é a defesa da soberania e a segurança nacional."
            }
        ]
    },
    {
        enunciado: "Qual é o nome do comando máximo do Exército Brasileiro?",
        alternativas: [
            {
                texto: "Comando do Exército",
                afirmacao: "O Comando do Exército é a principal autoridade que lidera as Forças Terrestres e coordena todas as atividades do Exército Brasileiro."
            },
            {
                texto: "Comando da Marinha",
                afirmacao: "O Comando da Marinha é responsável pela Força Naval, não pelo Exército Brasileiro."
            }
        ]
    },
    {
        enunciado: "Qual é a unidade de elite do Exército Brasileiro?",
        alternativas: [
            {
                texto: "Força de Operações Especiais",
                afirmacao: "A Força de Operações Especiais é uma unidade de elite do Exército Brasileiro, especializada em operações de alto risco e táticas especiais."
            },
            {
                texto: "Corpo de Bombeiros",
                afirmacao: "O Corpo de Bombeiros é uma força distinta do Exército Brasileiro, focada em combate a incêndios e resgate."
            }
        ]
    },
    {
        enunciado: "Qual é a importância dos centros de instrução do Exército Brasileiro?",
        alternativas: [
            {
                texto: "Treinamento e formação de soldados",
                afirmacao: "Os centros de instrução são essenciais para o treinamento e a formação de soldados, preparando-os para suas funções e responsabilidades."
            },
            {
                texto: "Organização de eventos sociais",
                afirmacao: "Os centros de instrução se concentram em treinamento militar e formação, não em eventos sociais."
            }
        ]
    },
    {
        enunciado: "Qual é a principal função dos batalhões no Exército Brasileiro?",
        alternativas: [
            {
                texto: "Realização de operações militares",
                afirmacao: "Os batalhões são unidades táticas que realizam operações militares no campo, com diferentes especialidades e funções conforme a missão."
            },
            {
                texto: "Administração pública",
                afirmacao: "A administração pública não é uma função dos batalhões, que estão focados em operações militares e de defesa."
            }
        ]
    },
];

// Variáveis de controle
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

// Função para mostrar as perguntas
function mostrarPerguntas() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostrarAlternativas();
}

function mostrarAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

// Função para lidar com a resposta selecionada
function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++;
    mostrarPerguntas();
}

// Função para mostrar o resultado final
function mostraResultado() {
    caixaPerguntas.textContent = "Fim do quiz!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

// Inicializa o quiz
mostrarPerguntas();
