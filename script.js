Aqui está o código completo do arquivo script.js.

Este script controla a interatividade do seu site: ele cria o botão de Modo Escuro dinamicamente no canto da tela e faz as seções de texto surgirem com uma animação suave à medida que você rola a página para baixo.

Crie um arquivo chamado exatamente script.js (na mesma pasta do seu arquivo index.html) e cole o seguinte código:

JavaScript
// Aguarda todo o conteúdo da página (HTML) carregar antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       1. CRIAÇÃO E CONFIGURAÇÃO DO BOTÃO DE MODO ESCURO (DARK MODE)
       ========================================================================== */
    const darkModeBtn = document.createElement('button');
    darkModeBtn.innerText = '🌓 Alternar Modo';
    
    // Aplicando estilos diretamente no botão via JavaScript para mantê-lo fixo na tela
    darkModeBtn.style.position = 'fixed';
    darkModeBtn.style.bottom = '20px';
    darkModeBtn.style.right = '20px';
    darkModeBtn.style.padding = '12px 20px';
    darkModeBtn.style.backgroundColor = '#2e7d32';
    darkModeBtn.style.color = 'white';
    darkModeBtn.style.border = 'none';
    darkModeBtn.style.borderRadius = '30px';
    darkModeBtn.style.cursor = 'pointer';
    darkModeBtn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
    darkModeBtn.style.zIndex = '1000';
    darkModeBtn.style.fontWeight = 'bold';
    darkModeBtn.style.transition = 'transform 0.2s ease';

    // Adiciona o botão criado dentro do <body> do HTML
    document.body.appendChild(darkModeBtn);

    // Efeito visual simples ao passar o mouse por cima do botão
    darkModeBtn.addEventListener('mouseenter', () => darkModeBtn.style.transform = 'scale(1.05)');
    darkModeBtn.addEventListener('mouseleave', () => darkModeBtn.style.transform = 'scale(1)');

    // Evento de clique para alternar as cores do site
    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        // Se o modo escuro estiver ativo, muda as cores para tons escuros
        if (document.body.classList.contains('dark-theme')) {
            document.body.style.backgroundColor = '#121212';
            document.body.style.color = '#e0e0e0';
            
            document.querySelectorAll('section').forEach(sec => {
                sec.style.backgroundColor = '#1e1e1e';
                sec.style.color = '#e0e0e0';
                sec.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.5)';
            });
            
            document.querySelectorAll('p').forEach(p => p.style.color = '#b0b0b0');
            document.querySelectorAll('li').forEach(li => li.style.color = '#b0b0b0');
        } else {
            // Caso contrário, volta para o padrão do Modo Claro
            document.body.style.backgroundColor = '#f4f7f4';
            document.body.style.color = '#333333';
            
            document.querySelectorAll('section').forEach(sec => {
                sec.style.backgroundColor = '#ffffff';
                sec.style.color = '#333333';
                sec.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
            });
            
            document.querySelectorAll('p').forEach(p => p.style.color = '#4a4a4a');
            document.querySelectorAll('li').forEach(li => li.style.color = '#4a4a4a');
        }
    });

    /* ==========================================================================
       2. EFEITO DE ANIMAÇÃO AO ROLAR A PÁGINA (SCROLL REVEAL)
       ========================================================================== */
    const secoes = document.querySelectorAll('section');
    
    // Configura o estado inicial invisível para todas as seções <section>
    secoes.forEach(sec => {
        sec.style.opacity = '0';
        sec.style.transform = 'translateY(30px)';
        sec.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    });

    // Função que verifica a posição da janela e revela o conteúdo
    const revelarAoRolar = () => {
        secoes.forEach(sec => {
            const posicaoTopoDaSecao = sec.getBoundingClientRect().top;
            const gatilhoNaTela = window.innerHeight * 0.85; // Ativa quando a seção ocupa 85% do final da tela

            if (posicaoTopoDaSecao < gatilhoNaTela) {
                sec.style.opacity = '1';
                sec.style.transform = 'translateY(0)';
            }
        });
    };

    // Escuta o movimento de rolagem (scroll) do usuário
    window.addEventListener('scroll', revelarAoRolar);
    
    // Dispara a função uma vez logo no início para carregar o que já estiver visível na tela
    revelarAoRolar();
});
