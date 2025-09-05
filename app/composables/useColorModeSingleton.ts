export type TAvailableColorModes = 'light' | 'dark' | 'system'

export default function useColorModeSingleton() {
  const colorMode = useColorMode()

  return {
    current: colorMode.value,
    default: colorMode.preference,
    setColorMode: (mode: TAvailableColorModes) => {
      colorMode.value = mode
    },
  }
}
