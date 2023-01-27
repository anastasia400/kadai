import apidata from '../../src/data';

export default function handler(req, res) {
  console.log(req.query);
  let id = req.query.id;
  if (id === undefined) {
    id = 0;
  }
  if (id >= apidata.length) {
    id = 0;
  }
  res.status(200).json(apidata[id]);
}