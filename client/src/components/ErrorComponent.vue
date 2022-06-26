<script setup lang="ts">
export type IState = 'show' | 'error' | 'loading';

export interface Props {
  stateCheck: IState;
}

const props = defineProps<Props>();
</script>

<template>
  <slot v-if="stateCheck === 'show'"></slot>
  <div v-else-if="stateCheck === 'loading'">Loading...</div>
  <div v-else>Something went wrong...</div>
</template>

<style lang="scss" scoped></style>

