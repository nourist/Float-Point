import { MailtrapClient } from 'mailtrap';

export const mailtrapClient = new MailtrapClient({
	token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
	email: 'floatpoint@demomailtrap.com',
	name: 'Floatpoint',
};
