export default function Project() {
  const posts = [
    {
      id: 1,
      title: "Dumbflix (Netflix Clone)",
      href: "#",
      description:
        "Creating an online-based movie streaming website such as Netflix has premium and free features, has a payment gateway using Midtrans. Using React JS tech for the Frontend, and Golang for the Backend.",
      imageUrl: "/dumbflix.PNG",
    },
    {
      id: 2,
      title: "Cinema Online",
      href: "#",
      description:
        "Just like Dumbflix, this is an online cinema streaming project. However, it has a movie buying feature, unlike Dumbflix which has a premium feature.",
      imageUrl: "/cinema-online.PNG",
    },

    {
      id: 3,
      title: "Pokédex App",
      href: "#",
      description:
        "Create a pokedex web app to find pokemon data, use PokéAPI to get pokemon data. Using React JS technologies for the frontend. This is the application that I like the most when developing.",
      imageUrl: "/pokedex.PNG",
    },
    {
      id: 4,
      title: "Personal Web Portofolio",
      href: "#",
      description:
        "The funny thing is, this is the first website I made when I first learned coding. Uses vanilla HTML and CSS. This is also my first time learning to use vanilla Javascript.",
      imageUrl: "/Capture.PNG",
    },
    {
      id: 5,
      title: "Github Search Engine",
      href: "#",
      description:
        "One of my projects for fun, using the Github API to find users and repositories from other people's github accounts. Using ReactJS technology.",
      imageUrl: "/github-search.png",
    },
    {
      id: 6,
      title: "Materiku",
      href: "#",
      description:
        "This is the second website that I created since I first learned coding. Using HTML and CSS without Javascript and only as a landing page. This is where I first started to like the world of Frontend Developer.",
      imageUrl: "/materiku.PNG",
    },
  ];

  return (
    <div className="bg-gray-900 lg:mx-20 px-10 bg-opacity-[80%] mb-[8rem] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
            Projects / Portofolio
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-300">
            Portfolio journey from first learning to code until now.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <img
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-300">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-300 line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
