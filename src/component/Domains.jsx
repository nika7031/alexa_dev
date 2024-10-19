import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const images = {
  technical: 'src/assets/tech.png',       
  creatives: 'src/assets/creatives.png',
  events: 'src/assets/events.png',
  business: 'src/assets/business.png',
};

const domainsData = [
  { id: 4, title: 'Technical', description: 'A vibrant community of tech enthusiasts collaborating and transforming the future. The tech domain works together to perfect frontend user experiences, build robust systems in backend, and innovate ideas through app dev, elevating their skills throughout the journey.', image: images.technical },
  { id: 1, title: 'Creatives', description: 'In the Creatives domain, ideas evolve into unforgettable experiences. The talented content writers and designers have mastered the creation of compelling narratives and seamless design interfaces. Experience the forefront of creativity as they shape the art of engagement.', image: images.creatives },
  { id: 2, title: 'Events', description: 'The heartbeat of the club, from brainstorming brilliant ideas to executing them with precision, ensures that each event is not just memorable but leaves a lasting impact on everyone involved. Our events domain thrives because of the hard work and creativity of the team.', image: images.events },
  { id: 3, title: 'Business', description: 'The business domain is at the forefront, fostering innovation and entrepreneurial spirit among students. It provides real-world relations and networking opportunities with industry professionals, bringing in amazing sponsors through skilled PR activities and bringing imagination to life.', image: images.business },
];

const DomainSection = ({ title, description, image }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      ref={ref} 
      style={styles.domainSection} 
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={inView ? { opacity: 1, scale: 1 } : {}} 
      transition={{ duration: 0.5 }}
    >
      <div>
        <h1 style={styles.domainTitle}>{title}</h1>
        <p style={styles.domainDesc}>{description}</p>
      </div>
      <img src={image} alt={title} style={styles.domainImage} />
      <div style={styles.domainLine}></div>
    </motion.div>
  );
};

const Domains = () => (
  <div style={styles.container}>
    <h1 style={styles.heading}>Our Domains</h1>
    {domainsData.map(domain => (
      <DomainSection key={domain.id} title={domain.title} description={domain.description} image={domain.image} />
    ))}
  </div>
);

const styles = {
  container: { backgroundColor: '#000', padding: '50px', color: '#fff', textAlign: 'center', minHeight: '100vh' },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    background: 'linear-gradient(90deg, #32CD32, #20B2AA)',
    backgroundClip: 'text',
    color: 'transparent',
    marginBottom: '40px',
    textTransform: 'uppercase',
  },
  domainSection: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingBottom: '50px', 
    marginBottom: '40px',
    position: 'relative',
  },
  domainTitle: { fontSize: '48px', color: '#fff' },
  domainDesc: { fontSize: '18px', color: '#b0b0b0', maxWidth: '600px', marginTop: '10px' },
  domainImage: { width: '400px', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' },
  domainLine: {
    width: '150px',
    height: '2px',
    backgroundColor: '#4ed06e',
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
  }
};

export default Domains;
