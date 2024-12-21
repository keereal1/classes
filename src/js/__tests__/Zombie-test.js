import Zombie from '../Zombie';

test('testing Zombie class', () => {
    const zombie = {
        name: 'Player',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    }
    const result = new Zombie('Player', 'Zombie')
    expect(result).toEqual(zombie)
})


