import { processor } from "./cpu";
import { parse } from "./parser";

let code = `
mov bx, 1 ;foo
mov ax, bx
add ax, 3
jmp sui
sub bx, 2
sui:
`

let tokens = parse(code);
let cpu = new processor();

// console.log(tokens);

console.log(cpu.registers_16bits);

cpu.Eval(tokens);

console.log(cpu.registers_16bits);