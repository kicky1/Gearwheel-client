import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuthorizationStore } from './stores/useAuthorizationStore';
import Login from './pages/login';
import NotFound from './pages/notfound';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Users from './pages/users';
import Dashboard from './pages/dashboard';
import Sidebar from './components/sidebar';

const App = () => {
  const authorized = useAuthorizationStore((state) => state.authorized);
  const queryClient = new QueryClient();

  console.log(authorized)

  return (
    <div className='bg-slate-200 min-h-screen flex'>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          {authorized && (
            <div className="w-64 bg-white h-full">
              <Sidebar />
            </div>
          )}
          <div className={`flex-1`}>
            <div className="container px-4 p-4 bg-slate-200">
              <Routes>
                {authorized ? (
                  <>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/users" element={<Users />} />
                  </>
                ) : (
                  <Route path="/" element={<Login />} />
                )}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
};

export default App;
