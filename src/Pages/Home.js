import React from 'react';
import { Hero } from '../components/Hero';
import { ImproveSkills } from '../components/ImproveSkills';
import { Quote } from '../components/Quote';
import { Chiefs } from '../components/Chiefs';

export const Home = () => {
  return (
    <div>
      <Hero />
      <ImproveSkills />
      <Quote />
      <Chiefs />
    </div>
  );
};
