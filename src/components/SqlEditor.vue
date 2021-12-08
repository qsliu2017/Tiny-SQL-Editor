<script setup lang="ts">
import { ref } from '@vue/reactivity';
import { onMounted } from 'vue'
import db from '../lib/db'
import Result from './Result.vue';
import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup'
import { sql, SQLite } from '@codemirror/lang-sql'

const output = ref(db.exec(''))
const editorState = EditorState.create({
  extensions: [basicSetup, sql({ dialect: SQLite })],
  doc: "CREATE TABLE hello (a int, b char); \n\
INSERT INTO hello VALUES (0, 'hello'); \n\
INSERT INTO hello VALUES (1, 'world'); \n\
SELECT * FROM hello;\n"
})
function exec() {
  output.value = db.exec(editorState.doc.toJSON().reduce((acc, line) => acc + line + '\n', ''));
}
onMounted(() => {
  new EditorView({ state: editorState, parent: document.querySelector('#editor-wrapper')! })
})
</script>

<template>
  <div>
    <div id="editor-wrapper"></div>
    <button @click="exec">Execute</button>
    <Result :output="output" />
  </div>
</template>
