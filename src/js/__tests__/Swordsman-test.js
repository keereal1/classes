import Swordsman from '../Swordsman';

test('testing Swordsman class', () => {
    const swordsman = {
        name: 'Player',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    }
    const result = new Swordsman('Player', 'Swordsman')
    expect(result).toEqual(swordsman)
})


