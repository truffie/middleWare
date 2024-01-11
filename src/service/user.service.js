
const fs = require('fs')
const pathDB = './storage/storage.json'
const json = fs.readFileSync(pathDB);
const arr = JSON.parse(json);

const updateNameById = (id, body) => {
  const index = arr.findIndex((el) => el.id == id);
  if (index < 0) throw new Error('invalid id');
  arr[index] = { ...arr[index], ...body };
  fs.writeFileSync(pathDB, JSON.stringify(arr));
  return arr;
}

const getAllUsers = () => {
  return arr;
}

const deleteByID = (id) => {
  const data = arr.filter((el, i) => i !== index);
  if (data.length == arr.length) throw new Error('invalid id');
  fs.writeFileSync(pathDB, JSON.stringify(data));
  return data
}
module.exports = { deleteByID, getAllUsers, updateNameById }


