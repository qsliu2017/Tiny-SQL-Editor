<script setup lang="ts">
import { ref } from '@vue/reactivity';
import { Directive } from 'vue';
import Result from './Result.vue';
import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup';
import { sql, SQLite } from '@codemirror/lang-sql';
import { ExecResult, ExecSql } from '../lib/sql-executor';
const props = defineProps<{
  sqlExecutor: ExecSql
}>()
const result = ref<ExecResult>()
let editorView: EditorView

const vCmEditor: Directive = {
  beforeMount(el) {
    editorView = new EditorView({
      state: EditorState.create({
        extensions: [basicSetup, sql({ dialect: SQLite, upperCaseKeywords: true })],
        doc: `CREATE TABLE hello (a int, b char);
INSERT INTO hello VALUES (0, 'hello');
INSERT INTO hello VALUES (1, 'world');
SELECT * FROM hello;`
      }),
      parent: el
    })
  }
}

const getSql = () => editorView.state.doc.toJSON().reduce((acc, line) => acc + line, '');
const exec = () => { result.value = props.sqlExecutor(getSql()) }
</script>

<template>
  <div>
    <div v-cm-editor="true"></div>
    <button @click="exec">Execute</button>
    <Result v-if="result" :result="result" />
  </div>
</template>

<style>
.cm-editor {
  border: 1px solid #222;
  height: auto;
}
.cm-scroller {
  overflow-y: hidden;
  overflow-x: auto;
}
.cm-editor.cm-focused {
  outline: 2px solid cyan;
}
.cm-editor .cm-content {
  font-family: "Consolas";
}
</style>