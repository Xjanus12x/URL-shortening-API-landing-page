import Button from "./Button";
import { Urls, useURLShortener } from "../context/URLShortenerProvider";
import { useState } from "react";

export default function URLShortenerResults() {
  const { storedUrls } = useURLShortener();
  if (!storedUrls) return null;
  return (
    <section className="grid gap-5 max-w-[75rem] md:mx-auto sm:grid-cols-2 md:grid-cols-3 px-5 lg:px-0">
      {storedUrls?.map((url, i) => (
        <URLShortenerResult
          originalUrl={url.originalUrl}
          shortenedUrl={url.shortenedUrl}
          index={i}
          key={i}
        />
      ))}
    </section>
  );
}

type URLShortenerResultProps = Urls & { index: number };
function URLShortenerResult({
  originalUrl,
  shortenedUrl,
  index,
}: URLShortenerResultProps) {
  const { setStoredUrls } = useURLShortener();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const textToCopy = shortenedUrl;
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);

      // Reset the copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="space-y-0.5 min-w-full">
      <p className="p-3.5 break-all bg-white rounded-sm font-bold text-neutral-veryDarkViolet">
        {originalUrl}
      </p>
      <div className="p-3.5 break-all bg-white rounded-sm space-y-2">
        <p className="font-bold text-wrap text-primary-cyan">{shortenedUrl}</p>
        <div className="flex gap-2">
          <Button
            className="rounded-sm grow disabled:bg-primary-darkViolet"
            type="button"
            label={copied ? "Copied!" : "Copy"}
            onClick={handleCopy}
            disabled={copied}
          />
          <Button
            className="rounded-sm bg-secondary-red grow"
            type="button"
            label="Delete"
            onClick={() => {
              setStoredUrls((prevStoredUrls) => {
                return prevStoredUrls.filter((_, i) => i !== index);
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
