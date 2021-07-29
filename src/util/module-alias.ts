import * as path from 'path';
import moduleAlias from 'module-alias';

// Create an alias for path, need add in this file and package.json
const files = path.resolve(__dirname, '../..');

moduleAlias.addAliases({
  '@src': path.join(files, 'src'),
  '@test': path.join(files, 'test'),
});
