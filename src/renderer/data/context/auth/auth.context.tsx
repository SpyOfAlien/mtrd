import { createContext, useReducer } from "react";
import { AuthContextType } from "src/main/lib/model";

export const AuthContext = createContext<AuthContextType>(null);
export const AuthDispatchContext = createContext(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [auth, dispatch] = useReducer(authReducer, {});

  return (
    <AuthContext.Provider value={auth}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};

const authReducer = (auth: any, action: any) => {
  switch (action.type) {
    case "auth:login": {
      return {
        ...auth,
        logged: true,
        user: action.data,
      };
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
