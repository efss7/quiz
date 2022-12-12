import QuestionModel from "../../model/Question";
import ResponseModel from "../../model/Response";

const questions: QuestionModel[] = [
    new QuestionModel(306, 'Qual bicho transmite a Doença de Chagas?', [
        ResponseModel.incorrect('Abelha'),
        ResponseModel.incorrect('Barata'),
        ResponseModel.incorrect('Pulga'),
        ResponseModel.correct('Barbeiro'),
    ], false),
    new QuestionModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?', [
        ResponseModel.incorrect('Caju'),
        ResponseModel.incorrect('Côco'),
        ResponseModel.incorrect('Chuchu'),
        ResponseModel.correct('Abóbora'),
    ], false),
    new QuestionModel(203, 'Qual é o coletivo de cães?', [
        ResponseModel.incorrect('Manada'),
        ResponseModel.incorrect('Alcateia'),
        ResponseModel.incorrect('Rebanho'),
        ResponseModel.correct('Matilha'),
    ], false),
    new QuestionModel(204, 'Qual é o triângulo que tem todos os lados diferentes?', [
        ResponseModel.incorrect('Equilátero'),
        ResponseModel.incorrect('Isóceles'),
        ResponseModel.incorrect('Trapézio'),
        ResponseModel.correct('Escaleno'),
    ], false),
    new QuestionModel(205, 'Quem compôs o Hino da Independência?', [
        ResponseModel.incorrect('Castro Alves'),
        ResponseModel.incorrect('Manuel Bandeira'),
        ResponseModel.incorrect('Carlos Gomes'),
        ResponseModel.correct('Dom Pedro I'),
    ], false),
    new QuestionModel(206, 'Qual é o antônimo de "malograr"?', [
        ResponseModel.incorrect('Perder'),
        ResponseModel.incorrect('Fracassar'),
        ResponseModel.incorrect('Desprezar'),
        ResponseModel.correct('Conseguir'),
    ], false),
    new QuestionModel(207, 'Em que país nasceu Carmen Miranda?', [
        ResponseModel.incorrect('Argentina'),
        ResponseModel.incorrect('Espanha'),
        ResponseModel.incorrect('Brasil'),
        ResponseModel.correct('Portugal'),
    ], false),
    new QuestionModel(208, 'Qual foi o último Presidente do período da ditadura militar no Brasil?', [
        ResponseModel.incorrect('Costa e Silva'),
        ResponseModel.incorrect('Emílio Médici'),
        ResponseModel.incorrect('Ernesto Geisel'),
        ResponseModel.correct('João Figueiredo'),
    ], false),
    new QuestionModel(209, 'Seguindo a sequência do baralho, qual carta vem depois do dez?', [
        ResponseModel.incorrect('Ás'),
        ResponseModel.incorrect('Nove'),
        ResponseModel.incorrect('Rei'),
        ResponseModel.correct('Valete'),
    ], false),
    new QuestionModel(210, 'O adjetivo "venoso" está relacionado a:', [
        ResponseModel.incorrect('Vela'),
        ResponseModel.incorrect('Vento'),
        ResponseModel.incorrect('Vênia'),
        ResponseModel.correct('Veia'),
    ], false),
    new QuestionModel(211, 'Que nome se dá à purificação por meio da água?', [
        ResponseModel.incorrect('Abrupção'),
        ResponseModel.incorrect('Abolição'),
        ResponseModel.incorrect('Abnegação'),
        ResponseModel.correct('Ablução'),
    ], false),
    new QuestionModel(212, 'Qual montanha se localiza entre a fronteira do Tibet com o Nepal?', [
        ResponseModel.incorrect('Monte Branco'),
        ResponseModel.incorrect('Monte Fuji'),
        ResponseModel.incorrect('Monte Carlo'),
        ResponseModel.correct('Monte Everest'),
    ], false),
    new QuestionModel(213, 'Em que parte do corpo se encontra a epiglote?', [
        ResponseModel.incorrect('Estômago'),
        ResponseModel.incorrect('Pâncreas'),
        ResponseModel.incorrect('Rim'),
        ResponseModel.correct('Pescoço'),
    ], false),
    new QuestionModel(214, 'A compensação por perda é chamada de...', [
        ResponseModel.incorrect('Déficit'),
        ResponseModel.incorrect('Indexação'),
        ResponseModel.incorrect('Indébito'),
        ResponseModel.correct('Indenização'),
    ], false),
    new QuestionModel(215, 'Que personagem do folclore brasileiro tem uma perna só?', [
        ResponseModel.incorrect('Cuca'),
        ResponseModel.incorrect('Curupira'),
        ResponseModel.incorrect('Boitatá'),
        ResponseModel.correct('Saci-pererê'),
    ], false),
    new QuestionModel(216, 'Quem é o "patrono" do Exército Brasileiro?', [
        ResponseModel.incorrect('Marechal Deodoro'),
        ResponseModel.incorrect('Barão de Mauá'),
        ResponseModel.incorrect('Marquês de Pombal'),
        ResponseModel.correct('Duque de Caxias'),
    ], false),
]

export default questions