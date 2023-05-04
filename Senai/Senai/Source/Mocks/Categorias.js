import cat1 from '../../assets/CAI.png';
import cat2 from '../../assets/FIC.png';
import cat3 from '../../assets/CT.png';

const categorias = [
    {
        tipo: 'CAI - Curso de Aprendizagem Industrial',
        cursos: [
            {
                nome: 'Eletricista de Manutenção Eletroeletrônica',
                dur: '1600 Horas.',
                ensino: 'Presencial',
                descricao: 'O curso de Aprendizagem Industrial Eletricista de Manutenção Eletroeletrônica tem por objetivo proporcionar qualificação profissional na instalação e manutenção de sistemas eletroeletrônicos em baixa tensão, de acordo com normas técnicas, de qualidade, de saúde e segurança no trabalho e de meio ambiente.'
            },
            {
                nome: 'Mecânico de Bombas, Motores, Compressores e Equipamentos de Transmissão',
                dur: '800 Horas.',
                ensino: 'Presencial',
                descricao: 'O curso de Aprendizagem Industrial Mecânico de Bombas, Motores, Compressores e Equipamentos de Transmissão tem por objetivo proporcionar qualificação profissional para a realização da manutenção corretiva e preventiva em conjuntos mecânicos de máquinas e equipamentos, em conformidade às normas e procedimentos de saúde e segurança no trabalho, de meio ambiente e de qualidade.'
            },
            {
                nome: 'Mecânico de Usinagem',
                dur: '1600 Horas',
                ensino: 'Presencial',
                descricao: 'O Curso de Aprendizagem Industrial Mecânico de Usinagem tem por objetivo proporcionar qualificação profissional na execução de atividades relacionadas à usinagem de peças em materiais ferrosos e não ferrosos, seguindo normas e procedimentos técnicos, de manutenção, segurança, meio ambiente e qualidade.'
            }
        ],
        img: cat1
    },
    {
        tipo: 'FIC - Formação Inicial Continuada',
        cursos: [
            {
                nome: 'Alimentos Funcionais',
                dur: '20 Horas',
                ensino: 'A distância',
                descricao: 'O curso de Aperfeiçoamento Profissional de Alimentos Funcionais tem por objetivo o desenvolvimento de capacidades relativas ao aperfeiçoamento de acadêmicos, docentes, pesquisadores, profissionais das indústrias da área de alimentos e o público no geral sobre alimentos funcionais, bem como sobre as substâncias bioativas contidas nestes alimentos, visando sua aplicação na indústria de alimentos, de acordo com os seus requisitos legais.'
            },
            {
                nome: 'Automação Hidraúlica Industrial',
                dur: '40 Horas',
                ensino: 'Presencial',
                descricao: 'O Curso de Aperfeiçoamento Profissional Automação Hidráulica Industrial tem por objetivo o desenvolvimento de conhecimentos e habilidades básicas referentes aos componentes hidráulicos utilizados em máquinas, equipamentos e dispositivos.'
            },
            {
                nome: 'Controladores Lógicos Programáveis',
                dur: '60 Horas',
                ensino: 'Presencial',
                descricao: 'O Curso de Aperfeiçoamento Profissional Controladores Lógicos Programáveis tem por objetivo o desenvolvimento de competências relativas à programação e configuração de Controladores Lógicos Programáveis.'
            }
        ],
        img: cat2
    },
    {
        tipo: 'Cursos Técnicos',
        cursos: [
            {
                nome: 'Técnico Em Eletrônica',
                dur: '1200 Horas',
                ensino: 'Presencial',
                descricao: 'O Curso Técnico em Eletrônica tem por objetivo habilitar profissionais para desenvolver circuitos eletrônicos, integrar de sistemas eletrônicos e realizar a manutenção de circuitos e sistemas eletrônicos, seguindo normas técnicas, ambientais, de qualidade, de saúde e segurança no trabalho.'
            },
            {
                nome: 'Técnico Em Desenvolvimento de Sistemas',
                dur: '1200 Horas',
                ensino: 'Presencial',
                descricao: 'O Curso Técnico de Desenvolvimento de Sistemas tem por objetivo habilitar profissionais para analisar requisitos funcionais e não funcionais de produtos, desenvolver e testar sistemas de software, de acordo com as especificações do projeto, considerando as boas práticas do mercado de tecnologia da informação e as necessidades do usuário.'
            },
        ],
        img: cat3
    },

]

export default categorias;