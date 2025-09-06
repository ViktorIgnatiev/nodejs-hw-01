import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    return await readContacts();
  } catch (error) {
    console.error('Error reading contacts:', error);
    return [];
  }
};

console.log(await getAllContacts());