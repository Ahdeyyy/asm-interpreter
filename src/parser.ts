import { Token, TokenType } from './token';

export function parse(src: string): Token[][] {
    const lines = src.split('\n');
    const tokens: Token[][] = [];

    for (const line of lines) {
        const lineTokens: Token[] = [];
        let token = '';

        for (const char of line) {
            switch (char) {
                case ',':
                    if (token.length > 0) {
                        lineTokens.push(getToken(token));
                        token = '';
                    }
                    lineTokens.push(new Token(TokenType.COMMA, ','));
                    break;
                case ' ':
                    if (token.length > 0) {
                        lineTokens.push(getToken(token));
                        token = '';
                    }
                    break;
                default:
                    token += char;
                    break;


            }
        }


        if (lineTokens.length > 0) tokens.push(lineTokens);
    }

    return tokens;
}


function getToken(tok: string): Token {
    switch (tok) {
        case 'add':
            return new Token(TokenType.ADD, 'add');
        case 'sub':
            return new Token(TokenType.SUB, 'sub');
        case 'mul':
            return new Token(TokenType.MUL, 'mul');
        case 'div':
            return new Token(TokenType.DIV, 'div');
        case 'imul':
            return new Token(TokenType.IMUL, 'imul');
        case 'idiv':
            return new Token(TokenType.IDIV, 'idiv');
        case 'mov':
            return new Token(TokenType.MOV, 'mov');
        default:
            return new Token(TokenType.INVALID, 'invalid');
    }

}

