import Link from 'next/link';
import React from 'react';

const BlogPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
      {data.map((dta, i) => (
        <Link
          key={i}
          href={`blogs/${dta.title}`}
          className="border border-yellow-400 rounded-md w-full h-36 text-4xl flex items-center justify-center text-center p-5 cursor-pointer select-none hover:scale-105 duration-300"
        >
          {dta.title}
        </Link>
      ))}
    </div>
  );
};

const data = [
  {
    title: 'Luminara Festival',
    details:
      'An annual celebration of lights held in a coastal town, featuring lantern parades, light shows, and fireworks.',
  },
  {
    title: 'Quantum Ripple',
    details:
      'A breakthrough in quantum physics that explores the interaction of particles at subatomic levels, leading to potential advancements in computing.',
  },
  {
    title: 'Nebula Nomad',
    details:
      'A science fiction novel about a lone explorer traveling through different nebulas, encountering various alien species and civilizations.',
  },
  {
    title: 'Aurora Symphony',
    details:
      'A classical music concert inspired by the natural phenomenon of the aurora borealis, performed by an internationally acclaimed orchestra.',
  },
  {
    title: 'Zenith Horizon',
    details:
      'A space exploration mission aimed at reaching the furthest known point in the universe, led by an international team of astronauts.',
  },
  {
    title: 'Crescent Echoes',
    details:
      'A poetry collection that captures the beauty and mystery of the moon and its phases, reflecting on human emotions and experiences.',
  },
  {
    title: 'Eclipse Serenade',
    details:
      'A documentary film about the cultural and scientific significance of solar and lunar eclipses, featuring interviews with astronomers and historians.',
  },
  {
    title: 'Cascade Dreams',
    details:
      'A wellness retreat located in the mountains, offering holistic therapies, meditation sessions, and nature walks to promote relaxation and healing.',
  },
  {
    title: 'Starlight Odyssey',
    details:
      'An interactive virtual reality experience that allows users to explore distant galaxies and star systems from the comfort of their home.',
  },
  {
    title: 'Echoes of Atlantis',
    details:
      'A historical fiction novel that delves into the mysteries of the lost city of Atlantis, following a group of archaeologists on their quest for discovery.',
  },
  {
    title: 'Polar Prism',
    details:
      'A nature documentary showcasing the diverse wildlife and stunning landscapes of the polar regions, highlighting the impacts of climate change.',
  },
  {
    title: 'Velvet Mirage',
    details:
      'An art exhibition featuring surrealist paintings and sculptures that play with the concepts of reality and illusion, curated by renowned artists.',
  },
  {
    title: 'Harmony Nexus',
    details:
      'A collaborative music project that brings together artists from various genres and cultures to create a unique and harmonious sound.',
  },
  {
    title: 'Genesis Code',
    details:
      'A thriller novel centered around a geneticist who discovers a hidden code within human DNA that could unlock extraordinary abilities.',
  },
  {
    title: 'Chroma Tides',
    details:
      'An environmental study on the effects of changing ocean colors on marine life, focusing on coral reefs and their ecosystems.',
  },
  {
    title: 'Celestial Drift',
    details:
      "A science fiction film depicting humanity's journey to colonize a distant exoplanet, exploring themes of survival, adaptation, and exploration.",
  },
  {
    title: "Titan's Embrace",
    details:
      "A romance novel set on Titan, one of Saturn's moons, where two scientists working on a research mission fall in love against all odds.",
  },
  {
    title: 'Solstice Enigma',
    details:
      'A mystery novel revolving around the ancient rituals and astronomical events of the summer solstice, with a detective uncovering hidden secrets.',
  },
  {
    title: 'Lunar Resonance',
    details:
      'A musical album inspired by the phases of the moon, with each track representing a different lunar phase and its associated emotions.',
  },
  {
    title: 'Verdant Realm',
    details:
      'A fantasy novel set in a lush, magical forest where mythical creatures and ancient spirits dwell, following the journey of a young hero.',
  },
];

export default BlogPage;
