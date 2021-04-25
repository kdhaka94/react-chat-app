import { defaultFieldResolver } from 'graphql';
import { SchemaDirectiveVisitor } from 'graphql-tools';

export class IsAuth extends SchemaDirectiveVisitor {
  visitObject(object) {
    this.ensureFieldsWrapped(object);
  }

  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    // eslint-disable-next-line func-names
    field.resolve = async function (...args) {
      const { user, AuthenticationError } = args[2];
      if (!user) {
        throw new AuthenticationError('You are not logged in');
      }
      const result = await resolve.apply(this, args);
      return result;
    };
  }

  ensureFieldsWrapped(objectType) {
    const fields = objectType.getFields();
    Object.keys(fields).forEach((fieldName) => {
      const field = fields[fieldName];
      const { resolve = defaultFieldResolver } = field;
      // eslint-disable-next-line func-names
      field.resolve = async function (...args) {
        const { user, AuthenticationError } = args[2];
        if (!user) {
          throw new AuthenticationError('You are not logged in');
        }
        const result = resolve.apply(this, args);
        return result;
      };
    });
  }
}
