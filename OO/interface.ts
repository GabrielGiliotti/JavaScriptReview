// Interfaces sao permitidas apenas em arquivos TypeScript

interface Empregado {
    nome: string;
    sobrenome: string;
    nomeCompleto(): string;
}

let empregado: Empregado = {
    nome: "Haroldo",
    sobrenome: "Calvin",
    nomeCompleto(): string {
        return this.nome + " " + this.sobrenome;
    }
}

// empregado.nome = 20;  //* Error - Type 'number' is not assignable to type 'string'