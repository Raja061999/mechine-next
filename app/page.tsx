import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <header className="bg-primary w-full fixed left-0 right-0 z-56">
         <nav className="relative flex h-14 items-center justify-between ">
          <div>
            <a href="#" className="text-2xl uppercase font-oswald">
              Bur <span className="text-secondary ">ger</span>
            </a>
          </div>
          <div className="hidden absolute top-0 left-0 w-full py-14 bg-primary border-b border-secondary md:block md:static md:py-0 md:border-none md:ml-auto">
            <ul className="flex flex-col text-center gap-5 md:flex-row md:justify-center md:items-center md:gap-10">
              <li><a href="#" className="hover:text-secondary ease-in duration-200">Home</a></li>
              <li><a href="#" className="hover:text-secondary ease-in duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-secondary ease-in duration-200">Menu</a></li>
              <li><a href="#" className="hover:text-secondary ease-in duration-200">Review</a></li>
            </ul>
            <div className="absolute top-[0.7rem] right-4 text-2xl cursor-pointer md:hidden">
              <i className="ri-close-line"></i>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <i className="ri-moon-line cursor-pointer ml-4 text-xl"></i>
            <div className="md:hidden">
              <i className="ri-menu-2-line cursor-pointer text-xl"></i>
            </div>
          </div>
         </nav>
    </header>
    <main className="">
      <section className="" id="home">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div className="mx-auto md:basis-1/2 lg:basis-2/5 animate-move" >
           <img src={"/img/home-image.png"} className="md:w-full w-40 object-cover" alt="Burger Image" />
          </div>
          <div className="text-center md:basis-1/2 lg:basis-3/5 md:text-start ">
            <h1 className="home_title">Happy tummy with tasty burger</h1>
            <div className="separator mx-auto md:mx-0"></div>
            <p className="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis dolorem dolores optio pariatur repudiandae soluta voluptatem numquam quam iste. Obcaecati distinctio nemo minima atque sint unde alias voluptas, rerum quaerat.</p>
            <div className="text-base flex items-center justify-center gap-4 py-10">
              <div className="text-center">
                <i className="fa-solid fa-utensils text-secondary text-4xl"></i>
                <br></br>
                Delicious
              </div>
               <div className="text-center">
                <i className="fa-solid fa-droplet text-secondary text-4xl"></i>
                <br></br>
                Fresh
              </div>
              <div className="text-center">
                <i className="fa-solid fa-envira text-secondary text-4xl"></i>
                <br></br>
                Organic
              </div>
            </div>
            <Link href={"#"} className="btn btn-primary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* category section starts here */}
      <section className="section" id="category">
        <div className="container flex flex-col gap-5 md:flex-row">

          {/* card 1 */}
          <div className="bg-secondary flex py-3 overflow-hidden rounded-lg md:flex-1">
            <div className="basis-1/3 relative">
              <img src={"/img/burger-1.png"} alt="burger-1" className="absolute w-28 -bottom-4 -left-4"/>
            </div>
            <div>
            <div className="mb-2">
              <h4 className="card_title">Food</h4>
              <p className="text-xs">Lorem ipsum dolor sit, amet consectetur</p>
            </div>
            <a href="#" className="text-dark cursor-pointer">Buy Online</a>
            </div>
          </div>

          {/* card 2 */}
            <div className="bg-red flex py-3 overflow-hidden rounded-lg md:flex-1">
            <div className="basis-1/3 relative">
              <img src={"/img/snack-1.png"} alt="burger-1" className="absolute w-28 -bottom-4 -left-4"/>
            </div>
            <div>
            <div className="mb-2">
              <h4 className="card_title">Food</h4>
              <p className="text-xs">Lorem ipsum dolor sit, amet consectetur</p>
            </div>
            <a href="#" className="text-secondary cursor-pointer">Buy Online</a>
            </div>
          </div>
          {/* card 3 */}

            <div className="bg-green flex py-3 overflow-hidden rounded-lg md:flex-1">
            <div className="basis-1/3 relative">
              <img src={"/img/beverage-2.png"} alt="burger-1" className="absolute w-28 -bottom-4 -left-4"/>
            </div>
            <div>
            <div className="mb-2">
              <h4 className="card_title">Food</h4>
              <p className="text-xs">Lorem ipsum dolor sit, amet consectetur</p>
            </div>
            <a href="#" className="text-secondary cursor-pointer">Buy Online</a>
            </div>
          </div>

        </div>
      </section>

      {/* promo section starts here */}
      <section id="promo">
        <div className="container flex flex-col gap-5 lg:flex-row lg:gap-10">

          {/* card 1 */}
          <div className="bg-primary-light flex flex-col rounded-lg p-5 md:flow-row md:items-center lg:flex-row-reverse lg:flex-1">
            <img src="/img/promo-1.png" alt="promo-1" className="w-40 mx-auto hover:animate-move md:mx-5" />
            <div className="space-y-2 pt-5 md:pt-0">
              <p className="text-xs text-secondary">Payday Promo</p>
              <h3 className="card_title">Get a 10% discount on payday week</h3>
              <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#" className="text-xs text-secondary">Order Now</a>
            </div>
          </div>
          
          {/* card 2 */}
          <div className="bg-primary-light flex flex-col rounded-lg p-5 md:flow-row md:items-center lg:flex-row-reverse lg:flex-1">
            <img src="/img/promo-2.png" alt="promo-1" className="w-40 mx-auto hover:animate-move md:mx-5" />
            <div className="space-y-2 pt-5 md:pt-0">
              <p className="text-xs text-secondary">Payday Promo</p>
              <h3 className="card_title">Get a 10% discount on payday week</h3>
              <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#" className="text-xs text-secondary">Order Now</a>
            </div>
          </div>

        </div>
      </section>

      {/* About Section starts here */}
      <section id="about">
        <div className="container flex flex-col gap-10 md:flex-row">
          <div className="flex-1">
            <img src={"/img/about.jpg"} alt="about" className="rounded-lg"></img>
          </div>
          <div className="flex-1">
            <h2 className="section_title">find food and drinks all-in-one place for your best taste</h2>
            <div className="separator"></div>
            <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quae nesciunt ipsum totam suscipit quas praesentium quasi quis impedit. Vel qui molestias in quibusdam fugit numquam laboriosam adipisci, facilis praesentium!</p>
            <ul className="grid grid-cols-2 py-5 space-y-2">
              <li className="text-xs text-paragraph"><i className="fa-solid fa-check text-secondary"></i>best price</li>
              <li className="text-xs text-paragraph"><i className="fa-solid fa-check text-secondary"></i>fresh ingredients</li>
              <li  className="text-xs text-paragraph"><i className="fa-solid fa-check text-secondary"></i>good service</li>
              <li  className="text-xs text-paragraph"><i className="fa-solid fa-check text-secondary"></i>health protocols</li>
            </ul>
            <a href="#" className="btn btn-primary">About Us</a>
          </div>
        </div>
      </section>

      {/* menu section starts here */}
      <section id="menu">
        <div className="container">
          <div className="max-w-md mx-auto text-center">
          <h3 className="section_title">our best menu</h3>
          <div className="separator mx-auto"></div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ullam asperiores architecto atque, reprehenderit consectetur, voluptas voluptatem quasi ipsum minima necessitatibus. Delectus adipisci incidunt molestias dicta sit modi necessitatibus mollitia!</p>
          <div>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
