import { renderItems } from '../config/utils/util';

const hello = () => {
  renderItems(
    'Be welcome to the RxJS study ambient'
  );
  renderItems(
    `open 'webpack.config.js' file and rename the 'entry'
    property value inside of module.exports object to the
    name of the file that you want to run in '/src' folder.`
  );
}

hello();