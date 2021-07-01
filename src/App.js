import { Redirect, Route, Switch } from 'react-router-dom';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import { AuthContext } from './Store/Auth';
import { useContext } from 'react';
import Layout from './Component/Layout/Layout';
import Product from './Pages/Product/Product';
import Shopping from './Pages/Shopping/Shopping';

function App() {
  const context = useContext(AuthContext);
  return (
    <Switch>
      <Route path='/' exact>
        {!context.isLoggedIn ? <SignIn /> : <Redirect to='/Shopping' />}
      </Route>
      <Route path='/sign-in'>
        {!context.isLoggedIn ? <SignIn /> : <Redirect to='/Shopping' />}
      </Route>
      <Route path='/sign-up'>
        {!context.isLoggedIn ? <SignUp /> : <Redirect to='/Shopping' />}
      </Route>
      <Route path='/Dashboard'>
        {context.isLoggedIn ? (
          <Layout>
            <Shopping />
          </Layout>
        ) : (
          <Redirect to='/sign-in' />
        )}
      </Route>

      <Route path='/Product'>
        {context.isLoggedIn ? (
          <Layout>
            <Product />
          </Layout>
        ) : (
          <Redirect to='/sign-in' />
        )}
      </Route>
      <Route path='/Shopping'>
        {context.isLoggedIn ? (
          <Layout>
            <Shopping />
          </Layout>
        ) : (
          <Redirect to='/sign-in' />
        )}
      </Route>
      <Route path='*'>
        <Redirect to='/sign-in' />
      </Route>
    </Switch>
  );
}

export default App;
