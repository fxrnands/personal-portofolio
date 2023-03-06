export default function Experience() {
  const posts = [
    {
      id: 1,
      title: "Freelance",
      href: "#",
      description:
        "Creating web application as Frontend Developer using React JS, and collaborate with Backend Developers to create a simple web for client.",
      date: "Feb 16, 2022 - Aug 20, 2022",
      category: { title: "Frontend Developer", href: "#" },
    },
    {
      id: 2,
      title: "PT. Dumbways Teknologi Indonesia",
      href: "#",
      description:
        "Participated in bootcamp training to become a Fullstack Developer, learned to use React JS, React Native, Golang, Node JS technology for 2 months.",
      date: "Aug 10, 2022 - Okt 28, 2022",
      category: { title: "Fullstack Developer Talent", href: "#" },
    },
    {
      id: 3,
      title: "PT. Orde Digital Intelektual",
      href: "#",
      description:
        "Developing modules and build features in banking sector web applications, maintain web application in production, and working with agile scrum methods.",
      date: "Nov 1, 2022 - Mar 1, 2022",
      category: { title: "Frontend Developer", href: "#" },
    },
  ];
  return (
    <div className="rounded mb-20 bg-gray-900 bg-opacity-80 mt-20 lg:mx-20 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
            Experience
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time className="text-gray-300">{post.date}</time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-500 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-300 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-500 line-clamp-3">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
