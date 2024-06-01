import React from 'react';
import { LibraryClient } from './library-client';

const ApiContext = React.createContext<LibraryClient | null>(null);

export default function ApiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = new LibraryClient();
  return <ApiContext.Provider value={client}>{children}</ApiContext.Provider>;
}

export function useApi() {
  return React.useContext(ApiContext);
}
