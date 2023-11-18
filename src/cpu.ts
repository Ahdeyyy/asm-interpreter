import { Token, TokenType, registers } from "./token"

export class processor {

    flags: { [key: string]: number } = {
        'zf': 0,  // zero flag
        'sf': 0, // sign flag
        'of': 0, // overflow flag
        'pf': 0, // parity flag
        'cf': 0, // carry flag
        'af': 0, // auxillary flag
        'if': 0, // interrupt flag
        'df': 0, // direction flag
    }


    registers_16bits: { [key: string]: number } = {
        'ax': 0, // accumulator
        'bx': 0, // base address
        'cx': 0, // count
        'dx': 0, // data
        'si': 0, // source index
        'bp': 0, // base pointer
        'sp': 0, // stack pointer

        // segment registers
        'cs': 0, // code segment
        'ds': 0, // data segment
        'es': 0, // extra segment
        'ss': 0, // stack segment

        // private registers
        'pc': 0, // program counter

    }

    Eval(tokens: Token[][]) {
        for (let i = this.registers_16bits.pc; i < tokens.length; i++) {
            for (const token of tokens[i]) {

                switch (token.type) {

                    case 'ADD':
                        if (tokens[i].length < 4) {
                            console.error('ADD instruction requires 2 operands');
                            return;
                        }

                        if (tokens[i][1].type !== TokenType.REGISTER) {
                            console.error(`ADD instruction requires a register as first operand got ${tokens[i][1].type}`);
                            return;
                        }

                        if (tokens[i][2].type !== TokenType.COMMA) {
                            console.error(`ADD instruction requires a comma as second operand got ${tokens[i][2].type}`);
                            return;
                        }

                        if (tokens[i][3].type !== TokenType.INT && tokens[i][3].type !== TokenType.REGISTER) {
                            console.error(`ADD instruction requires a value or register as second operand got ${tokens[i][3].type}`);
                            return;
                        }

                        if (tokens[i][3].type === TokenType.INT) {
                            this.registers_16bits[tokens[i][1].value] += Number(tokens[i][3].value);
                        } else {
                            this.registers_16bits[tokens[i][1].value] += Number(this.registers_16bits[tokens[i][3].value]);
                        }

                        break;
                    case 'SUB':
                        if (tokens[i].length < 4) {
                            console.error('ADD instruction requires 2 operands');
                            return;
                        }

                        if (tokens[i][1].type !== TokenType.REGISTER) {
                            console.error(`ADD instruction requires a register as first operand got ${tokens[i][1].type}`);
                            return;
                        }

                        if (tokens[i][2].type !== TokenType.COMMA) {
                            console.error(`ADD instruction requires a comma as second operand got ${tokens[i][2].type}`);
                            return;
                        }

                        if (tokens[i][3].type !== TokenType.INT && tokens[i][3].type !== TokenType.REGISTER) {
                            console.error(`ADD instruction requires a value or register as second operand got ${tokens[i][3].type}`);
                            return;
                        }

                        if (tokens[i][3].type === TokenType.INT) {
                            this.registers_16bits[tokens[i][1].value] -= Number(tokens[i][3].value);
                        } else {
                            this.registers_16bits[tokens[i][1].value] -= Number(this.registers_16bits[tokens[i][3].value]);
                        }

                        break;
                    case 'MUL':
                        break;
                    case 'DIV':
                        break;
                    case 'IMUL':
                        break;
                    case 'IDIV':
                        break;
                    case 'MOV':
                        if (tokens[i].length < 4) {
                            console.error('MOV instruction requires 2 operands');
                            return;
                        }

                        if (tokens[i][1].type !== TokenType.REGISTER) {
                            console.error(`MOV instruction requires a register as first operand got ${tokens[i][1].type}`);
                            return;
                        }

                        if (tokens[i][2].type !== TokenType.COMMA) {
                            console.error(`MOV instruction requires a comma as second operand got ${tokens[i][2].type}`);
                            return;
                        }

                        if (tokens[i][3].type !== TokenType.INT && tokens[i][3].type !== TokenType.REGISTER) {

                            console.error(`MOV instruction requires a value or register as second operand got ${tokens[i][3].type}`);
                            return;
                        }

                        if (tokens[i][3].type === TokenType.REGISTER) {
                            this.registers_16bits[tokens[i][1].value] = Number(this.registers_16bits[tokens[i][3].value]);
                        } else {
                            this.registers_16bits[tokens[i][1].value] = Number(tokens[i][3].value);

                        }



                        break;
                    case 'EOF':
                        break;
                    case 'REGISTER':
                        break;
                    case 'INVALID':
                        break;
                    case 'VALUE':
                        break;
                    case 'LABEL':
                        break;
                    case 'INT':
                        break;
                    default:
                        break;
                }
            }
        }
    }

}


