import { 
    assertExists, 
    assertNotEquals, 
    assertThrows, 
    assertMatch } 
from 'https://deno.land/std/testing/asserts.ts';



// Exemplo 1: assertExists
Deno.test("Teste de existencia (API)", () => {
  const objeto = { nome: 'João', idade: 25 };
  assertExists(objeto.nome);
})

// Exemplo 2: assertNotEquals
Deno.test("Teste de resultados não esperados (API)", () => {
  const resultado = 5 * 5;
  assertNotEquals(resultado, 20);
})


// Exemplo 3: assertThrows
Deno.test("Testando divisão por 0", () => {
  function dividir(a, b) {
    if (b === 0) {
      throw new Error('Divisão por zero');
    }
    return a / b;
  }
  
  assertThrows(() => {
    dividir(10, 0);
  });
})



// Exemplo 4: assertMatch
Deno.test("Testando se os valores são iguais", () => {
    const texto = 'Olá, mundo!';
    assertMatch(texto, /mundo/);
})





