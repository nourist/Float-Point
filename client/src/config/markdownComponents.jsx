const markdownComponents = {
	// eslint-disable-next-line no-unused-vars
	h1: ({ node, ...props }) => <h1 className="mb-4 text-3xl font-bold text-neutral-800 dark:text-neutral-200" {...props} />,
	// eslint-disable-next-line no-unused-vars
	h2: ({ node, ...props }) => <h2 className="mt-5 mb-3 text-2xl font-semibold text-neutral-800 dark:text-neutral-200" {...props} />,
	// eslint-disable-next-line no-unused-vars
	h3: ({ node, ...props }) => <h3 className="mt-4 mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-200" {...props} />,
	// eslint-disable-next-line no-unused-vars
	h4: ({ node, ...props }) => <h4 className="mt-4 mb-2 text-lg font-medium text-neutral-800 dark:text-neutral-200" {...props} />,
	// eslint-disable-next-line no-unused-vars
	p: ({ node, ...props }) => <p className="mb-2 text-neutral-700 dark:text-neutral-300" {...props} />,
	// eslint-disable-next-line no-unused-vars
	code: ({ node, ...props }) => <code className="rounded bg-neutral-200 px-1 py-0.5 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200" {...props} />,
	// eslint-disable-next-line no-unused-vars
	pre: ({ node, ...props }) => <pre className="mb-4 overflow-auto rounded bg-neutral-100 p-4 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200" {...props} />,
	// eslint-disable-next-line no-unused-vars
	ul: ({ node, ...props }) => <ul className="mb-2 ml-6 list-disc text-neutral-700 dark:text-neutral-300" {...props} />,
	// eslint-disable-next-line no-unused-vars
	ol: ({ node, ...props }) => <ol className="mb-2 ml-6 list-decimal text-neutral-700 dark:text-neutral-300" {...props} />,
	// eslint-disable-next-line no-unused-vars
	li: ({ node, ...props }) => <li className="mb-1" {...props} />,
	hr: () => <hr className="my-4 border-neutral-300 dark:border-neutral-700" />,
	// eslint-disable-next-line no-unused-vars
	blockquote: ({ node, ...props }) => (
		<blockquote className="mb-4 border-l-4 border-neutral-400 pl-4 text-neutral-600 italic dark:border-neutral-600 dark:text-neutral-400" {...props} />
	),
};

export default markdownComponents;
