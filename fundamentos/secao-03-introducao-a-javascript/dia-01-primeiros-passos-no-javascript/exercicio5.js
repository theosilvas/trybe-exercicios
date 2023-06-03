function obterMovimentosDaPeca(nomePeca) {
    const peca = nomePeca.toLowerCase(); // Converter para letras minúsculas
  
    switch (peca) {
      case 'rei':
        return 'O rei pode mover-se para qualquer casa adjacente.';
      case 'rainha':
        return 'A rainha pode mover-se em qualquer direção e em qualquer quantidade de casas.';
      case 'torre':
        return 'A torre pode mover-se em linha reta tanto na vertical quanto na horizontal.';
      case 'bispo':
        return 'O bispo pode mover-se em linha reta nas diagonais.';
      case 'cavalo':
        return 'O cavalo pode mover-se em forma de "L", saltando sobre outras peças.';
      case 'peão':
        return 'O peão pode mover-se para frente, mas só pode capturar outras peças na diagonal.';
      default:
        return 'Peça inválida. Por favor, forneça o nome de uma peça de xadrez válida.';
    }
  }
  
  // Exemplo de uso
  console.log(obterMovimentosDaPeca('torre')); // Saída: A torre pode mover-se em linha reta tanto na vertical quanto na horizontal.
  console.log(obterMovimentosDaPeca('BiSPO')); // Saída: O bispo pode mover-se em linha reta nas diagonais.
  console.log(obterMovimentosDaPeca('CAVALO')); // Saída: O cavalo pode mover-se em forma de "L", saltando sobre outras peças.
  console.log(obterMovimentosDaPeca('peça inválida')); // Saída: Peça inválida. Por favor, forneça o nome de uma peça de xadrez válida.
  