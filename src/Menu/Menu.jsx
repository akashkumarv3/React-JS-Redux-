import "./Menu.css";
import React, { Suspense, lazy } from "react";
import { HashRouter,Route, Routes } from "react-router-dom";


const BasicRedux=lazy(()=>import('../BasicRedux/index'));
const ReduxAction=lazy(()=>import('../ReduxAction/index'))
const ReduxForms=lazy(()=>import('../ReduxForms/index'))
const reduxSaga=lazy(()=>import('../ReduxSaga/index'))
const ReduxThunk=lazy(()=>import('../ReduxThunk/index'))


function template() {
  return (
    <div className="menu">
     <div className="menu-bar">
    <a href="#/redux-basic">Redux Basic</a>
    <a href="#/redux-Actions">Redux Actions</a>
    <a href="#/redux-Forms">Redux Forms</a>
    <a href="#/redux-Saga">Redux Saga</a>
    <a href="#/redux-Thunk">Redux Thunk</a>
     </div>
     <Suspense>
     <HashRouter>
      <div>
        <Routes>
        <Route path="/" exact Component={BasicRedux}/>
        <Route path="/redux-basic" Component={BasicRedux}/>
        <Route path="/redux-Actions" Component={ReduxAction}/>
        <Route path="/redux-Forms" Component={ReduxForms}/>
        <Route path="/redux-Saga" Component={reduxSaga}/>
        <Route path="/redux-Thunk" Component={ReduxThunk}/>
        </Routes>
      </div>

     </HashRouter>
     </Suspense>
    </div>
  );
};

export default template;
