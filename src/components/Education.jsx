import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h2>
      <div>
        {EDUCATION.map((edu, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-stone-400">{edu.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold">
                {edu.degree} -{" "}
                <span className="text-sm text-stone-500">
                  {edu.institution}
                </span>
              </h3>
              <p className="mb-4 text-stone-400">{edu.description}</p>
              {edu.certificate && (
                <a
                  href={edu.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-5 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 text-white font-semibold shadow-md transition-all duration-300 hover:from-emerald-400 hover:to-green-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  Certificate
                </a>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
