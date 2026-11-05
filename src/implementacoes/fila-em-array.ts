import { FilaDeJogadores } from "../contratos/fila-de-jogadores";
import { Jogador } from "../modelos/jogador";

export class FilaEmArray implements FilaDeJogadores {
    private jogadores: Array<Jogador>;

    constructor() {
        this.jogadores = [];
    }

    entrar(jogador: Jogador): void {
        this.jogadores[this.jogadores.length] = jogador;
    }

    proximo(): Jogador {
        if (this.estaVazia()) {
            throw new Error("A fila de jogadores está vazia.");
        } else {
            const jogadorRemovido: Jogador = this.jogadores[0];
            for (let i = 0; i < this.jogadores.length - 1; i++) {
                this.jogadores[i] = this.jogadores[i + 1];
            }
            this.jogadores.length--;
            return jogadorRemovido;
        }
    }

    estaVazia(): boolean {
        return this.jogadores.length === 0;
    }

    tamanho(): number {
        return this.jogadores.length;
    }
}
