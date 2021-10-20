import { getCurrentInstance } from '@vue/composition-api'

export function useRouter() {
  const vm = getCurrentInstance()
  return { route: vm.proxy.$route, router: vm.proxy.$router }
}
