import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function ContactSection() {
  return (
    <section className="text-center mt-50 items-center">
      <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
        Let's Connect
      </h2>
      <p className="mb-10 text-gray-600 max-w-xl mx-auto">
        I'm open to collaboration, mentorship, or just nerding out over robots and code.
        Feel free to reach out through any of the platforms below.
      </p>
      <div className="flex flex-row justify-center gap-6 text-lg font-medium">
        <a
          href="https://github.com/benard-adewole/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline text-blue-600"
        >
          <FaGithub className="w-5 h-5" /> GitHub
        </a>
        <a
          href="mailto:adbenard@umich.edu"
          className="flex items-center gap-2 hover:underline text-blue-600"
        >
          <HiOutlineMail className="w-5 h-5" /> Email
        </a>
        <a
          href="https://www.linkedin.com/in/benard-adewole/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline text-blue-600"
        >
          <FaLinkedin className="w-5 h-5" /> LinkedIn
        </a>
      </div>
    </section>
  );
}
