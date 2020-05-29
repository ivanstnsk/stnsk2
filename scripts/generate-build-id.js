const fs = require('fs');

fs.readFile('src/metadata.json', (err, content) => {
  if (err) throw err;
  const metadata = JSON.parse(content);
  const lastBuildNumber = `${metadata.buildVersion.major}.${metadata.buildVersion.minor}.${metadata.buildVersion.patch}`;
  metadata.buildVersion.patch += 1;
  fs.writeFile('src/metadata.json', JSON.stringify(metadata), (err) => {
    if (err) throw err;

    const nextBuildNumber = `${metadata.buildVersion.major}.${metadata.buildVersion.minor}.${metadata.buildVersion.patch}`;
    console.log(`Generating a new build: ${lastBuildNumber} --> ${nextBuildNumber}`);
  });
});
