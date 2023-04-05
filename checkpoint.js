
// Criando uma classe Aluno
class Aluno {
    constructor(nome, faltas, notas) {
      this.nome = nome;
      this.faltas = faltas;
      this.notas = notas;
    }
  
    // Criando o método calcularMedia
    calcularMedia(){
      let soma = 0; // Inicializa com let em vez de const
      for (let i = 0; i < this.notas.length; i++) {
          soma += this.notas[i];            
      }
      return soma / this.notas.length;
    }

    // Criando o método adicionarFaltas  
    adicionarFaltas() {
      this.faltas++;
    }
  }

  // Criando uma classe Curso
  class Curso {
    // Criando o construtor com parâmetros e inicializando os atributos
    constructor(nome, notaAprovacao, faltasMaximas, listaEstudantes) {
      this.nome = nome;
      this.notaAprovacao = notaAprovacao;
      this.faltasMaximas = faltasMaximas;
      this.listaEstudantes = listaEstudantes;
    }

    // Criando método adicionarAluno
    adicionarAluno(aluno) {
      this.listaEstudantes.push(aluno);
    }

    // Criando método alunoAprovado
    alunoAprovado(aluno) {
      const media = aluno.calcularMedia();
      const faltas = aluno.faltas;
      if (faltas === this.faltasMaximas) {
        return media >= this.notaAprovacao * 1.1;
      } else {
        return media >= this.notaAprovacao && faltas < this.faltasMaximas;
      }
    }
  
    listaAprovacao() {
      const resultados = [];
      for (let aluno of this.listaEstudantes) {
        resultados.push(this.alunoAprovado(aluno));
      }
      return resultados;
    }
  }
  
  // Exemplo de uso:
  const listaEstudantes = [
    new Aluno('João', 3, [8, 7, 9]),
    new Aluno('Maria', 2, [6, 5, 7]),
    new Aluno('José', 4, [7, 5, 6]),
  ];
  
  const curso = new Curso('Programção imperativa', 7, 5, listaEstudantes);
  
  curso.adicionarAluno(new Aluno('Pedro', 1, [8, 9, 7]));
  
  console.log(curso.alunoAprovado(listaEstudantes[0])); // true
  console.log(curso.alunoAprovado(listaEstudantes[1])); // false
  console.log(curso.alunoAprovado(listaEstudantes[2])); // false
  console.log(curso.alunoAprovado(curso.listaEstudantes[3])); // true
  
  console.log(curso.listaAprovacao()); // [true, false, false, true]
  