import FILME from '../imagens/FILMESSSSS.png';
import PODEDEX from '../imagens/POKEDEX.png';
import CEP from '../imagens/CEP.png';
import QUIZ from '../imagens/QUIZ.png';
import NUTRI from '../imagens/NUTRI.png';
import TO_DO_LIST from '../imagens/TO-DO-LIST.png';
import BARBEARIA from '../imagens/BARBEARIA.png';
import TOURS from '../imagens/TOURS.png';


import React, { useState } from 'react';
import CardTextInleft from './CardTextInleft';
import CardTextInRight from './CardTextInRight';

import './Projeto.css';

const Projetos = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const projects = [

   <CardTextInleft text="
   A landing page da barbearia é um projeto desenvolvido com HTML, CSS e JavaScript, apresentando um design moderno e elegante que transmite a essência do local. Com uma imagem impactante, cores suaves e tipografia cuidadosa, a página atrai os visitantes e cria uma sensação de profissionalismo. A navegação intuitiva permite explorar os serviços oferecidos, como cortes de cabelo estilizados, e barba bem cuidada . Um formulário de contato facilita a reserva de horários, enquanto o uso de JavaScript adiciona interatividade e animações sutis, tornando a experiência do usuário envolvente. Essa landing page é uma poderosa ferramenta de marketing, atraindo clientes em potencial para conhecer os serviços excepcionais da barbearia." 
   header="LANDING PAGE: BARBEARIA"
   src={BARBEARIA}
   href="https://eric-byte-150.github.io/Barbeariacerto/"
   hrefCode="https://github.com/Eric-byte-150/Barbeariacerto"/>
   ,

    
    <CardTextInRight text="
   O projeto movieLab apresenta uma criação notável: um sistema de listagem dos melhores filmes. Desenvolvido com HTML, CSS, JavaScript e React, ele proporciona uma experiência interativa e envolvente para os usuários. Ao acessar a página, os visitantes são atraídos por uma interface elegante e intuitiva. A lista dos melhores filmes é exibida de forma organizada, mostrando títulos renomados com imagens e informações básicas. Ao clicar em um filme, uma nova tela de detalhes é exibida, revelando informações como o orçamento e a bilheteria. A transição suave entre as telas, graças ao React, aliada à usabilidade e ao design responsivo, torna a experiência agradável. Esse projeto é uma demonstração impressionante, unindo tecnologias essenciais para criar uma plataforma interativa e visualmente atraente para explorar os melhores filmes." 
   header="LISTA DE MELHORES FILMES"
   src={FILME}
   href="https://eric-byte-150.github.io/Lista-de-filmes/"
   hrefCode="https://github.com/Eric-byte-150/Lista-de-filmes"
   />,
 
   <CardTextInRight text="A Pokédex é uma impressionante ferramenta desenvolvida com tecnologias modernas como React.js, JavaScript, HTML e CSS, que oferece uma gama completa de informações abrangentes sobre uma ampla variedade de Pokémon. Com um design elegante, intuitivo e interativo, os usuários podem mergulhar em uma extensa lista de Pokémon, onde podem desfrutar de visualizações detalhadas, incluindo imagens vibrantes, características únicas, tipos variados, habilidades especiais e estatísticas aprofundadas. Além disso, a Pokédex apresenta um recurso avançado de pesquisa, permitindo que os usuários realizem pesquisas precisas por nome específico ou tipo de Pokémon, proporcionando uma experiência de busca aprimorada e eficiente. Essa plataforma excepcionalmente envolvente e visualmente atraente é um verdadeiro deleite para os fãs do universo Pokémon, oferecendo uma jornada rica em detalhes e informações valiosas sobre essas criaturas fascinantes.." 
   header="POKEDEX"
   src={PODEDEX}
   href="https://eric-byte-150.github.io/Pokedex/"
   hrefCode="https://github.com/Eric-byte-150/Pokedex"
   />,
   <CardTextInRight text="O Buscador de CEP é uma aplicação altamente funcional e prática, desenvolvida com as tecnologias JavaScript, HTML e CSS. Essa incrível ferramenta oferece aos usuários a capacidade de buscar e obter informações precisas sobre endereços com base em um CEP fornecido. Ao inserir o CEP desejado na interface intuitiva, o sistema realiza uma consulta direta a uma API de serviço de CEP confiável e, em questão de segundos, retorna dados detalhados sobre o logradouro, bairro, cidade e estado correspondentes ao CEP fornecido.Com um design limpo e uma usabilidade amigável, o Buscador de CEP torna o processo de localização de informações de endereços simples e eficiente. Essa ferramenta se torna indispensável em várias situações, desde a necessidade de preencher formulários online com precisão até atividades que envolvem a análise de dados geográficos." 
   header="BUSCADOR DE CEP"
   src={CEP}
   href="https://eric-byte-150.github.io/BuscadorDeCEP/"
   hrefCode="https://github.com/Eric-byte-150/BuscadorDeCEP"/>
   ,
   <CardTextInleft text="
   O Quiz de Programação é uma experiência interativa e desafiadora desenvolvida com as tecnologias React.js, JavaScript, HTML e CSS. Essa emocionante aplicação foi criada para testar e aprimorar os conhecimentos em programação por meio de perguntas cuidadosamente elaboradas. O Quiz abrange uma ampla gama de áreas da programação, abordando conceitos fundamentais, algoritmos, estruturas de dados, linguagens de programação e muito mais.Uma das principais características do Quiz de Programação é a capacidade de selecionar diferentes níveis de dificuldade, permitindo que os usuários escolham entre iniciante, intermediário e avançado. Isso oferece uma oportunidade única de desafiar e expandir as habilidades de programação em diferentes níveis de complexidade. Cada pergunta é apresentada de forma clara e concisa, exigindo raciocínio lógico e conhecimento técnico para selecionar a resposta correta." 
   header="QUIZ"
   src={QUIZ}
   href="https://eric-byte-150.github.io/QuizPrograma-o"
   hrefCode="https://github.com/Eric-byte-150/QuizPrograma-o"
   />,

   <CardTextInRight text="A Landing Page de Nutrição é um website completo desenvolvido com HTML, CSS e JavaScript, voltado para promover serviços relacionados à nutrição e saúde. Com um design atrativo e informativo, a página fornece informações sobre os benefícios de uma alimentação saudável, dicas nutricionais, opções de consultas com profissionais especializados e diversos recursos interativos para auxiliar na busca por uma vida mais saudável. Os usuários podem preencher formulários de contato para agendar consultas e receber orientações personalizadas. A Landing Page de Nutrição é uma ferramenta essencial para quem busca informações e serviços de nutrição de qualidade, proporcionando uma experiência agradável e informativa.Em suma, a Landing Page de Nutrição é uma poderosa ferramenta online para quem busca informações confiáveis sobre nutrição e saúde. Seja para marcar consultas, obter dicas valiosas ou descobrir receitas saudáveis, essa página oferece tudo o que você precisa para iniciar sua jornada em direção a uma vida mais saudável e equilibrada." 
   header="LANDING PAGE:NUTRI"
   src={NUTRI}
   href="https://eric-byte-150.github.io/SiteNutri/"
   hrefCode="https://github.com/Eric-byte-150/SiteNutri"/>,

   <CardTextInleft text="
   O Site de Tours é uma plataforma desenvolvida com React.js, JavaScript, HTML e CSS, que oferece informações e reservas de tours em diferentes destinos turísticos. Com uma ampla variedade de opções de destinos, desde praias paradisíacas até cidades históricas, o site permite que os usuários explorem as atrações disponíveis, visualizem fotos, detalhes dos tours e façam reservas diretamente na plataforma. Além disso, o Site de Tours consome uma API de turismo para exibir informações atualizadas sobre disponibilidade, preços e itinerários. Com um design atraente, responsivo e recursos interativos, o Site de Tours proporciona uma experiência completa e personalizada para os viajantes em potencial, ajudando-os a planejar e desfrutar de suas viagens de forma simples e conveniente." 
   header="TOURS"
   src={TOURS}
   href="https://eric-byte-150.github.io/Tours/"
   hrefCode="https://github.com/Eric-byte-150/Tours"
   />,

   <CardTextInRight text="
   O Todo List é um aplicativo de gerenciamento de tarefas desenvolvido com React.js, JavaScript, HTML e CSS. Com essa poderosa ferramenta, os usuários podem criar, editar e marcar tarefas como concluídas, proporcionando uma maneira eficiente de organizar suas atividades diárias, projetos e compromissos. O aplicativo oferece recursos avançados de categorização, permitindo que as tarefas sejam organizadas por categorias, prazos e prioridades. Além disso, possui funcionalidades de filtragem e pesquisa, que facilitam a localização rápida de tarefas específicas. Com um design intuitivo e responsivo, o Todo List torna o gerenciamento de tarefas uma tarefa simples e produtiva.Os usuários podem criar lembretes e definir notificações para garantir que nenhuma tarefa importante seja esquecida. Com recursos de arrastar e soltar, é possível reorganizar as tarefas conforme a necessidade. O Todo List também oferece a opção de compartilhar listas de tarefas com outras pessoas, tornando a colaboração em projetos em equipe mais eficiente. " 
   header="TO-DO-LIST"
   src={TO_DO_LIST}
   href="https://eric-byte-150.github.io/Lista-de-Tarefas/"
   hrefCode="https://github.com/Eric-byte-150/Lista-de-Tarefas"
   />
  ];

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 4);

  const handleClick = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <section className="Projetos" id='projetos'>
      <h1>PROJETOS</h1>
      <div id="projectsVisible">
        {visibleProjects.map((project, index) => (
          <div className="projeto" key={index}>
            {project}
          </div>
        ))}
      </div>

<div className="ver">
<button className="ver-mais-menos" onClick={handleClick}>
        {showAllProjects ? 'Ver Menos' : 'Ver Mais'}
      </button>
</div>
      
    </section>
  );
};

export default Projetos;
