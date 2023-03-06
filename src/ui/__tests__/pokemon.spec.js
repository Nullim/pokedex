import pokedexFixture from '../../__tests__/pokedex.fixture.js';
import mostrarPokemon from '../pokemon.js';

describe('prueba funcionalidad de la funcion mostrarPokemon', () => {
  document.body.innerHTML = pokedexFixture;

  const pokemon = {
    id: 257,
    nombre: 'blaziken',
    foto: 'image',
    tipos: ['fire', 'fighting'],
    habilidades: ['blaze', 'speed-boost'],
    movimientos: [{ nombre: 'mega-punch', versiones: ['emerald', 'firered-leafgreen', 'sword-shield'] }],
  };

  mostrarPokemon(pokemon);

  test('actualiza texto ayuda', () => {
    expect(document.querySelector('#ayuda').textContent)
      .toBe('');
  });

  test('verifica la actualizacion de la imagen', () => {
    expect(document.querySelector('#pokemon-imagen').getAttribute('src'))
      .toBe('image');
    expect(document.querySelector('#pokemon-imagen').getAttribute('alt'))
      .toBe('Imagen frontal del pokemon blaziken');
  });

  test('verifica la actualizacion del nombre', () => {
    expect(document.querySelector('#pokemon-nombre').textContent)
      .toBe('blaziken');
  });

  test('verifica la actualizacion del id', () => {
    expect(document.querySelector('#pokemon-id').textContent)
      .toBe('257');
  });

  test('verifica la actualizacion de los tipos', () => {
    expect(document.querySelector('#tipos').childNodes.length)
      .toEqual(2);
    expect(document.querySelector('#tipos').childNodes[0].textContent)
      .toBe('fire');
    expect(document.querySelector('#tipos').childNodes[1].textContent)
      .toBe('fighting');
  });

  test('verifica la actualizacion de las habilidades', () => {
    expect(document.querySelector('#habilidades').childNodes.length)
      .toEqual(2);
    expect(document.querySelector('#habilidades').childNodes[0].textContent)
      .toBe('blaze');
    expect(document.querySelector('#habilidades').childNodes[1].textContent)
      .toBe('speed-boost');
  });
});
