import React from 'react';

const News = () => {
  const articles = [
    {
      title: "New Origins: Ethiopian Yirgacheffe",
      date: "OCT 20, 2024",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "Exploring the floral and citrus notes of our latest single-origin arrival."
    },
    {
      title: "Sustainable Packaging Initiative",
      date: "SEP 15, 2024",
      image: "https://images.unsplash.com/photo-1511537632536-b7a575845363?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "Why we are switching to 100% compostable bags starting next month."
    },
    {
      title: "Winter Brewing Workshop",
      date: "AUG 28, 2024",
      image: "https://images.unsplash.com/photo-1509785303752-92e8d8495c20?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "Join our head barista for an intensive course on pour-over techniques."
    }
  ];

  return (
    <section className="py-32 bg-off-white" id="journal">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-sans-condensed text-6xl md:text-8xl font-bold uppercase tracking-wide leading-tight mb-20 text-center md:text-left">
          The Journal
        </h2>

        <div className="flex flex-col gap-12">
          {articles.map((article, index) => (
            <div key={index} className="group flex flex-col md:flex-row gap-8 md:gap-16 items-center border-t border-black/10 pt-12">
              <div className="w-full md:w-1/3 aspect-[3/2] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="w-full md:w-2/3 flex flex-col items-start">
                <span className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-4">
                  {article.date}
                </span>
                <h3 className="font-sans-condensed text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4 group-hover:text-gray-600 transition-colors cursor-pointer">
                  {article.title}
                </h3>
                <p className="font-sans text-gray-600 max-w-lg mb-6 leading-loose">
                  {article.excerpt}
                </p>
                <a href="#" className="font-mono text-xs uppercase tracking-widest border-b border-black pb-1 hover:pb-2 transition-all">
                  Read Article
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
