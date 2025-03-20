import common from './common';
import local from './local';
import dev from './dev';
import prod from './prod';

const phase = process.env.NODE_ENV;

let conf = {};
if (phase === 'local') {
  conf = local;
} else if (phase === 'prod') {
  conf = prod;
} else if (phase === 'dev') {
  conf = dev;
}

export default () => ({
  ...common,
  ...conf,
});
