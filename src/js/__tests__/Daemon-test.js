import Daemon from '../Daemon';

test('testing Daemon class', () => {
    const daemon = {
        name: 'Player',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    }
    const result = new Daemon('Player', 'Daemon')
    expect(result).toEqual(daemon)
})


