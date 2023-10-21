const sun = (a, b) => a + b //exportação defoult Só pode ter uma
export const subtract = (a, b) => a - b //exportação nomeada A

const multiply = (a, b) => a * b //exportação nomeada B
const divide = (a, b) => a / b //exportação nomeada B

export { multiply, divide } //exportação nomeada B
export default sun //exportação defoult Só pode ter uma