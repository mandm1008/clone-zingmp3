import { useContext } from 'react'
import { MusicContext } from '~/store'

const useMusic = () => useContext(MusicContext)

export default useMusic
