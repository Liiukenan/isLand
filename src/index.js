import React from 'react'
import ReactDOM from 'react-dom'
import 'reset-css'
import '@css/reset.styl'
import 'lib-flexible'
import initReactFastclick from 'react-fastclick';
import Router from './router';
initReactFastclick()
ReactDOM.render(<Router/>,document.getElementById("root"))