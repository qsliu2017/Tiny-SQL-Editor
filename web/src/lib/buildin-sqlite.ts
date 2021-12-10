import initSqlJs from 'sql.js';
import { ExecSql } from './sql-executor';

const sqlJs = await initSqlJs({
  locateFile: (file: string) => `https://sql.js.org/dist/${file}`,
});
const db = new sqlJs.Database();

const BuildinSqliteExector: ExecSql = (sql: string) => {
  try {
    return db.exec(sql);
  } catch (e: any) {
    return e;
  }
};

export default BuildinSqliteExector;
