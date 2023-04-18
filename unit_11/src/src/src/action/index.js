export const addNewUsers = (passport, name, age) => ({
    type: 'ADD_USER',
    passport,
    name,
    age,
});
