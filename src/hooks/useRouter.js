import { getCurrentInstance } from '@vue/composition-api'

export default function useRouter() {
  const vm = getCurrentInstance()
  return { route: vm.proxy.$route, router: vm.proxy.$router }
}
