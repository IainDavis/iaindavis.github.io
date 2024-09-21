import strings from './index';

const getString = (id: keyof typeof strings) => strings[id];
export default getString;