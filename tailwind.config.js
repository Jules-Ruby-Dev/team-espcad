import {
	CARD_ANIM_DURATION_MS,
	CARD_ANIM_EASING,
	CARD_ANIM_TRANSLATE_VW,
} from './src/styles/animation.js';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			wide: '1200px',
		},
		extend: {
			/* ── Fonts ── */
			fontFamily: {
				barlow: ['"Barlow Condensed"', 'sans-serif'],
				work: ['"Work Sans"', 'sans-serif'],
			},

			/* ── Brand colours ── */
			colors: {
				teal: {
					light3: '#b2f5ea',
					light2: '#81e6d9',
					light1: '#4fd1c5',
					DEFAULT: '#38b2ac',
					dark1: '#2c7a7b',
					dark2: '#285e61',
					dark3: '#1d4044',
				},
				slate: {
					light3: '#f7fafc',
					light2: '#edf2f7',
					light1: '#e2e8f0',
					DEFAULT: '#718096',
					dark1: '#4a5568',
					dark2: '#2d3748',
					dark3: '#1a202c',
				},
				purple: {
					light3: '#faf5ff',
					light2: '#e9d8fd',
					light1: '#d6bcfa',
					DEFAULT: '#9f7aea',
					dark1: '#805ad5',
					dark2: '#6b46c1',
					dark3: '#44337a',
				},
				bird: {
					orange: '#F7731C',
				},
				yellow: {
					DEFAULT: '#ECC94B',
					dark: '#D69E2E',
					dark2: '#B7791F',
				},
			},

			/* ── Gradient backgrounds ── */
			backgroundImage: {
				'gradient-dark':
					'linear-gradient(135deg, #0d2e2e 0%, #1a4040 40%, #0d2626 100%)',
				'gradient-light':
					'linear-gradient(135deg, #f7fafc 0%, #edf2f7 50%, #e2e8f0 100%)',
				'gradient-base':
					'linear-gradient(135deg, #234e52 0%, #2c7a7b 50%, #1d4044 100%)',
				'gradient-card': 'linear-gradient(180deg, #ffffff 0%, #f7fafc 100%)',
			},

			/* ── Spacing tokens ── */
			spacing: {
				xxs: '0.25rem', // 4px
				xs: '0.5rem', // 8px
				s: '0.75rem', // 12px
				m: '1rem', // 16px
				l: '1.5rem', // 24px
				xl: '2rem', // 32px
				'2xl': '3rem', // 48px
				'3xl': '4rem', // 64px
				pageContent: '5rem', // 80px – horizontal page gutter (desktop)
			},

			/* ── Typography scale ── */
			fontSize: {
				h1: [
					'2.75rem',
					{ lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.01em' },
				],
				h2: ['2rem', { lineHeight: '1.2', fontWeight: '600' }],
				h3: ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
				h4: ['1.25rem', { lineHeight: '1.35', fontWeight: '600' }],
				'body-lg': ['1.125rem', { lineHeight: '1.7' }],
				body: ['1rem', { lineHeight: '1.6' }],
				'body-sm': ['0.875rem', { lineHeight: '1.5' }],
				caption: ['0.75rem', { lineHeight: '1.4' }],
			},

			/* ── Border radius ── */
			borderRadius: {
				card: '1rem',
				pill: '9999px',
			},

			/* ── Shadows ── */
			boxShadow: {
				card: '0 4px 24px rgba(0,0,0,0.18)',
				'card-hover': '0 8px 32px rgba(0,0,0,0.28)',
				sm: '0 1px 6px rgba(0,0,0,0.08)',
			},

			/* ── Animation ── */
			keyframes: {
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: `translateX(-${CARD_ANIM_TRANSLATE_VW}vw)`,
					},
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: `translateX(${CARD_ANIM_TRANSLATE_VW}vw)`,
					},
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
			},
			animation: {
				'slide-in-left': 'slide-in-left  400ms cubic-bezier(0.4,0,1,1) both',
				'slide-in-right': 'slide-in-right 400ms cubic-bezier(0.4,0,1,1) both',
				'fade-in': 'fade-in        400ms cubic-bezier(0.4,0,1,1) both',
			},

			/* ── Max widths ── */
			maxWidth: {
				content: '960px',
			},
		},
	},
	plugins: [],
};
