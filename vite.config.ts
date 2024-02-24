import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		environment: 'edge-runtime',
		reporters: ['verbose'],
		watch: false
	}
})