import { AggregateUserRootEntity } from './aggregate.user.root.entity';

describe('Aggregate User Root Entity', () => {
  let userRootEntity: AggregateUserRootEntity;

  beforeEach(() => {
    userRootEntity = new AggregateUserRootEntity();
  });

  it('should be defined', () => {
    expect(userRootEntity).toBeDefined();
  });

  it('should be return error: Email does not valid!', () => {
    try {
      userRootEntity.setUser('', 'wrongEmail@com', false, 'user');
    } catch (err) {
      expect(err).toEqual('Email does not valid!');
    }
  });

  it('should be return error: User role does not valid!', () => {
    try {
      userRootEntity.setUser('', 'some.email@gmail.com', false, 'wrongRole');
    } catch (err) {
      expect(err).toEqual('User role does not valid!');
    }
  });

  it('should be return error: Password does not valid!', () => {
    try {
      userRootEntity.setUserCredential('', '', 'wrongPassword');
    } catch (err) {
      expect(err).toEqual('Password does not valid!');
    }
  });
});
