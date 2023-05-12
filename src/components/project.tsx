import Image from "next/image";
import { projects } from "@/constants";

export default function Project() {
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
          {projects.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <Image
                  src={post.imageUrl}
                  width={400}
                  height={100}
                  alt="project-image"
                  className="aspect-[16/9] w-full object-cover sm:aspect-[16/9] lg:aspect-[16/9]"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-300 hover:text-gray-400">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-300 hover:text-gray-500 line-clamp-3">
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
