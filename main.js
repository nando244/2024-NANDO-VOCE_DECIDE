const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

// Define as perguntas e alternativas
const perguntas = [
    {
        enunciado: "Qual é a principal ameaça para a Mata Atlântica atualmente?",
        alternativas: [
            {
                texto: "Desmatamento e expansão agrícola",
                afirmacao: "O desmatamento e a expansão agrícola são as maiores ameaças, levando à perda de habitat e redução da biodiversidade."
            },
            {
                texto: "Preservação e reflorestamento",
                afirmacao: "A preservação e reflorestamento são estratégias para combater as ameaças, mas não são ameaças em si mesmas."
            }
        ]
    },
    {
        enunciado: "Qual é um dos animais emblemáticos da Mata Atlântica?",
        alternativas: [
            {
                texto: "Onça-pintada",
                afirmacao: "A onça-pintada é um dos animais emblemáticos da Mata Atlântica, sendo um predador topo e importante para o equilíbrio do ecossistema."
            },
            {
                texto: "Pinguim",
                afirmacao: "O pinguim não é nativo da Mata Atlântica; ele é encontrado principalmente em regiões do Hemisfério Sul, como a Antártica."
            }
        ]
    },
    {
        enunciado: "Qual é uma das funções ecológicas da Mata Atlântica?",
        alternativas: [
            {
                texto: "Regulação do ciclo da água",
                afirmacao: "A Mata Atlântica desempenha um papel crucial na regulação do ciclo da água, ajudando na formação de nuvens e no fornecimento de água para os rios."
            },
            {
                texto: "Produção de petróleo",
                afirmacao: "A produção de petróleo não é uma função ecológica da Mata Atlântica e está associada a impactos ambientais negativos."
            }
        ]
    },
    {
        enunciado: "Qual é a importância das áreas de proteção na Mata Atlântica?",
        alternativas: [
            {
                texto: "Conservação da biodiversidade",
                afirmacao: "Áreas de proteção ajudam a conservar a biodiversidade ao preservar habitats naturais e espécies ameaçadas."
            },
            {
                texto: "Expansão urbana",
                afirmacao: "A expansão urbana pode ameaçar áreas de proteção e reduzir a eficácia da conservação da biodiversidade."
            }
        ]
    },
    {
        enunciado: "Qual é uma prática eficaz para a conservação da Mata Atlântica?",
        alternativas: [
            {
                texto: "Reflorestamento e restauração de habitats",
                afirmacao: "O reflorestamento e a restauração de habitats são práticas eficazes para recuperar áreas degradadas e promover a recuperação da Mata Atlântica."
            },
            {
                texto: "Aumento da agricultura em áreas protegidas",
                afirmacao: "Aumentar a agricultura em áreas protegidas pode causar mais degradação e perda de habitat, prejudicando a conservação."
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
