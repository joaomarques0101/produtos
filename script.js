// === Primeiro Carrossel ===

// Seleciona o carrossel
const carousel = document.getElementById('carousel');

// Seleciona os botões de navegação do carrossel
const leftButton = document.querySelector('.carousel-nav .left');
const rightButton = document.querySelector('.carousel-nav .right');

// Variável opcional para número da página (caso você use um contador de página)
const pageNumber = document.querySelector('.page-number');
const cardsPerPage = 1; // ajuste se quiser mais de 1 card por página

// Função para atualizar número da página
function updatePageNumber() {
    if (!carousel) return;
    const scrollLeft = carousel.scrollLeft;
    const cardWidth = carousel.querySelector('.card')?.offsetWidth || 1;
    const currentPage = Math.round(scrollLeft / (cardWidth * cardsPerPage)) + 1;
    if (pageNumber) {
        pageNumber.textContent = currentPage.toString().padStart(2, '0');
    }
}

// Eventos de navegação
if (leftButton && carousel) {
    leftButton.addEventListener('click', () => {
        carousel.scrollBy({
            left: -carousel.offsetWidth,
            behavior: 'smooth'
        });
    });
}

if (rightButton && carousel) {
    rightButton.addEventListener('click', () => {
        carousel.scrollBy({
            left: carousel.offsetWidth,
            behavior: 'smooth'
        });
    });
}

// Atualiza número da página enquanto rola
if (carousel) {
    carousel.addEventListener('scroll', updatePageNumber);
    window.addEventListener('load', updatePageNumber);
}

// === Botão "Browse Location" ===
const browseBtn = document.querySelector('.browse-button');
if (browseBtn) {
    browseBtn.addEventListener('click', () => {
        alert("Você clicou em 'Browse'. Aqui você pode redirecionar ou rolar para uma seção!");
        // Exemplo para rolar até o carrossel:
        // document.querySelector('.carousel-container').scrollIntoView({ behavior: 'smooth' });
    });
}

// === Segundo Carrossel ===
const carousel2 = document.getElementById('carousel2');
const leftButton2 = document.querySelector('#carousel2-nav .left');
const rightButton2 = document.querySelector('#carousel2-nav .right');

if (leftButton2 && carousel2) {
    leftButton2.addEventListener('click', () => {
        carousel2.scrollBy({
            left: -carousel2.offsetWidth,
            behavior: 'smooth'
        });
    });
}

if (rightButton2 && carousel2) {
    rightButton2.addEventListener('click', () => {
        carousel2.scrollBy({
            left: carousel2.offsetWidth,
            behavior: 'smooth'
        });
    });
}

// Botão de Download (caminhão andando dentro do botão e soltando fumaça)
const downloadButton = document.getElementById('downloadButton');

if (downloadButton) {
    downloadButton.addEventListener('click', function () {
        const button = this;

        // Adiciona a classe para iniciar a animação
        button.classList.add('moving');

        // Depois de 2 segundos (tempo da animação), baixa o catálogo
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = 'catalogo.pdf'; // <-- Caminho do seu catálogo
            link.download = 'catalogo.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // (Opcional) Resetar botão depois
            setTimeout(() => {
                button.classList.remove('moving');
            }, 1000);
        }, 2000);
    });
}
const browseButton = document.getElementById('browseButton');

if (browseButton) {
    browseButton.addEventListener('click', function () {
        const button = this;

        // Adiciona a classe que inicia a animação
        button.classList.add('moving');

        // Depois da animação, pode fazer uma ação (exemplo: redirecionar ou abrir algo)
        setTimeout(() => {
            // Aqui você pode, por exemplo, baixar um outro catálogo ou rolar para outra seção
            const link = document.createElement('a');
            link.href = 'catalogo.pdf'; // <-- Mesmo catálogo ou outro arquivo
            link.download = 'catalogo.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // (Opcional) Resetar o botão depois
            setTimeout(() => {
                button.classList.remove('moving');
            }, 1000);
        }, 2000); // Espera 2 segundos da animação
    });
}
