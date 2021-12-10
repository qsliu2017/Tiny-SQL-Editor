export interface SqlResult {
  columns: string[];
  values: string[][];
}

export interface ExecSql {
  (sql: string): ExecResult;
}

export type ExecResult = SqlResult[] | Error;
