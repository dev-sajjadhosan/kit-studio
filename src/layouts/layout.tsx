import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import { ThemeProvider } from '@/components/custom/theme-provider'
import FrameBar from '@/components/custom/frame'
import Model_MCPPage from '@/pages/model_mcp/model_mcp'
import SettingPage from '@/pages/setting/settng'
import WhatIsNewPage from '@/pages/whatisNew/whatisNew'
import AboutUsPage from '@/pages/aboutUs/aboutUs'
import TemplatesPage from '@/pages/templates/templates'
import KittyChatBox from '@/components/custom/kittyChatBox'
import KittyChat from '@/pages/kittychat/kittychat'
import CreateKitPage from '@/pages/createKit/createKit'

export default function Layout() {
  return (
    <>
      <BrowserRouter basename="/">
        <ThemeProvider>
          <FrameBar />
          <KittyChatBox />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/model&mcp_protocol" element={<Model_MCPPage />} />
            <Route path="/setting" element={<SettingPage />} />
            <Route path="/what_is_new" element={<WhatIsNewPage />} />
            <Route path="/about_us" element={<AboutUsPage />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/kitty" element={<KittyChat />} />
            <Route path="/create-kit/:id" element={<CreateKitPage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}
