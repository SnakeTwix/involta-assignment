import axios from 'axios';
import { computed, onBeforeMount, ref } from 'vue';

type LoadingState = 'loading' | 'done' | 'error';

export function useAxios<T>(url: string) {
  const data = ref<T | null>();
  const state = ref<LoadingState>('loading');

  onBeforeMount(async () => {
    try {
      const res = await axios.get<T>(url);

      // Primitive response handling
      console.log(res);
      if (res.status !== 200) new Error();

      data.value = res.data;
      state.value = 'done';
    } catch (e) {
      // Can add error logging
      state.value = 'error';
    }
  });

  const stateCheck = computed(() => {
    switch (state.value) {
      case 'done':
        return 'show';
      case 'loading':
        return 'loading';
      case 'error':
        return 'error';
    }
  });

  return { data, state, stateCheck };
}

