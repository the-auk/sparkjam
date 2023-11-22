/**
 * Use the public url provided in env vars, if it's not provided, use Vercel's auto generated url
 * !! using Vercel's baked in url WILL BREAK SOME INTEGRATION WITH 3RD PARTY SERVICES !!
 */
const PUBLIC_SITE_URL: string | null | undefined = process.env
	.NEXT_PUBLIC_SITE_URL
	? process.env.NEXT_PUBLIC_SITE_URL
	: process.env.NEXT_PUBLIC_VERCEL_URL?.includes('http')
	? process.env.NEXT_PUBLIC_VERCEL_URL
	: 'https://' + process.env.NEXT_PUBLIC_VERCEL_URL;

export default PUBLIC_SITE_URL;
