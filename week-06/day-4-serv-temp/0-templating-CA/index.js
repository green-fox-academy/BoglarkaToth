'use strict'

const express = require('express');
const _ = require('lodash');
const app = express();
const PORT = 3005;

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

const classes = ['coffee', 'teapot', 'badboi'];

const students = [
  { github: 'Eszterb03', className: 'coffee' },
  { github: 'bereid', className: 'coffee' },
  { github: 'Eszti88', className: 'coffee' },
  { github: 'csigeer', className: 'coffee' },
  { github: 'Elenios', className: 'coffee' },
  { github: 'juditvarro', className: 'coffee' },
  { github: 'ecsekitibi', className: 'coffee' },
  { github: 'RudolfGrill', className: 'coffee' },
  { github: 'davidjakoi', className: 'coffee' },
  { github: 'miloskallai', className: 'coffee' },
  { github: 'somakanyasi', className: 'coffee' },
  { github: 'Drekor', className: 'coffee' },
  { github: 'kamillakovacs', className: 'coffee' },
  { github: 'jenny1203', className: 'coffee' },
  { github: 'jnsmtnr', className: 'coffee' },
  { github: 'kaketto', className: 'coffee' },
  { github: 'nandras88', className: 'coffee' },
  { github: 'kitta11', className: 'coffee' },
  { github: 'Arkhimus', className: 'coffee' },
  { github: 'BoglarkaToth', className: 'coffee' },
  { github: 'mark182182', className: 'coffee' },

  { github: 'GFTom', className: 'badboi' },
  { github: 'adambota', className: 'badboi' },
  { github: 'rekabuku', className: 'badboi' },
  { github: 'cserjesa', className: 'badboi' },
  { github: 'Feraru-Krisztian', className: 'badboi' },
  { github: 'STADD', className: 'badboi' },
  { github: 'gergohs', className: 'badboi' },
  { github: 'zsofizsofi', className: 'badboi' },
  { github: 'iringo', className: 'badboi' },
  { github: 'bjakfalvy', className: 'badboi' },
  { github: 'zsomborkalaszi', className: 'badboi' },
  { github: 'robertkochhu', className: 'badboi' },
  { github: 'vilmospadre', className: 'badboi' },
  { github: 'nagyrobert0213', className: 'badboi' },
  { github: 'nagykrisztina', className: 'badboi' },
  { github: 'ChriswellPetii', className: 'badboi' },
  { github: 'daniboy01', className: 'badboi' },
  { github: 'StellaSebok', className: 'badboi' },
  { github: 'SomodiEmese', className: 'badboi' },
  { github: 'chumpellina', className: 'badboi' },
  { github: 'varistvan', className: 'badboi' },

  { github: 'phamed11', className: 'teapot' },
  { github: 'niteeshb', className: 'teapot' },
  { github: 'Konock', className: 'teapot' },
  { github: 'csipan', className: 'teapot' },
  { github: 'czellerdavid', className: 'teapot' },
  { github: 'Ldaruu', className: 'teapot' },
  { github: 'ladyvengeance', className: 'teapot' },
  { github: 'IstvanN', className: 'teapot' },
  { github: 'MirGreek', className: 'teapot' },
  { github: 'adihipo', className: 'teapot' },
  { github: 'khajnal', className: 'teapot' },
  { github: 'hegyibence94', className: 'teapot' },
  { github: 'ilcsikbence', className: 'teapot' },
  { github: 'mandanamomeni', className: 'teapot' },
  { github: 'tamasmlnr', className: 'teapot' },
  { github: 'krisztinanmth', className: 'teapot' },
  { github: 'OsamaTalib', className: 'teapot' },
  { github: 'takacscsaba', className: 'teapot' },
  { github: 'tsz88', className: 'teapot' },
  { github: 'Celern6', className: 'teapot' },
  { github: 'rdgrv', className: 'teapot' },
];

app.get('/', (req, res) => {
  res.render('classes', {
    classes,
  });
});

app.get('/classes/:classname', (req, res) => {
  let classStudents = students.filter(student => {
    return student.className === req.params.classname;
  });

  if (req.query.sortby) {
    classStudents = _.sortBy(
      classStudents,
      [user => user.github.toLowerCase()],
    );

    if (req.query.sortby === 'desc') {
      classStudents = classStudents.reverse();
    }
  }

  res.render('classprofile', {
    className: req.params.classname,
    students: classStudents,
  });
});

app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});
