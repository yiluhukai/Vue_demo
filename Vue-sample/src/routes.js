import Home from './components/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Stocks from "./components/Stock/Stocks";

export const routes = [
  {path: "", component: Home},
  {path: "/portfolio", component: Portfolio},
  {path: "/stocks", component: Stocks}
]
