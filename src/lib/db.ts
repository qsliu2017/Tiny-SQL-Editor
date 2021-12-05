import initSqlJs from 'sql.js';

const sqlJs = await initSqlJs({
  locateFile: (file: string) => `https://sql.js.org/dist/${file}`,
});
const db = new sqlJs.Database();

export default db;
