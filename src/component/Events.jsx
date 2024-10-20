import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Events = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Our Events</h2>
      <div style={styles.grid} ref={ref}>
        {eventData.map((event, index) => (
          <motion.div 
            key={index} 
            style={styles.card} 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, backgroundColor: '#2a2a2a' }}
          >
            <img 
              src={event.image} 
              alt={event.title} 
              style={styles.image}
            />
            <p style={styles.text}>{event.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const eventData = [
  { image: "/tnextgen.png", title: "Tech NextGen" },
  { image: "/graphq.png", title: "Graph Q?" },
  { image: "/git101.png", title: "Git101" },
  { image: "/ui.png", title: "UI/UX" },
];

const styles = {
  container: {
    backgroundColor: '#000',
    padding: '50px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #32CD32, #20B2AA)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '50px',
  },
  grid: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: '10px',
    padding: '20px',
    width: '300px',
    textAlign: 'center',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
    margin: '10px',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  text: {
    color: '#fff',
    fontSize: '1.2rem',
  },
};

export default Events;
