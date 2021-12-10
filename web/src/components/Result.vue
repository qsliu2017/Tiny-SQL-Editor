<script setup lang="ts">
import { ExecResult, SqlResult } from '../lib/sql-executor';
defineProps<{
  result: ExecResult
}>();
const isErr = (result: ExecResult) => result instanceof Error;
const asErr = (result: ExecResult) => result as Error;
const asSqlResult = (result: ExecResult) => result as SqlResult[];
</script>

<template>
  <div v-if="isErr(result)" class="error">
    <p>{{ asErr(result).message }}</p>
  </div>
  <div v-else>
    <table v-for="table of asSqlResult(result)">
      <thead>
        <tr>
          <td v-for="col of table.columns">{{ col }}</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="value of table.values">
          <td v-for="cell of value">{{ cell }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.error {
  color: red;
  transition: 0.5s;
  overflow: hidden;
  margin: 15px;
}

table {
  width: auto;
  margin: auto;
  border: 1px solid black;
  border-collapse: collapse;
  margin-bottom: 10px;
}

th,
td {
  border: 1px solid #777;
}
</style>