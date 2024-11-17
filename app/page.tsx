import ImageSlideShow from "@/components/ImageSlideShow";
import Link from "next/link";

export default function Home() {
  console.log("Home Page");

  return (
    <>
      <header className="flex gap-12 my-16 mx-auto w-[90%] max-w-[75rem]">
        {/* slideshow */}
        <div className="w-[40rem] h-[25rem]">
          <ImageSlideShow />
        </div>
        <div>
          <div className="text-[#ddd6cb] text-2xl">
            <h1 className="text-2xl font-bold font-montserrat tracking-[0.15rem] uppercase bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          {/* classes.cta
.cta a:first-child {
  background: transparent;
  font-weight: normal;
  color: #ff9b05;
  padding-left: 0;
}

.cta a:first-child:hover,
.cta a:first-child:active {
  background: transparent;
  color: #f9b241;
}
          */}
          <div className="text-base flex gap-4">
            <Link
              className="inline-block font-bold text-white mt-4 py-2 px-4 rounded-lg bg-gradient-to-r from-[#f9572a] to-[#ff9b05] 
              hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241]
              active:bg-gradient-to-r active:from-[#fd4715] active:to-[#f9b241]
               "
              href="/community"
            >
              Join the Community
            </Link>
            <Link
              className="inline-block font-bold text-white mt-4 py-2 px-4 rounded-lg bg-gradient-to-r from-[#f9572a] to-[#ff9b05] 
              hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241]
              active:bg-gradient-to-r active:from-[#fd4715] active:to-[#f9b241]
               "
              href="/meals"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col text-[#ddd6cb] text-2xl max-w-[50rem] w-[90%] my-[2rem] mx-auto font-montserrat">
          <h2 className="font-bold text-4xl my-5">How it works</h2>
          <p className="mt-4">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="mt-4">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
        {/* classes.section */}
        <section className="flex flex-col text-[#ddd6cb] text-2xl max-w-[50rem] w-[90%] my-[2rem] mx-auto font-montserrat">
          <h2 className="font-bold text-4xl my-5">Why NextLevel Food?</h2>
          <p className="mt-4">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="mt-4">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
