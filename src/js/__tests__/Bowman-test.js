import Bowman from '../Bowman';

test('testing Bowman class', () => {
    const bowman = {
        name: 'Player',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    }
    const result = new Bowman('Player', 'Bowman')
    expect(result).toEqual(bowman)
})


