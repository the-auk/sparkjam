export interface MockUser {
	name: string;
	image: string;
}

export const SAM_ALTMAN: MockUser = {
	name: "Sam Altman",
	image:
		"https://res.cloudinary.com/doovu7dhn/image/upload/c_thumb,g_face,h_400,q_auto:good,w_400/v1700692665/challenge-app/231026165932-sam-altman-thumb-01_xigdxv.webp",
};

export const GREG_BROCKMAN: MockUser = {
	name: "Greg Brockman",
	image:
		"https://res.cloudinary.com/doovu7dhn/image/upload/c_thumb,g_face,h_400,q_auto:good,w_400/v1700773415/challenge-app/greg_brockman_uf5mxh.jpg",
};

export const MIRA_MURATI: MockUser = {
	name: "Mira Murati",
	image:
		"https://res.cloudinary.com/doovu7dhn/image/upload/c_thumb,g_face,h_400,q_auto:good,w_400/v1700773413/challenge-app/mira_murati_zuaa1h.jpg",
};

export const YLIA_SUTSKEVER: MockUser = {
	name: "Ilya Sutskever",
	image:
		"https://res.cloudinary.com/doovu7dhn/image/upload/c_thumb,g_face,h_400,q_auto:good,w_400/v1700773411/challenge-app/Ilya-Sutskever-min_ggy3lp.jpg",
};

export const BRAD_LIGHTCAP: MockUser = {
	name: "Brad Lightcap",
	image:
		"https://res.cloudinary.com/doovu7dhn/image/upload/c_thumb,g_face,h_400,q_auto:good,w_400/v1700773410/challenge-app/brad_lightcap_ek2nyp.webp",
};

export const MOCK_OPEN_AI_TEAM: MockUser[] = [
	SAM_ALTMAN,
	GREG_BROCKMAN,
	MIRA_MURATI,
	YLIA_SUTSKEVER,
	BRAD_LIGHTCAP,
];
