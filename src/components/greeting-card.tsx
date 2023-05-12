import React from "react";
import { motion } from "framer-motion";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";
import { icons } from "@/constants";

export default function GreetingCard() {
  return (
    <motion.div
      className="text-center px-[20px] md:px-20 lg:px-20 my-[13rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.p className="text-gray-300">{`Hi, My name is`}</motion.p>
      <motion.div
        className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          className="text-red-500 text-4xl font-bold tracking-tight sm:text-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {`Fernanda`}
        </motion.span>
      </motion.div>
      <motion.span
        className="text-red-500 text-4xl font-bold tracking-tight sm:text-6xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        I am a <span className="text-white">Full-stack Dev.</span>
      </motion.span>
      <motion.p className="mt-6 text-lg leading-8 text-gray-300">
        {`I like to build UI/UX experiences for humans. Currently, I'm focused on
        learning about tech and updated stack.`}
      </motion.p>
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex gap-3 justify-center pt-5"
      >
        {icons.map((Icon, index) => (
          <Icon key={index} size={30} />
        ))}
      </motion.div>
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-10 flex items-center justify-center gap-x-6"
      >
        <div className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <Link
            href="mailto:fxrnands@gmail.com"
            className="text-sm font-semibold leading-6 text-gray-300"
          >
            {`Interested to collaborate ?`}
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-800 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <FiPhoneCall className="-ml-0.5 h-7 w-5" aria-hidden="true" />
          <Link href="https://wa.me/081286311715">{`Let's Talk`}</Link>
        </button>
      </motion.div>
    </motion.div>
  );
}
