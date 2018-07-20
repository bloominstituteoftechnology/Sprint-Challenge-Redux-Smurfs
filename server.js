const express = require('express');
const cors = require('cors');
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
  {"id":1, "name":"Pappa Smurf",  "age":408, "height":"5.1 cm", "top":"43.0%", "left":"28.0%"}, 
  {"id":2, "name":"Vanity Smurf", "age":167, "height":"4.9 cm", "top":"27.0%", "left":"39.7%"},
  {"id":3, "name":"Smurfette",    "age":206, "height":"5.0 cm", "top":"45.0%", "left":"9%.0"},
  {"id":4, "name":"Grouchy Smurf","age":143, "height":"4.7 cm", "top":"77.0%", "left":"-1%"},
  {"id":5, "name":"Brainy Smurf", "age":244, "height":"4.9 cm", "top":"74.0%", "left":"30.8%"},
  {"id":6, "name":"Tuffy Smurf",  "age":199, "height":"4.9 cm", "top":"68.5%", "left":"22.8%"},
  {"id":7, "name":"Hefty Smurf",  "age":202, "height":"5.0 cm", "top":"41.0%", "left":"54.5%"},
  {"id":8, "name":"Chef Smurf",   "age":183, "height":"5.1 cm", "top":"38.0%", "left":"78.5%"},
]

server.get('/smurfs', (req, res) => {
  res.json(smurfs);
});
let smurfId = 0;

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
    res.json(smurfs);
  }
});

server.delete('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const foundSmurf = smurfs.find(smurf => smurf.id == id);

  if (foundSmurf) {
    const SmurfRemoved = { ...foundSmurf };
    smurfs = smurfs.filter(smurf => smurf.id != id);
    res.status(200).json(smurfs);
  } else {
    sendUserError('No smurf by that ID exists in the smurf DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
