import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ContactPage: React.FC = () => {
  const themeClasses = useTheme();
  return (
    <div className={`p-6 rounded-lg ${themeClasses.contentBg} ${themeClasses.shadow} ${themeClasses.transition} w-full`}>
      <h2 className={`text-3xl font-bold mb-4 ${themeClasses.textColor}`}>Contact Us</h2>
      <p className={`mb-6 ${themeClasses.textColor} opacity-90`}>
        Have questions or feedback? Feel free to reach out to us using the information below.
      </p>
      <button className={`px-6 py-3 rounded-full ${themeClasses.buttonBg} ${themeClasses.buttonText} ${themeClasses.fontFamily} ${themeClasses.transition} ${themeClasses.shadow}`}>
        Send Email
      </button>
      <div className={`mt-6 ${themeClasses.textColor} opacity-90`}>
        <p>Email: <a href="mailto:info@hipster-inc.com" className="underline">info@hipster-inc.com</a></p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Theme Street, React City, TS 12345</p>
      </div>
    </div>
  );
};

export default ContactPage;