export function add(y: number, x: number) {
    return x + y;
}

describe('teste inicial', () => {
    it('funcao add', () => {
        expect(add(1, 2)).toEqual(3)
    })
})