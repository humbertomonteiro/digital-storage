import "./App.css";
import Layout from "./pages/Layout";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Layout>
        <AppRoutes />
      </Layout>
    </>
  );
}

export default App;
