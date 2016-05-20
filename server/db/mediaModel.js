var pg            = require('pg');
var dbConnection  = 'postgres://localhost:5432/north_nile';

function createAudio() {
  pg.connect(dbConnection, function(err, client, done) {
    if(err) {
      console.log('Error connecting to DB.' + err);
      process.exit(1);
    } else {
      var query = client.query('CREATE TABLE IF NOT EXISTS "Audio" (' +
        ' "id" serial PRIMARY KEY,' +
        ' "audioReference" varchar(75) NOT NULL)');

      query.on('end', function() {
        console.log('Successfully created Audio schema.');
        done();
      });

      query.on('error', function(error) {
        console.log('Error creating Audio schema.' + err);
        process.exit(1);
      });
    }
  });
}

function createImage() {
  pg.connect(dbConnection, function(err, client, done) {
    if(err) {
      console.log('Error connecting to DB.' + err);
      process.exit(1);
    } else {
      var query = client.query('CREATE TABLE IF NOT EXISTS "Image" (' +
        ' "id" serial PRIMARY KEY,' +
        ' "imageReference" varchar(75) NOT NULL)');

      query.on('end', function() {
        console.log('Successfully created Image schema.');
        done();
      });

      query.on('error', function(error) {
        console.log('Error creating Image schema.' + err);
        process.exit(1);
      });
    }
  });
}

function createVideo() {
  pg.connect(dbConnection, function(err, client, done) {
    if(err) {
      console.log('Error connecting to DB.' + err);
      process.exit(1);
    } else {
      var query = client.query('CREATE TABLE IF NOT EXISTS "Video" (' +
        ' "id" serial PRIMARY KEY,' +
        ' "videoReference" varchar(75) NOT NULL)');

      query.on('end', function() {
        console.log('Successfully created Video schema.');
        done();
      });

      query.on('error', function(error) {
        console.log('Error creating Video schema.' + err);
        process.exit(1);
      });
    }
  });
}

module.exports.createAudio = createAudio;
module.exports.createImage = createImage;
module.exports.createVideo = createVideo;
