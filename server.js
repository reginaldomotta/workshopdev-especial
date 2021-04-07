const express = require("express");
const server = express();

server.use(express.static("public"));

const ideas = [
    {
        img: "https://www.flaticon.com/premium-icon/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos exercitationem amet fugiat facere",
        url: "http://rocketseat.com.br"
    },
    {
        img: "https://www.flaticon.com/premium-icon/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos exercitationem amet fugiat facere",
        url: "http://rocketseat.com.br"
    },
    {
        img: "https://www.flaticon.com/premium-icon/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos exercitationem amet fugiat facere",
        url: "http://rocketseat.com.br"
    },
    {
        img: "https://www.flaticon.com/premium-icon/icons/svg/2729/2729032.svg",
        title: "Karaoke",
        category: "Diversão em Família",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos exercitationem amet fugiat facere",
        url: "http://rocketseat.com.br"
    },
    {
        img: "https://www.flaticon.com/premium-icon/icons/svg/2729/2729038.svg",
        title: "Pintura",
        category: "Criatividade",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos exercitationem amet fugiat facere",
        url: "http://rocketseat.com.br"
    },
    {
        img: "https://www.flaticon.com/premium-icon/icons/svg/2729/2729048.svg",
        title: "Recortes",
        category: "Criatividade",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos exercitationem amet fugiat facere",
        url: "http://rocketseat.com.br"
    }
];

const nunjucks = require("nunjucks");
nunjucks.configure("views", {
    express: server,
    noCache: true,
});

server.get("/", (req, res) => {

    const reversedIdeas = [...ideas].reverse();

    let lastIdeas = [];
    
    for (idea of reversedIdeas){
        if (lastIdeas.length < 2) {
            lastIdeas.push(idea);
        }
    }

    return res.render("index.html", { ideas: lastIdeas });
});

server.get("/ideias", (req, res) => {

    const reversedIdeas = [...ideas].reverse();

    return res.render("ideas.html", { ideas: reversedIdeas });
});

server.listen(3333);

