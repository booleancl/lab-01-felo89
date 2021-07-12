const {
  checkAccessLevel,
} = require('./04_access_levels');

describe('Access Levels', () => {
  it('has different access levels', ()=>{
    expect(()=>{
      checkAccessLevel()
    }).not.toThrow()
  })
})
