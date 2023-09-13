import React from 'react'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import store from './redux'
import '@/styles/app.scss'
import routes from './config/routes'

const queryClient = new QueryClient()

function App(): React.JSX.Element {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={createBrowserRouter(routes)} />
            </QueryClientProvider>
        </Provider>
    )
}

export default App
