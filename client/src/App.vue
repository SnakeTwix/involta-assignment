<template>
  <div class="wrapper">
    <table class="people-data">
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
          v-for="(person, index) in people"
        >
          <td class="cell">{{ index + 1 }}</td>
          <td class="cell" v-for="key of Object.keys(person)">
            {{ person[key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import data from '../mock/data.json';
import type { People } from '../interfaces/Person.interface';
const people: People = data;
</script>

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
