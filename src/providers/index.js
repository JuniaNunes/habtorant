import { HabitsProvider } from "./Habits";

import UserProvider from "./UserProvider";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <HabitsProvider>{children}</HabitsProvider>
    </UserProvider>
  );
};

export default Providers;
