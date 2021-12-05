<script setup lang="ts">
import { ref } from '@vue/reactivity';
import db from '../lib/db'

const input = ref('');
const output = ref(db.exec(''))

const exec = () => output.value = db.exec(input.value);
(function init() {
  input.value = "CREATE TABLE hello (a int, b char); \
INSERT INTO hello VALUES (0, 'hello'); \
INSERT INTO hello VALUES (1, 'world');"
  exec()
  input.value = "SELECT * FROM hello;"
  exec()
})()
</script>

<template>
  <div>
    <textarea v-model="input"></textarea>
    <button @click="exec">Execute</button>
    <div>
      <table v-for="table of output">
        <thead>
          <tr>
            <td v-for="column in table.columns">{{ column }}</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in table.values">
            <td v-for="cell in row">{{ cell }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
