const fs = require('fs');

fs.readFile('src/metadata.json', (err, content) => {
  if (err) throw err;
  const metadata = JSON.parse(content);
  const lastBuildNumber = `${metadata.buildVersion.major}.${metadata.buildVersion.minor}.${metadata.buildVersion.patch}`;
  metadata.buildVersion.patch = process.env.TRAVIS_BUILD_NUMBER || 'UNKNOWN_BUILD';
  fs.writeFile('src/metadata.json', JSON.stringify(metadata), (err) => {
    if (err) throw err;

    const nextBuildNumber = `${metadata.buildVersion.major}.${metadata.buildVersion.minor}.${metadata.buildVersion.patch}`;
    console.log(`Generating a new build: ${lastBuildNumber} --> ${nextBuildNumber}`);
  });
});
