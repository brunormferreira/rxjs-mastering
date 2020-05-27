import { logValues } from '../utils/util';

const hello = () => {
  logValues(
    'Be welcome to the RxJS ambient study :)'
  );
  logValues(
    `Please, uncomment the file that you want to run inside
    '/src' folder.`
  );
}

hello();
