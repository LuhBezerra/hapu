import { createContext, ReactNode, useContext, useState } from 'react';
import { useCallback } from 'react';

interface IUserIp {
  ip: string;
}

interface IHapuContextProvider {
  children: ReactNode;
}

interface IHapuContextValues {
  userIp: IUserIp;
  loadingUserIp: boolean;
  getUserIp: () => void;
}

const hapuContextValues = {
  userIp: { ip: '' },
  loadingUserIp: false,
  getUserIp: () => {},
};

export const HapuContext = createContext<IHapuContextValues>(hapuContextValues);

export const HapuProvider = ({ children }: IHapuContextProvider) => {
  const [userIp, setUserIp] = useState<IUserIp>({ ip: '' });
  const [loadingUserIp, setLoadingUserIp] = useState<boolean>(false);

  const getUserIp = useCallback(async () => {
    try {
      setLoadingUserIp(true);
      const response = await fetch('https://api.ipify.org/?format=json');
      setUserIp(await response?.json());
    } catch (error) {
      setUserIp({ ip: '' });
    } finally {
      setLoadingUserIp(false);
    }
  }, []);

  const providerValue = {
    userIp,
    loadingUserIp,
    getUserIp,
  };

  return (
    <HapuContext.Provider value={providerValue}>
      {children}
    </HapuContext.Provider>
  );
};

export const useHapuContext = () => useContext(HapuContext);
