import * as fromAuth from './auth.actions';

describe('authAuths', () => {
  it('should return an action', () => {
    expect(fromAuth.EmployeeRegister.type).toBe('[Auth] Employee Register');
  });
});
