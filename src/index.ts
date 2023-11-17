import { parse } from "./parser";

let code = `
mov rax, 0
mov rbx, 1
`

let tokens = parse(code);

console.log(tokens);