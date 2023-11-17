export enum TokenType {
    ADD = 'ADD',
    SUB = 'SUB',
    MUL = 'MUL',
    DIV = 'DIV',
    IMUL = 'IMUL',
    IDIV = 'IDIV',
    MOV = 'MOV',
    COMMA = 'COMMA',
    EOF = 'EOF',
    REGISTER = 'REGISTER',
    INVALID = 'INVALID',
    VALUE = 'VALUE',
}

// 32 bit to 8 bit registers
export const registers = [
    'eax', 'ebx', 'ecx', 'edx',
    'esi', 'edi', 'esp', 'ebp',
    'ax', 'bx', 'cx', 'dx',
    'si', 'di', 'sp', 'bp',
    'al', 'bl', 'cl', 'dl',
    'ah', 'bh', 'ch', 'dh',
]

export class Token {
    public type: TokenType;
    public value: string;

    constructor(type: TokenType, value: string) {
        this.type = type;
        this.value = value;
    }
}