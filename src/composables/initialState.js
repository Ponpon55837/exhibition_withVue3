import { useState } from './state.js'

export const initialState = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [showIndex, setShowIndex] = useState(false)

  return { darkMode, setDarkMode, showIndex, setShowIndex }
}
