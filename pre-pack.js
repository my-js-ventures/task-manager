const {name, version, main} = require('./package.json');
const fs = require('fs');

const dist = './dist/';

fs.createReadStream(main).pipe(fs.createWriteStream(`${dist}${main}`));

const config = {
    config: {
        devTools: false,
        entry: 'index.html'
    },
    main,
    name,
    version
};

fs.writeFileSync(`${dist}package.json`, JSON.stringify(config, null, '  '));
