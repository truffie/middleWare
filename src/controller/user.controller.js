const express = require('express');
const router = express.Router();
const { deleteByID, getAllUsers, updateNameById } = require('../service/user.service')
router.get('/', (req, res) => {
  const data = getAllUsers();
  res.send(data)
})

router.patch('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const data = updateNameById(id, body);
    res.status(200).send(data)
  } catch (err) {
    res.status(404).send(err.message);
  }

}
)

router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const data = deleteByID(id);
    res.status(200).send(data)
  } catch (err) {
    res.status(404).send(err.message)
  }
})
module.exports = router;
