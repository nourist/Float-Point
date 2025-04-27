import httpRequest from '~/utils/httpRequest';

export const getSubmissions = async (options) => {
	try {
		const res = await httpRequest.get('/submission', { params: options });
		return res.data;
	} catch (err) {
		console.error(err);
		throw err;
		// return err.response;
	}
};

export const getSubmission = async (id) => {
	try {
		const res = await httpRequest.get(`/submission/info/${id}`);
		return res.data;
	} catch (err) {
		console.error(err);
		throw err;
	}
};

export const submit = async (options) => {
	try {
		const res = await httpRequest.post('/submission/submit', options);
		return res.data;
	} catch (err) {
		console.error(err);
		throw err;
	}
};
