import PropTypes from 'prop-types';

import Sidebar from '~/components/Sidebar';
import Header from '~/components/Header';

const DefaultLayout = ({ children }) => {
	return (
		<>
			<Sidebar />
			<Header />
			<div className="px-6 pt-[102px] lg:pl-[274px]">{children}</div>
		</>
	);
};

DefaultLayout.propTypes = {
	children: PropTypes.node,
};

export default DefaultLayout;
