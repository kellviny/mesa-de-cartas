import { PilhaDeCartas } from "../contratos/pilha-de-cartas";
import { Carta } from "../modelos/carta";

export class PilhaEmArray implements PilhaDeCartas {
    private cartas: Array<Carta>;

    constructor(cartasIniciais: Array<Carta> = []) {
        this.cartas = [];
        for (let i = 0; i < cartasIniciais.length; i++) {
            this.cartas[i] = cartasIniciais[i];
        }
    }

    empilhar(carta: Carta): void {
        this.cartas[this.cartas.length] = carta;
    }

    desempilhar(): Carta {
        if (this.estaVazia()) {
            throw new Error("A pilha de cartas está vazia.");
        } else {
            const cartaRemovida: Carta = this.cartas[this.cartas.length - 1];
            this.cartas.length--;
            return cartaRemovida;
        }
    }

    topo(): Carta {
        if (this.estaVazia()) {
            throw new Error("A pilha de cartas está vazia.");
        } else {
            return this.cartas[this.cartas.length - 1];
        }
    }

    estaVazia(): boolean {
        return this.cartas.length === 0;
    }

    tamanho(): number {
        return this.cartas.length;
    }
}