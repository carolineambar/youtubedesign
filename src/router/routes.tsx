import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Explore from '../pages/Explore/Explore';
import Subscriptions from '../pages/Subscriptions/Subscriptions';
import Library from '../pages/Library/Library';
import History from '../pages/History/History';

const Router: React.FC = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/explore' element={<Explore />} />
    <Route path='/subscriptions' element={<Subscriptions />} />
    <Route path='/library' element={<Library />} />
    <Route path='/history' element={<History />} />
  </Routes>
);

export default Router;
