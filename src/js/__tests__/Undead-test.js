import Undead from '../Undead';

test('testing Undead class', () => {
    const undead = {
        name: 'Player',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    }
    const result = new Undead('Player', 'Undead')
    expect(result).toEqual(undead)
})


