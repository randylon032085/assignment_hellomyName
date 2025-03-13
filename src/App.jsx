// Created by Randylon Torda
// Date January 14, 2025
//Lab -1

import AppLayout from "./content/AppLayout";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <div>
      <UserContextProvider>
        <AppLayout />
      </UserContextProvider>
    </div>
  );
}

export default App;
