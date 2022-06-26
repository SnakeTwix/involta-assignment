<script setup lang="ts">
import { computed } from 'vue';
import { useAxios } from '../../composables/useAxios';
import { useSocket } from '../../composables/useSocket';
import { People } from '../../interfaces/Person.interface';
import ErrorComponent from './ErrorComponent.vue';

const socket = useSocket();

socket.on('table/change', (data) => {
  // Table cell selector
  const selector = `[data-x='${data.x}'][data-y='${data.y}']`;
  const element = document.querySelector(selector) as HTMLElement;

  if (!element) return;

  element.innerText = data.data;
});

// Get table data
const { data: people, stateCheck } = useAxios<People>('/people');

function handleInput(e: Event) {
  // Get the element
  const element = e.target as HTMLElement;

  // Check if element is a table cell
  if (!element.dataset.x || !element.dataset.y) return;

  socket.emit('table/change', {
    x: +element.dataset.x,
    y: +element.dataset.y,
    data: element.innerText,
  });
}
</script>

<template>
  <ErrorComponent :state-check="stateCheck">
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
  </ErrorComponent>
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

