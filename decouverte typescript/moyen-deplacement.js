"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voiture = void 0;
class Voiture {
    move() {
        throw new Error("Method not implemented.");
    }
}
exports.Voiture = Voiture;
const voiture = new Voiture();
const voitureBis = {
    move: () => { }
};
function toMove(voiture) {
    voiture.move();
}
toMove(voiture);
toMove(voitureBis);
