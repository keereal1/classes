import Magician from '../Magician';

test('testing Magician class', () => {
    const magician = {
        name: 'Player',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    }
    const result = new Magician('Player', 'Magician')
    expect(result).toEqual(magician)
})


