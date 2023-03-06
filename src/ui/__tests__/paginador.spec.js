import mostrarPaginador, { manejarCambioPagina } from '../paginador.js';
import pokedexFixture from '../../__tests__/pokedex.fixture.js';

const mock = jest.fn();

describe('testea evento y callback', () => {
  document.body.innerHTML = pokedexFixture;

  test('prueba la funcion de callback', () => {
    (document.querySelector('#paginador').onclick = (e) => {
      manejarCambioPagina(e, mock);
    });
    document.querySelector('#paginador').click();
    expect(mock).toHaveBeenCalled();
  });

  test('prueba que se haga click al correcto', () => {
    const totalPokemones = 100;
    const paginaActual = 5;
    const urlSiguiente = null;
    const urlAnterior = 'Anterior';

    mostrarPaginador(totalPokemones, paginaActual, urlSiguiente, urlAnterior, mock);

    document.querySelector('[data-pagina="5"]').click();
    expect(mock).toHaveBeenCalledWith(5);
  });
});

describe('prueba la funcionalidad del paginador', () => {
  document.body.innerHTML = pokedexFixture;
  const totalPokemones = 100;
  const paginaActual = 5;
  const urlSiguiente = null;
  const urlAnterior = 'Anterior';

  mostrarPaginador(totalPokemones, paginaActual, urlSiguiente, urlAnterior, mock);

  test('verifica el estado de la pagina siguiente', () => {
    expect(document.querySelector('[data-pagina="Siguiente"]').textContent)
      .toEqual('Siguiente');
    expect((document.querySelectorAll('.page-item'))[6].className)
      .toEqual('page-item disabled');
  });

  test('verifica el estado de la pagina anterior', () => {
    expect(document.querySelector('[data-pagina="Anterior"]').textContent)
      .toEqual('Anterior');
    expect((document.querySelectorAll('.page-item'))[4].className)
      .toEqual('page-item');
  });

  test('verifica la creacion de paginas y el estado de la pagina actual', () => {
    expect(document.querySelectorAll('.page-item')).toHaveLength((Math.ceil(totalPokemones / 20)) + 2);
    expect((document.querySelectorAll('.page-item'))[5].className)
      .toEqual('page-item active');
  });
});
