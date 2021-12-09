<script setup lang="ts">
import { ref } from '@vue/reactivity';
import { onMounted } from 'vue'
import db from '../lib/db'
import Result from './Result.vue';
import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup'
import { sql, SQLite } from '@codemirror/lang-sql'
import { QueryExecResult } from 'sql.js';
import Error from './Error.vue';

const result = ref<QueryExecResult[]>()
const error = ref<Error>()
const editorView = ref<EditorView>()
onMounted(() => {
  editorView.value = new EditorView({
    state: EditorState.create({
      extensions: [basicSetup, sql({ dialect: SQLite, upperCaseKeywords: true })],
      doc: `CREATE TABLE hello (a int, b char);
INSERT INTO hello VALUES (0, 'hello');
INSERT INTO hello VALUES (1, 'world');
SELECT * FROM hello;`
    }),
    parent: document.querySelector('#editor-wrapper')!
  })
})
function exec() {
  try {
    result.value = db.exec(editorView.value!.state.doc.toJSON().reduce((acc, line) => acc + line, ''));
    error.value = undefined;
  } catch (e: any) {
    result.value = undefined;
    error.value = e;
  }
}
</script>

<template>
  <div>
    <div id="editor-wrapper"></div>
    <button @click="exec">Execute</button>
    <Result v-if="result" :result="result" />
    <Error v-if="error" :error="error" />
  </div>
</template>
