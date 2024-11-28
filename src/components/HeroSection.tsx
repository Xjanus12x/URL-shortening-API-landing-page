import illustrationWorking from "../assets/images/illustration-working.svg";
import Button from "./Button";

export default function HeroSection() {
  return (
    <section className="space-y-10 overflow-hidden sm:flex sm:items-center sm:justify-center">
      <div className="order-2 sm:grow sm:shrink">
        <img src={illustrationWorking} alt="" />
      </div>
      <article className="mx-5 space-y-5 text-center sm:order-1 sm:text-left sm:grow-0 sm:shrink">
        <h1 className="text-4xl font-bold text-balance sm:text-5xl sm:max-w-[15ch] 2xl:text-7xl text-neutral-veryDarkViolet">
          More than just shorten links
        </h1>
        <p className="text-neutral-grayishViolet max-w-[40ch]">
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <Button className="rounded-full" label="Get Started" type="button" />
      </article>
    </section>
  );
}
