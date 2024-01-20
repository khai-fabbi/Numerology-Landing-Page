import { Philosopher, Raleway } from 'next/font/google'

const raleway = Raleway({
  subsets: ['vietnamese'],
  display: 'swap',
  style: ['italic', 'normal'],
  variable: '--font-raleway',
})
const philosopher = Philosopher({
  subsets: ['vietnamese'],
  weight: ['700'],
  display: 'swap',
  style: ['italic', 'normal'],
  variable: '--font-philosopher',
})

export { philosopher, raleway }
