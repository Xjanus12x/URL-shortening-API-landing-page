import { useRef } from "react";
import Button from "./Button";
import boostMobile from "../assets/images/bg-boost-mobile.svg";
import boostDesktop from "../assets/images/bg-boost-desktop.svg";
import useFetchShortenUrl from "../hooks/useFetchShortenUrl";
import useWindow from "../hooks/useWindow";

export default function URLShortenerForm() {
  const urlInputRef = useRef<HTMLInputElement | null>(null);
  const { isError, error, isLoading, fetchShortenedUrl, setIsError, setError } =
    useFetchShortenUrl();

  const { width } = useWindow();
  return (
    <section className="relative z-10 mt-20 after:h-full after:w-full after:bottom-2/4 after:-z-10 after:absolute after:bg-white">
      <form
        className="grid gap-2 p-5 mx-5 bg-left bg-cover rounded-lg bg-primary-darkViolet sm:mx-auto sm:p-7 xl:p-10 max-w-[75rem] sm:grid sm:grid-cols-[1fr_auto]"
        style={{
          backgroundImage: `url(${width > 640 ? boostDesktop : boostMobile})`,
        }}
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          fetchShortenedUrl(urlInputRef);
        }}
      >
        <input
          className={`px-4 py-2 rounded-sm sm:grow sm:rounded-md  ${
            isError ? "outline-2 outline-secondary-red outline-double" : ""
          }`}
          type="text"
          placeholder="Shorten a link here..."
          ref={urlInputRef}
          onChange={(e) => {
            const value = e.target.value.trim();
            if (!value) {
              setIsError(true);
              setError("Please add a link");
            } else {
              setIsError(false);
              setError("");
            }
          }}
        />
        {error && <span className="text-sm text-secondary-red sm:order-3">{error}</span>}
        <Button
          className="p-5 rounded-md sm:order-2"
          label={isLoading ? "Loading..." : "Shorten it!"}
        />
      </form>
    </section>
  );
}
