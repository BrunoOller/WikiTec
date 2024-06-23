// Tamanhos de fonte mínimo e máximo
const MIN_FONT_SIZE = 12;
const MAX_FONT_SIZE = 24;

// Função para alterar o tamanho da fonte
function changeTextSize(action) {
    const body = document.body;
    let currentSize = parseFloat(window.getComputedStyle(body, null).getPropertyValue('font-size'));
    if (action === 'aumentar' && currentSize < MAX_FONT_SIZE) {
        currentSize += 2;
    } else if (action === 'diminuir' && currentSize > MIN_FONT_SIZE) {
        currentSize -= 2;
    }
    body.style.fontSize = currentSize + 'px';
}

// Função para alternar entre temas
function mudarTema() {
    document.body.classList.toggle('dark-theme');
    const logo = document.querySelector('.logo');
    if (document.body.classList.contains('dark-theme')) {
        logo.src = './Assets/Img/Logo-Icons/logo-escuro.png';
    } else {
        logo.src = './Assets/Img/Logo-Icons/logo-claro.png';
    }
}

// Adicionando os EventListeners para os respectivos botões
document.getElementById('aumentar-texto').addEventListener('click', () => changeTextSize('aumentar'));
document.getElementById('diminuir-texto').addEventListener('click', () => changeTextSize('diminuir'));
document.getElementById('mudar-tema').addEventListener('click', mudarTema);