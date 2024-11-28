import { useCallback, useState } from "react";
import { useURLShortener } from "../context/URLShortenerProvider";
const apiUrl = "https://url-shortener-service.p.rapidapi.com/shorten";
const validateUrl = (url: string): string | null => {
  if (!url) return "URL cannot be empty.";
  if (!/^https?:\/\/[\w.-]+/.test(url))
    return "URL must start with http:// or https://";
  return null;
};
function useFetchShortenUrl() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const { setUrls, setStoredUrls } = useURLShortener();

  const fetchShortenedUrl = useCallback(
    async (urlInputRef: React.MutableRefObject<HTMLInputElement | null>) => {
      const url = urlInputRef.current?.value ?? "";
      const errorMessage = validateUrl(url);
      if (errorMessage) {
        setError(errorMessage);
        setIsError(true);
        return;
      }

      const data = new FormData();
      data.append("url", url);

      const options = {
        method: "POST",
        headers: {
          "x-rapidapi-key": `${import.meta.env.VITE_API_KEY}`,
          "x-rapidapi-host": `${import.meta.env.VITE_API_URL}`,
        },
        body: data,
      };

      try {
        setIsLoading(true);
        const response = await fetch(apiUrl, options);
        if (!response.ok) {
          if (response.status === 400) throw new Error("Invalid link.");
          return;
        }
        const result = (await response.json()) as { result_url: string };
        setStoredUrls((prevStoredUrls) => {
          return [
            { originalUrl: url, shortenedUrl: result.result_url },
            ...prevStoredUrls,
          ];
        });
        setUrls({ originalUrl: url, shortenedUrl: result.result_url });
        urlInputRef.current!.value = "";
      } catch (error) {
        if (error instanceof Error) {
          setIsError(true);
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  return { isLoading, isError, error, fetchShortenedUrl, setIsError, setError };
}

export default useFetchShortenUrl;
