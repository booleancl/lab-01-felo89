const {
  rutTointeger,
  latitudeToFloat,
  isNumber,
} = require('./operators');

describe('Operators', () => {
  describe('Parse numbers', () => {
    it('returns an integer number based on a string', () => {
      expect(rutTointeger('11.111.111-1')).toEqual(11111111)
      // Agregaremos más casos basado en casos de negocio
      // expect(rutTointeger('22.333.222-k')).toEqual(22333222)
      // expect(rutTointeger('22333222K')).toEqual(22333222)
    })
    it('returns an float number based on a string', () => {
      expect(latitudeToFloat('-70.25879')).toEqual(-70.25879)
    })
  })
  describe('typeof and isNaN', () =>{
    it("Check if is a 'normal' number", () => {
      expect(isNumber(2)).toBe(true)
    })
    it("Check if is a 'tricky' number", () => {
      expect(isNumber(2/undefined)).toBe(false)
    })
  })
})
