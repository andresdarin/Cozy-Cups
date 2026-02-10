export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
}

export const posts: BlogPost[] = [
  {
    id: 1,
    slug: "brewing-the-perfect-pour-over",
    title: "Brewing the Perfect Pour-Over",
    excerpt: "Master the art of the V60 pour-over with our comprehensive guide to ratios, timing, and technique.",
    content: "The pour-over method is a ritual that rewards patience and precision. To start, you'll need fresh beans, a burr grinder, a gooseneck kettle, and your dripper of choice. The golden ratio we recommend is 1:16 – that's 1 gram of coffee for every 16 grams of water. <br/><br/> Begin by rinsing your paper filter with hot water to remove any papery taste and preheat your vessel. Grind your beans to a medium-fine consistency, resembling sea salt. Pour the grounds into the filter and create a small well in the center. <br/><br/> The first pour is the bloom. Pour about twice the weight of the coffee in water (e.g., 30g water for 15g coffee) and let it sit for 30-45 seconds. You'll see bubbles rising – this is CO2 escaping. <br/><br/> Continue pouring in slow, concentric circles, avoiding the edges. Aim for a total brew time of 2:30 to 3:00 minutes. Enjoy the clean, complex cup that results.",
    date: "October 12, 2023",
    author: "Alex Roaster",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    slug: "understanding-roast-levels",
    title: "Understanding Roast Levels",
    excerpt: "From light to dark, explore how roasting transforms the flavor profile of coffee beans.",
    content: "Roasting is where the magic happens. It turns green coffee beans into the aromatic brown beans we know and love. But what's the difference between light, medium, and dark roasts? <br/><br/> **Light Roast:** These beans are roasted for a shorter time. They retain more of their original characteristics, often exhibiting floral, fruity, and acidic notes. They have no oil on the surface and are lighter in color. <br/><br/> **Medium Roast:** Often called 'City' or 'Breakfast' roast, these have a more balanced flavor, aroma, and acidity. The bean's natural flavors are still present but are complemented by the roasting process. <br/><br/> **Dark Roast:** These beans are roasted until they are dark brown and oily. The original flavors are often overshadowed by the roast flavors – think smoky, chocolatey, and bold. Acidity is low.",
    date: "September 28, 2023",
    author: "Sarah Bean",
    image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    slug: "coffee-storage-myths",
    title: "Coffee Storage Myths Debunked",
    excerpt: "Should you keep your beans in the freezer? We separate fact from fiction to keep your coffee fresh.",
    content: "Freshness is key to a great cup of coffee. But how should you store your beans? <br/><br/> **Myth:** Store coffee in the fridge. <br/> **Fact:** Coffee is porous and absorbs odors. Your fridge is full of smells that will taint your beans. Plus, the moisture can cause them to deteriorate faster. <br/><br/> **Myth:** Store coffee in the freezer. <br/> **Fact:** While freezing can extend shelf life for long-term storage, taking beans in and out creates condensation, which is the enemy of freshness. If you must freeze, vacuum seal them in small batches and only thaw once. <br/><br/> **The Best Way:** Store your beans in an airtight container in a cool, dark, and dry place. A pantry or cupboard away from the stove is ideal.",
    date: "September 15, 2023",
    author: "Mike Grind",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    slug: "the-history-of-coffee",
    title: "The History of Coffee",
    excerpt: "Trace the journey of the coffee bean from ancient Ethiopia to your local cafe.",
    content: "The story of coffee begins in Ethiopia. Legend has it that a goat herder named Kaldi noticed his goats became energetic after eating berries from a certain tree. He tried them himself and felt a similar boost. <br/><br/> Monks in nearby monasteries began using the berries to stay awake during long prayers. From Ethiopia, coffee spread to the Arabian Peninsula, where it was cultivated and traded. By the 15th century, coffee was being enjoyed in homes and public coffee houses across the Middle East. <br/><br/> European travelers brought stories of this 'dark black liquid' back home. By the 17th century, coffee had reached Europe and was becoming popular. Coffee houses became hubs of social activity and communication, often called 'Penny Universities'. Today, coffee is one of the most popular beverages in the world.",
    date: "August 20, 2023",
    author: "Emma Historian",
    image: "https://images.unsplash.com/photo-1511537632536-b7a727c12bbc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];
