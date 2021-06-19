const argv = require('yargs').argv;

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require('./contacts');

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      listContacts();

      break;

    case 'get':
      getContactById(id);
      break;

    case 'add':
      setTimeout(() => {
        addContact(name, email, phone);
      }, 500);

      break;

    case 'remove':
      setTimeout(() => {
        removeContact(id);
      }, 500);

      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
