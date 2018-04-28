const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3333;
const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let smurfs = [
  {
    id: 1,
    name: 'Phil',
    age: 666,
    height: 777
  }
];


server.get('/smurfs', (req, res) => {
  res.send(smurfs);
});
let smurfId = 2;

server.get('/api/smurfs/:id', (req, res) => {
  const smurf = smurfs.find(smurf => smurf.id == req.params.id);

  if (smurf) {
    res.status(200).json(smurf);
  } else {
    res.status(404).send({ msg: 'Smurf not found' });
  }
});

server.post('/smurfs', (req, res) => {
  const { name, age, height } = req.body;
  const newSmurf = { name, age, height, id: smurfId };
  if (!name || !age || !height) {
    return sendUserError(
      'Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB.',
      res
    );
  }
  const findSmurfByName = smurf => {
    return smurf.name === name;
  };
  if (smurfs.find(findSmurfByName)) {
    return sendUserError(
      `Ya gone did smurfed! ${name} already exists in the smurf DB.`,
      res
    );
  }

  smurfs.push(newSmurf);
  smurfId++;
  res.json(smurfs);
});

server.put('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, height } = req.body;
  const findSmurfById = smurf => {
    return smurf.id == id;
  };
  const foundSmurf = smurfs.find(findSmurfById);
  if (!foundSmurf) {
    return sendUserError('No Smurf found by that ID', res);
  } else {
    if (name) foundSmurf.name = name;
    if (age) foundSmurf.age = age;
    if (height) foundSmurf.height = height;
    res.json(foundSmurf);
  }
});

server.delete('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const foundSmurf = smurfs.find(smurf => smurf.id == id);

  if (foundSmurf) {
    const SmurfRemoved = { ...foundSmurf };
    smurfs = smurfs.filter(smurf => smurf.id !== Number(id));
    res.status(smurfs);
  } 
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
