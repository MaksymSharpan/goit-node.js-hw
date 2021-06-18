const fs = require('fs').promises;
const path = require('path');

const { v4: uuidv4 } = require('uuid');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');
// console.log(contactsPath);

// TODO: задокументировать каждую функцию
async function listContacts() {
  try {
    const file = await fs.readFile(contactsPath);
    const data = JSON.parse(file);
    // console.table(data);
    return data;
  } catch (error) {
    throw error;
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    console.log(contacts);
    const contact = contacts.find(item => item.id === contactId);
    // console.log(contact);
    return contact;
  } catch (error) {
    throw error;
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const newContacts = contacts.filter(item => item.id !== contactId);
    const contactsToString = JSON.stringify(newContacts);
    fs.writeFile(contactsPath, contactsToString);
    // console.table(newContacts);
    return newContacts;
  } catch (error) {
    throw error;
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const newContact = { id: uuidv4(), name, email, phone };
    contacts.push(newContact);
    const contactsToString = JSON.stringify(contacts);
    fs.writeFile(contactsPath, contactsToString);
    console.table(contacts);
    return contacts;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
