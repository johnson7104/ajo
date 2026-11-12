import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// Postcss config configuration.
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
