import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
export type Urls = {
  originalUrl: string;
  shortenedUrl: string;
};
type URLShortenerContextType = {
  urls: Urls | undefined;
  setUrls: React.Dispatch<React.SetStateAction<Urls | undefined>>;
  storedUrls: Urls[];
  setStoredUrls: React.Dispatch<React.SetStateAction<Urls[]>>;
};

const URLShortenerContext = createContext<URLShortenerContextType | null>(null);

export function useURLShortener() {
  const context = useContext(URLShortenerContext);
  if (!context)
    throw new Error("useURLShortener must be use inside URLShortenerProvider.");
  return context;
}

type URLShortenerProviderProps = PropsWithChildren;
export default function URLShortenerProvider({
  children,
}: URLShortenerProviderProps) {
  const [urls, setUrls] = useState<Urls | undefined>();
  const [storedUrls, setStoredUrls] = useState<Urls[]>(() => {
    const saved = localStorage.getItem("storedUrls");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("storedUrls", JSON.stringify(storedUrls));
  }, [storedUrls]);
  return (
    <URLShortenerContext.Provider
      value={{
        urls,
        setUrls,
        storedUrls,
        setStoredUrls,
      }}
    >
      {children}
    </URLShortenerContext.Provider>
  );
}
