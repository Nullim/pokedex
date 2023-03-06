import { actualizarTextoIndicePokemones, mostrarListadoPokemones } from '../listado.js';

test('actualiza texto indice de pokemones', () => {
  document.body.innerHTML = '<div id="indice"></div>';
  actualizarTextoIndicePokemones('test');
  expect(document.querySelector(('#indice')).textContent)
    .toContain('test');
});

const mock = jest.fn();

test('muestra listado de pokemones', () => {
  document.body.innerHTML = '<div id="indice"></div>';
  const nombresPokemones = ['bulbasaur', 'charmander', 'squirtle'];
  mostrarListadoPokemones(nombresPokemones, mock);
  expect(document.querySelector('#indice').textContent)
    .toContain('');
  expect(document.querySelectorAll('.list-group-item')).toHaveLength(3);
  (document.querySelectorAll('.list-group-item')).forEach((el) => el.click());
  expect(mock).toHaveBeenCalledTimes(3);
});
