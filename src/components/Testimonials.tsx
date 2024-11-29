import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { QuoteIcon } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/testimonials.css';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechVision",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    content: "Working with this developer was an absolute pleasure. Their expertise in React and TypeScript significantly improved our application's performance and user experience. The attention to detail and commitment to quality were exceptional.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CTO at InnovateLab",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "Outstanding technical skills and problem-solving abilities. They took our complex requirements and delivered a solution that exceeded our expectations. Their knowledge of modern web technologies and best practices is impressive.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager at DesignCraft",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    content: "An exceptional developer who brings both technical expertise and creative solutions to the table. Their work on our UI/UX redesign project was transformative, resulting in a 40% increase in user engagement.",
    rating: 5
  },
  {
    name: "David Kim",
    role: "Founder at StartupX",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    content: "Highly professional and efficient. They not only delivered high-quality code but also provided valuable insights that helped shape our product strategy. Their full-stack capabilities made them a valuable asset to our project.",
    rating: 5
  },
  {
    name: "Lisa Thompson",
    role: "Director at WebSolutions",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    content: "A rare combination of technical excellence and great communication skills. They consistently delivered on time and were always proactive in suggesting improvements. Their expertise in modern web frameworks saved us months of development time.",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 relative"
  >
    <QuoteIcon className="w-10 h-10 text-primary/20 absolute -top-2 -left-2" />
    <div className="flex flex-col items-center text-center space-y-4">
      <img 
        src={testimonial.image} 
        alt={testimonial.name}
        className="w-20 h-20 rounded-full border-2 border-primary/20 object-cover"
      />
      <div className="space-y-2">
        <h3 className="font-semibold text-xl">{testimonial.name}</h3>
        <p className="text-muted-foreground text-sm">{testimonial.role}</p>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-muted-foreground leading-relaxed">
        {testimonial.content}
      </p>
    </div>
  </motion.div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold">Client Testimonials</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hear what clients say about their experience working with me
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper !pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;