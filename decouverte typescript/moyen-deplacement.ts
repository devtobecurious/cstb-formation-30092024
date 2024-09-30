export interface MoyenDeDeplacement {
    move(): void
}

export class Voiture {
    move(): void {
        throw new Error("Method not implemented.");
    }
}

const voiture = new Voiture()

const voitureBis: Voiture = {
    move: () => {}
}

// function toMove(voiture: { move: () => void }): void {
//     voiture.move()
// }

function toMove(voiture: MoyenDeDeplacement): void {
    voiture.move()
}
toMove(voiture)
toMove(voitureBis)