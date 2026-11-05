import type { FormatadorDeCarta } from "../contratos/formatador-de-carta";
import type { Carta } from "../modelos/carta";

export class FormatadorCompacto implements FormatadorDeCarta {
    formatar(carta: Carta): string {
        const rotulo = this.rotuloDoValor(carta.valor);
        const simbolo = this.simboloDoNaipe(carta.naipe);
        return rotulo + simbolo;
    }

    private rotuloDoValor(valor: number): string {
        switch (valor) {
            case 1: return "A";
            case 11: return "J";
            case 12: return "Q";
            case 13: return "K";
            default: return String(valor);
        }
    }

    private simboloDoNaipe(naipe: string): string {
        switch (naipe) {
            case "Copas": return "♥";
            case "Espadas": return "♠";
            case "Ouros": return "♦";
            case "Paus": return "♣";
            default: throw new Error(`Naipe inválido: ${naipe}`);
        }
    }

}
