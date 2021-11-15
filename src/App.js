import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Products from './components/Products'
import AddProduct from './components/AddProduct'

const App = () => {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add Item</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/add">
            <AddProduct />
          </Route>
          <Route path="/">
            <Products />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
