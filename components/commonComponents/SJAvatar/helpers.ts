import { SJAvatarSize } from '.';

export const avatarSizeClasses: { [key in SJAvatarSize]: string } = {
	xs: 'min-w-6 w-6 min-h-6 h-6 rounded-full',
	sm: 'min-w-8 w-8 min-h-8 h-8 rounded-full',
	base: 'min-w-12 w-12 min-h-12 h-12 rounded-full',
	lg: 'min-w-16 w-16 min-h-16 h-16 rounded-full',
	xl: 'min-w-24 w-24 min-h-24 h-24 rounded-full',
};

interface ChangeImageSizeOnGoogleUrlOpts {
	src: string;
	newSize?: number;
}

/**
 * Changes the size of a Google image URL by modifying the size argument in the URL.
 *
 * The function searches for the pattern "=s<number>" in the URL and replaces
 * the number with the provided `newSize`. If the pattern isn't found,
 * the original URL is returned.
 *
 * @see {@link https://developers.google.com/people/image-sizing} for reference.
 *
 * @param {ChangeImageSizeOnGoogleUrlOpts} opts - The options for changing the size.
 * @returns {string} - The modified URL or the original if the pattern isn't found.
 */
export default function changeImageSizeOnGoogleUrl(
	opts: ChangeImageSizeOnGoogleUrlOpts
): string {
	const pattern = /(\=.*s)(\d+)/;
	const match = opts.src.match(pattern);
	const newSize = opts.newSize || 256;

	if (match && match[2]) {
		return opts.src.replace(match[2], newSize.toString());
	}

	return opts.src;
}
