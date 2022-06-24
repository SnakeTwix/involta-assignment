<script setup lang="ts">
import data from '../mock/data.json';
import type { People } from '../interfaces/Person.interface';
import { useSocket } from '../composables/useSocket';
const people: People = data;
const socket = useSocket();

socket.on('table/change', (data) => {
  const selector = `[data-x='${data.x}'][data-y='${data.y}']`;
  const element = document.querySelector(selector) as HTMLElement;

  if (!element) return;

  element.innerText = data.data;
});

function handleInput(e: Event) {
  const element = e.target as HTMLElement;
  if (!element.dataset.x) return;

  // TODO: Implement communication with server
  socket.emit('table/change', {
    x: +element.dataset.x,
    y: +element.dataset.y,
    data: element.innerText,
  });
}
</script>

<template>
  <div class="wrapper">
    <table class="people-data" @input="handleInput">
      <thead>
        <th class="head_info"></th>
        <th class="head_info">First Name</th>
        <th class="head_info">Last Name</th>
        <th class="head_info">Favorite color</th>
        <th class="head_info">Phone number</th>
        <th class="head_info">Department</th>
      </thead>
      <tbody>
        <tr
          class="person_row"
          :key="person.phone"
          v-for="(person, indexX) in people"
        >
          <td class="cell">{{ indexX + 1 }}</td>
          <!-- To disable spellchecking on all browsers -->
          <td
            contenteditable="true"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            class="cell"
            :data-x="indexX"
            :data-y="indexY"
            v-for="(key, indexY) of Object.keys(person)"
          >
            {{ person[key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.people-data {
  border-collapse: collapse;
  border: 3px solid hsl(0, 0%, 9%);
  border-radius: 0.5rem;
  .person_row:nth-child(odd) {
    background-color: hsl(0, 0%, 12%);
  }
}

.head_info,
.cell {
  padding: 0.5rem 1rem;
  text-align: center;
  outline: none;
}

.cell:hover {
  color: hsl(153, 47%, 49%);
}
</style>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
  background-color: black;
  color: white;
}
</style>
