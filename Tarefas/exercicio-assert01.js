import { 
    assertExists, 
    assertNotEquals, 
    assertThrows, 
    assertThrowsAsync,
    assertMatch } 
from 'https://deno.land/std/testing/asserts.ts';

// Exemplo 1: assertExists
const objeto = { nome: 'João', idade: 25 };
assertExists(objeto.nome);


// Exemplo 2: assertNotEquals
const resultado = 5 * 5;
assertNotEquals(resultado, 20);

// Exemplo 3: assertThrows
function dividir(a, b) {
    if (b === 0) {
      throw new Error('Divisão por zero');
    }
    return a / b;
  }
  
  assertThrows(() => {
    dividir(10, 0);
  });

// Exemplo 4: assertMatch
const texto = 'Olá, mundo!';
assertMatch(texto, /mundo/);

// Exemplo 5: assertThrowsAsync
async function obterDados() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Erro ao obter dados'));
    }, 2000);
  });
}

await assertThrowsAsync(async () => {
  await obterDados();
});