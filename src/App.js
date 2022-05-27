import { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './router'
import { DefaultLayout } from '~/components/Layouts'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((item, index) => {
          const Layout = item.layout === null ? Fragment : item.layout || DefaultLayout
          const Content = item.component

          return (
            <Route
              key={index}
              path={item.path}
              element={
                <Layout>
                  <Content />
                </Layout>
              }
            />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
