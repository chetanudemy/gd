import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import { AuthContext } from './Store/Auth';
import { useContext } from 'react';
import Notfound from './Pages/Notfound';
import Layout from './Component/Layout/Layout';
import Expense from './Pages/Expense/Expense';

function App() {
  const context = useContext(AuthContext);
  return (
    <Switch>
      <Route path='/' exact>
        {!context.isLoggedIn ? <SignIn /> : <Redirect to='/Dashboard' />}
      </Route>
      <Route path='/sign-in'>
        {!context.isLoggedIn ? <SignIn /> : <Redirect to='/Dashboard' />}
      </Route>
      <Route path='/sign-up'>
        {!context.isLoggedIn ? <SignUp /> : <Redirect to='/Dashboard' />}
      </Route>
      <Route path='/Dashboard'>
        {context.isLoggedIn ? (
          <Layout>
            <Dashboard />
          </Layout>
        ) : (
          <Redirect to='/sign-in' />
        )}
      </Route>
      <Route path='/Expense'>
        {context.isLoggedIn ? (
          <Layout>
            <Expense />
          </Layout>
        ) : (
          <Redirect to='/sign-in' />
        )}
      </Route>
      <Route path='*'>
        <Notfound />
      </Route>
    </Switch>
  );
}

export default App;
