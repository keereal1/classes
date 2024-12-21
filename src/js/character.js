export default class Character {
    constructor(name, type) {
        this.name = name
        
        if (name.length < 2 || name.length > 10) {
            throw new Error('Некорретное имя')
        }

        const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (types.includes(type)) {
            this.type = type
        } else {
            throw new Error('Некорретный тип')
        }

        this.health = 100,
        this.level = 1,
        this.attack = 25,
        this.defence = 25
    }
}
