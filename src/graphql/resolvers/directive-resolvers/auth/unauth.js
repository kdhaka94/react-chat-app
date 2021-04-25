import { defaultFieldResolver } from 'graphql';
import { SchemaDirectiveVisitor } from 'graphql-tools';

export class UnAuth extends SchemaDirectiveVisitor {
  visitObject(object) {
    this.ensureFieldsWrapped(object);
  }

  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    // eslint-disable-next-line func-names
    field.resolve = async function (...args) {
      const { user, AuthorizationError } = args[2];
      if (user) {
        throw new AuthorizationError('This resource is guest only resource');
      }
      const result = await resolve.apply(this, args);
      return result;
    };
  }

  ensureFieldsWrapped(objectType) {
    const fields = objectType.getFields();
    Object.keys(fields).forEach(fieldName => {
      const field = fields[fieldName];
      const { resolve = defaultFieldResolver } = field;
      // eslint-disable-next-line func-names
      field.resolve = async function (...args) {
        const { user, AuthorizationError } = args[2];
        if (user) {
          throw new AuthorizationError('This resource is guest only resource');
        }
        const result = resolve.apply(this, args);
        return result;
      };
    });
  }
}
