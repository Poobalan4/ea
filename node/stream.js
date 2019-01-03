// Stream data
app.get('/stream', (req, res) => {
  let readStream = fs.createReadStream(__dirname + '/public/emp.ndjson').pipe(ndjson.parse());

  const chunks = [];
  readStream.on('data', (data) => {
    chunks.push(JSON.stringify(data));
  });

  readStream.on('end', () => {
    var id = setInterval(() => {
      if (chunks.length) {
        res.write(chunks.shift() + '\n');
      } else {
          clearInterval(id);
          res.end();
      }
    }, 500);
  });
});
