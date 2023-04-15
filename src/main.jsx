import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Mealdb from './components/Mealdb'
import App from './App'
import Main from './components/Main'
import About from './components/About'
import Books from './components/Books'
import BookDetails from './components/BookDetails'
import Error from './components/Error'


const router = createBrowserRouter([
  // {
  //   path: "home",
  //   element: <Home></Home>
  // },
  // {
  //   path: "/",
  //   element: <Mealdb></Mealdb>
  // },
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Main></Main>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'books',
        element: <Books></Books>,
        loader: () => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: 'book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: ({ params }) => fetch(`https://api.itbook.store/1.0/books/${params.bookId}`)
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
