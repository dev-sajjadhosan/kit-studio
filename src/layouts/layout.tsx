import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import { ThemeProvider } from '@/components/custom/theme-provider'
import FrameBar from '@/components/custom/frame'

export default function Layout() {
  return (
    <>
      <ThemeProvider>
        <FrameBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}
