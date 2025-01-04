document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle'); // Botão de toggle do menu
    const navLinks = document.getElementById('navLinks'); // Links de navegação
    const scrollToTopButton = document.getElementById('scrollToTop');
        
        
        // Adiciona o evento de clique no botão de toggle do menu
        menuToggle.addEventListener('click', function() {
            // Alterna a classe 'show' para mostrar ou ocultar os links de navegação
            navLinks.classList.toggle('show');
        });
    
     // Mostra ou esconde o botão de rolagem para o topo
       window.addEventListener('scroll', function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopButton.style.display = 'block'; // Mostra o botão
        } else {
            scrollToTopButton.style.display = 'none'; // Esconde o botão
        }
    });
    
    // Adiciona um evento de clique para rolar para o topo
    scrollToTopButton.addEventListener('click', function(e) {
     e.preventDefault(); // Previne o comportamento padrão do link
     window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola suavemente para o topo
    })

   

});

let currentImages = []; // Array para armazenar as imagens
let currentIndex = 0; // Índice atual da imagem

// Função para abrir o modal com as imagens
function openModal(images) {
    currentImages = images;
    currentIndex = 0;
    updateModalImage();
    toggleNavigationButtons();
    const modal = document.getElementById('modal');
    modal.classList.add('open');
}

// Atualiza a imagem do modal
function updateModalImage() {
    const modalImage = document.getElementById('modal-image');
    modalImage.src = currentImages[currentIndex];
}

// Função para alternar a visibilidade dos botões de navegação
function toggleNavigationButtons() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    // Verifica se há imagens anteriores ou seguintes
    if (currentIndex === 0) {
        prevButton.classList.add('hidden'); // Oculta o botão "prev"
    } else {
        prevButton.classList.remove('hidden'); // Exibe o botão "prev"
    }

    if (currentIndex === currentImages.length - 1) {
        nextButton.classList.add('hidden'); // Oculta o botão "next"
    } else {
        nextButton.classList.remove('hidden'); // Exibe o botão "next"
    }
}

// Função para mudar de página (imagem)
function changePage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = currentImages.length - 1; // Volta ao final
    if (currentIndex >= currentImages.length) currentIndex = 0; // Vai para o início
    updateModalImage();
    toggleNavigationButtons(); // Atualiza a visibilidade dos botões
}

// Fecha o modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('open');
}

// Função para alternar o zoom na imagem
function toggleZoom() {
    const modalImage = document.getElementById('modal-image');
    modalImage.classList.toggle('zoomed-in');
}

let currentLanguage = 'en';

const texts = {
    en: {
        projectsTitle: 'Certificates',
        projectsHeader: 'Take a look at my certificates!',
        figma: 'Renan Naves 2024 - Layout inspired  by Figma templates',
        home: "Home",
        about: "About",
        projects: "Projects",
        contact: "Contact",
        faq: "FAQ",
        faqP: "A FAQ page that provides quick answers to common questions, featuring an intuitive accordion-style interface.",
        form: "Form",
        formP: "A form is an HTML element used to collect user input and submit data to a server for processing.",
        ld: "Landing page",
        ldP: "A landing page is a single web page aimed at capturing leads or driving specific actions.",
        tip: "Tip Calculator",
        tipP: "A tip calculator helps users determine the tip amount based on the bill total and chosen percentage.",
        port: "Portfolio",
        portP: "A personal portfolio showcasing my projects and skills, built with HTML, CSS, and JavaScript."
    },
    pt: {
        projectsTitle: 'Certificados',
        projectsHeader: 'Dê uma olhada nos meus certificados!',
        figma: 'Renan Naves 2024 - Layout inspirado por templates do Figma',
        home: "Início",
        about: "Sobre",
        projects: "Projetos",
        contact: "Contato",
        faq: "Perguntas Frequentes",
        faqP: "Uma página de FAQ que fornece respostas rápidas para perguntas comuns, com uma interface intuitiva em estilo acordeão.",
        form: "Formulário",
        formP: "Um formulário é um elemento HTML usado para coletar dados do usuário e enviar para processamento no servidor.",
        ld: "Página de Destino",
        ldP: "Uma página de destino é uma página web única destinada a captar leads ou impulsionar ações específicas.",
        tip: "Calculadora de Gorjeta",
        tipP: "Uma calculadora de gorjetas ajuda os usuários a determinar o valor da gorjeta com base no total da conta e na porcentagem escolhida.",
        port: "Portfólio",
        portP: "Um portfólio pessoal mostrando meus projetos e habilidades, construído com HTML, CSS e JavaScript."
    }
}

function toggleLanguage() {
    if (currentLanguage === 'en') {
        currentLanguage = 'pt';
        document.getElementById('projectsTitle').textContent = texts.pt.projectsTitle;
        document.getElementById('projectsHeader').textContent = texts.pt.projectsHeader;
        document.getElementById('figma').textContent = texts.pt.figma;
        document.getElementById('home').textContent = texts.pt.home;
        document.getElementById('about').textContent = texts.pt.about;
        document.getElementById('projects').textContent = texts.pt.projects;
        document.getElementById('contact').textContent = texts.pt.contact;
        document.getElementById('ptImage').style.display = 'none'; // Esconde a imagem PT
        document.getElementById('enImage').style.display = 'inline'; // Mostra a imagem EN
        document.getElementById('faq').textContent = texts.pt.faq;
        document.getElementById('faqP').textContent = texts.pt.faqP;
        document.getElementById('form').textContent = texts.pt.form;
        document.getElementById('formP').textContent = texts.pt.formP;
        document.getElementById('ld').textContent = texts.pt.ld;
        document.getElementById('ldP').textContent = texts.pt.ldP;
        document.getElementById('tip').textContent = texts.pt.tip;
        document.getElementById('tipP').textContent = texts.pt.tipP;
        document.getElementById('port').textContent = texts.pt.port;
        document.getElementById('portP').textContent = texts.pt.portP;
    } else {
        currentLanguage = 'en';
        document.getElementById('projectsTitle').textContent = texts.en.projectsTitle;
        document.getElementById('projectsHeader').textContent = texts.en.projectsHeader;
        document.getElementById('figma').textContent = texts.en.figma;
        document.getElementById('home').textContent = texts.en.home;
        document.getElementById('about').textContent = texts.en.about;
        document.getElementById('projects').textContent = texts.en.projects;
        document.getElementById('contact').textContent = texts.en.contact;
        document.getElementById('ptImage').style.display = 'inline'; // Mostra a imagem PT
        document.getElementById('enImage').style.display = 'none'; // Esconde a imagem EN
        document.getElementById('faq').textContent = texts.en.faq;
        document.getElementById('faqP').textContent = texts.en.faqP;
        document.getElementById('form').textContent = texts.en.form;
        document.getElementById('formP').textContent = texts.en.formP;
        document.getElementById('ld').textContent = texts.en.ld;
        document.getElementById('ldP').textContent = texts.en.ldP;
        document.getElementById('tip').textContent = texts.en.tip;
        document.getElementById('tipP').textContent = texts.en.tipP;
        document.getElementById('port').textContent = texts.en.port;
        document.getElementById('portP').textContent = texts.en.portP;
    }
}

function handleCardClick(element, event) {
    const url = element.getAttribute('data-url');
    if (url) {
        window.location.href = url;
    } else {
        openModal([element.querySelector('img').src]);
    }
}