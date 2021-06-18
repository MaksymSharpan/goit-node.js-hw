const argv = require('yargs').argv;

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require('./contacts');

// console.log(removeContact(11));
// console.log(addContact('Maksym', '123@gmail.com', '666-666'));

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      listContacts();
      break;

    case 'get':
      getContactById(id);
      break;

    case 'add':
      addContact(name, email, phone);
      break;

    case 'remove':
      removeContact(id);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
