/**
 * Commentaires de classe
 */
export abstract class Character {
    #nomArme = 'Sabre' // private js, attention si pas target es2023 => génére du code qui "sert à rien"
    private nomArme = 'Sabre';
    // private _lifePoint: number;

    // constructor(lifePoint: number) {
    //     this._lifePoint = lifePoint;
    // }
    constructor(private _lifePoint: number) {
        this.#nomArme = 'Autre nom'
    }

    abstract move(): void

    // abstract attack(enemy: Character): void
    attack(enemy: Character): void {
        const cost = Math.random() * 100
        this._lifePoint -= cost
    }

    get lifePoint() {
        return this._lifePoint
    }   
}