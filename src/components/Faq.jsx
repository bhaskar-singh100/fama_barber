import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openQuestion, setOpenQuestion] = useState(null);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  const searchInputRef = useRef(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const searchVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
    },
  };

  const tabsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const tabVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const faqContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6,
      },
    },
  };

  const faqItemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // FAQ Data
  const faqData = [
    {
      id: 1,
      question: "Do I need an appointment or can I walk in?",
      answer:
        "While we accept walk-ins based on availability, we recommend booking an appointment to guarantee your preferred time slot and barber. You can easily book online through our website or by calling us directly.",
      category: "General",
    },
    {
      id: 2,
      question: "How long does a typical haircut take?",
      answer:
        "A standard haircut takes approximately 30-45 minutes. Premium services like beard sculpting or hot towel shaves may take 45-60 minutes. We recommend allowing extra time for your first visit as it includes a consultation to understand your preferences.",
      category: "Services",
    },
    {
      id: 3,
      question: "What form of payment do you accept?",
      answer:
        "We accept all major credit cards, debit cards, cash, and mobile payment options including Apple Pay and Google Pay. We also have gift cards available for purchase in-store or online.",
      category: "Pricing",
    },
    {
      id: 4,
      question: "Do you offer any loyalty programs or discounts?",
      answer:
        "Yes, we have a loyalty program where every 10th haircut is discounted. We also offer discounts for military personnel, first responders, and seniors. Monthly membership packages are available for clients who visit regularly.",
      category: "Pricing",
    },
    {
      id: 5,
      question: "What hair products do you use and sell?",
      answer:
        "We use professional-grade products from brands like Reuzel, Layrite, and American Crew. These products and more are available for purchase in our shop so you can maintain your style at home. Our barbers are happy to recommend products that work best for your hair type.",
      category: "Services",
    },
    {
      id: 6,
      question: "How early should I arrive for my appointment?",
      answer:
        "We recommend arriving 5-10 minutes before your scheduled appointment to check in and relax. If its your first visit, arriving 10-15 minutes early allows time to discuss your preferences with your barber.",
      category: "General",
    },
    {
      id: 7,
      question: "Do you offer services for children?",
      answer:
        "Yes, we provide haircuts for children of all ages. We have special pricing for kids 12 and under, and our experienced barbers are great with children, ensuring a comfortable and positive experience.",
      category: "Services",
    },
    {
      id: 8,
      question: "How can I provide feedback about my experience?",
      answer:
        "We value your feedback! You can share your experience directly with us in-store, call us, email us, or leave a review on our Google Business page, Yelp, or social media platforms. We are always looking to improve our service.",
      category: "Support",
    },
  ];

  const categories = ["All", "General", "Services", "Pricing", "Support"];

  // Filter questions based on search and category
  useEffect(() => {
    const filtered = faqData.filter((item) => {
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });

    setFilteredQuestions(filtered);
    setOpenQuestion(null); // Close any open question when filtering changes
  }, [searchQuery, activeCategory]);

  const handleQuestionClick = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  const focusSearchInput = () => {
    searchInputRef.current.focus();
  };

  return (
    <section className="py-20 bg-gray-900 text-white" id="faq">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Section Header */}
        <motion.div className="text-center mb-10">
          <motion.h3
            className="text-amber-500 text-xl font-semibold mb-3"
            variants={headerVariants}
          >
            Common Questions
          </motion.h3>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={headerVariants}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-gray-300"
            variants={headerVariants}
          >
            Answers to common questions about our barbershop services.
          </motion.p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="max-w-3xl mx-auto mb-12"
          variants={searchVariants}
        >
          <motion.div
            className="relative flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <FaSearch
              className="absolute left-4 text-gray-400"
              onClick={focusSearchInput}
            />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search for questions..."
              className="w-full py-3 pl-12 pr-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all duration-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="absolute right-4 text-gray-400 hover:text-amber-500 transition-colors"
                onClick={() => setSearchQuery("")}
              >
                ✕
              </button>
            )}
          </motion.div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          variants={tabsContainerVariants}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-amber-500 text-black font-bold"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setActiveCategory(category)}
              variants={tabVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ Questions */}
        <motion.div
          className="max-w-3xl mx-auto"
          variants={faqContainerVariants}
        >
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((item) => (
              <motion.div
                key={item.id}
                className="mb-4 bg-gray-800 rounded-lg overflow-hidden"
                variants={faqItemVariants}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                <button
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-gray-700/50 transition-colors duration-300"
                  onClick={() => handleQuestionClick(item.id)}
                >
                  <span className="text-lg font-medium pr-8">
                    {item.question}
                  </span>
                  <motion.span
                    className="text-amber-500 flex-shrink-0"
                    animate={{ rotate: openQuestion === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {openQuestion === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <motion.p
                        className="p-5 pt-0 text-gray-300"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {item.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl text-gray-400">
                No questions found matching your search.
              </p>
              <motion.button
                className="mt-4 text-amber-500 hover:underline"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear filters
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Faq;
