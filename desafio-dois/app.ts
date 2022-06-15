// Como podemos melhorar o esse código usando TS? 

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao,
}

enum Profissao {
    Atriz,
    Padeiro,
}

let Maria: Pessoa = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz,
}

let Roberto: Pessoa = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.Padeiro,
}

let Laura: Pessoa = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Atriz,
};

let Carlos: Pessoa = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro,
}