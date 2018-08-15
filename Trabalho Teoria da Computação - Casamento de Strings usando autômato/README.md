# Teoria da Computação - endsWith, startsWith e contains
====================================================================================================================================================================================================

## startsWith

A função _startsWith()_ recebe como parâmetro uma fita e um possível prefixo, em forma de um vetor de caracteres.
- O prefixo a ser analizado irá ser percorrido por um for loop, simulando uma leitura da fita em um autômato finito;
- Durante a execução do autômato, irá ser verificado através de um if, se o caractere do prefixo é igual ao caractere da fita, em cada uma das posições;
- Caso os caracteres forem iguais, será incrementado um contador;
- Caso o contador seja o próprio tamanho do suposto prefixo, irá retornar verdadeiro, caso contrário, retornará falso;
- Cada posição se trata de um estado do autômato.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## endsWith

A função _endswith()_ recebe como parâmetro uma fita e um possível sufixo, em forma de um vetor de caracteres.
- O funcionamento do _endsWith()_ é semelhante ao _startsWith()_, porém as duas entradas irão ser invertidas, no momento de percorrer o autômato;
- Caso os caracteres forem iguais, irá ser incrementado um contador e decrementado um auxiliar que irá percorrer a fita;
- Caso o contador seja o próprio tamanho do sufixo, irá retornar verdadeiro, caso contrário, retornará falso;
- Cada posição se trata de um estado do autômato.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## contains

A função _contains()_ recebe como parâmetro uma fita e uma possível subpalavra, em forma de um vetor de caracteres.
- A fita percorrida irá ser percorrida junto com a possivel subpalavra;
- Irá ser feita uma comparação de caracteres entre a fita e a possível subpalavra e caso o estado final seja o tamanho da possivel subpalavra, irá ser retornado verdeiro;
- Caso não seja, o autômato retornará falso;
- Cada posição se trata de um estado do autômato.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Linguagem utilizada e como executar o programa

- O programa foi escrito em _Javascript_, com uma inteface implementada em _HTML5_ e _CSS3_;
- Para executar o programa, basta fazer o download da pasta. Após o dowload estar concluido, basta abrir o arquivo .html no navegador e preencher os campos informados e clicar no botão verificar;
- Nota: _Mantenha os três arquivos juntos na pasta_.
