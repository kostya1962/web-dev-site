export const useAuthStore = defineStore(
  "auth",
  () => {
    const token = ref<string | undefined>();

    function setToken(val: string) {
      token.value = val;
    }

    function clearToken() {
      token.value = undefined;
    }

    return { token, setToken, clearToken };
  },
  {
    persist: true,
  }
);
