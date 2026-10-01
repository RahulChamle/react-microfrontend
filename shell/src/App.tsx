import { lazy, Suspense } from "react";

const AuthApp = lazy(()=> import('auth_mfe/AuthApp')); // lazy(()=> import('auth_mfe/AuthApp))

function App() {
  return(
    <div>
      <h1>Shell Application</h1>
      <Suspense fallback={<div>Loading Authentication..</div>}>
        <AuthApp />
      </Suspense>
    </div>
  )
}

export default App;