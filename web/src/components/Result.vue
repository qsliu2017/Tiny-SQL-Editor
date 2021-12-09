<script setup lang="ts">
import { QueryExecResult } from 'sql.js'
defineProps<{
  result: QueryExecResult[]
}>()
</script>

<template>
  <div>
    <table v-for="table of result">
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