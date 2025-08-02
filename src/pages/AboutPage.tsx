import React from 'react';
import { useTheme } from '../hooks/useTheme';

const AboutPage: React.FC = () => {
  const themeClasses = useTheme();
  return (
    <div className={`p-6 rounded-lg ${themeClasses.contentBg} ${themeClasses.shadow} ${themeClasses.transition} w-full`}>
      <h2 className={`text-3xl font-bold mb-4 ${themeClasses.textColor}`}>About Us</h2>
      <p className={`mb-6 ${themeClasses.textColor} opacity-90`}>
        We are a company dedicated to providing excellent services. Our mission is to innovate and deliver high-quality solutions.
        This page demonstrates another content area that will adapt to the selected theme.
      </p>
      <button className={`px-6 py-3 rounded-full ${themeClasses.buttonBg} ${themeClasses.buttonText} ${themeClasses.fontFamily} ${themeClasses.transition} ${themeClasses.shadow}`}>
        Our Story
      </button>
      <ul className={`mt-6 space-y-2 ${themeClasses.textColor} opacity-90`}>
        <li>• Vision: To be a leader in our industry.</li>
        <li>• Mission: Deliver innovative and reliable products.</li>
        <li>• Values: Integrity, Customer Focus, Innovation.</li>
      </ul>
    </div>
  );
};

export default AboutPage;