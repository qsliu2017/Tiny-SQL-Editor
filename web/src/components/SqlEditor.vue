<script setup lang="ts">
import { ref } from '@vue/reactivity';
import { onMounted } from 'vue'
import db from '../lib/db'
import Result from './Result.vue';
import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup'
import { sql, SQLite } from '@codemirror/lang-sql'

const output = ref(db.exec(''))
const editorView = ref<EditorView>(new EditorView)
const editorState = EditorState.create({
  extensions: [basicSetup, sql({ dialect: SQLite, upperCaseKeywords: true })],
  doc: `CREATE TABLE hello (a int, b char);
INSERT INTO hello VALUES (0, 'hello');
INSERT INTO hello VALUES (1, 'world');
SELECT * FROM hello;`
})
function exec() {
  output.value = db.exec(editorView.value.state.doc.toJSON().reduce((acc, line) => acc + line + '\n', ''));
}
onMounted(() => {
  editorView.value = new EditorView({ state: editorState, parent: document.querySelector('#editor-wrapper')! })
})
</script>

<template>
  <div>
    <div id="editor-wrapper"></div>
    <button @click="exec">Execute</button>
    <Result :output="output" />
  </div>
</template>
