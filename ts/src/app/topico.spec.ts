import { Topico } from './topico';

describe('Topico', () => {
  it('should create an instance', () => {
    const name = 'Exemplo de nome';
    const text = 'Exemplo de texto';
    const type = 'Exemplo de tipo';
    const background = '#eef';

    const topico = new Topico(name, text, type, background);

    expect(topico).toBeTruthy();
  });
});