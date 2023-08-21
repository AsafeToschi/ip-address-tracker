import type { Config } from 'tailwindcss'

function *step(min: number, max: number, step: number) {
  let i = min;
  while (i <= max) {
      yield i;
      i += step;
  }
}

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
    },
    spacing: Object.assign(
      Array.from(step(0, 100, 0.5)).reduce((memo: { [key: string]: string}, value: number) => {
          memo[value.toString()] = `${value / 4}rem`;
          return memo;
      }, {}),
    )
  },
  plugins: [],
}
export default config
