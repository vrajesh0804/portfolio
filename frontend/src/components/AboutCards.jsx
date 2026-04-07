import { motion } from "framer-motion";

const items = [
  {
    text: "I am a passionate Full-Stack Developer with over 5 years of experience in building scalable and high-performance web applications using Python (Django), PHP (Laravel), and modern JavaScript frameworks such as React and Vue.js. I have strong expertise in web scraping, automation using Playwright, and ensuring software quality through both manual and automated testing practices. I also bring solid experience in cloud technologies and DevOps, working with Microsoft Azure, Docker, Kubernetes, and CI/CD pipelines to deliver reliable and efficient solutions.",
  },
];

export default function AboutCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-[#111] p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          <div className="text-3xl mb-3">{item.icon}</div>
          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-400 text-sm">{item.text}</p>
        </motion.div>
      ))}
    </div>
  );
}
