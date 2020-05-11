import { logValues } from '../config/utils/util';

const hello = () => {
  logValues(
    'Be welcome to the RxJS study ambient'
  );
  logValues(
    `open 'webpack.config.js' file and rename the 'entry'
    property value inside of module.exports object to the
    name of the file that you want to run in '/src' folder.`
  );
}

hello();