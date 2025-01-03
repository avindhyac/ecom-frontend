import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	height: 20px;
	display: flex;
	align-items: center;
	padding: 10px 10px;
	background-color: indianred;
	color: whitesmoke;
	text-align: center;
	justify-content: center;
`;

const Announcements = () => {
	return (
		<Container>
			The marketing girl who works here is cute asf -- Stay tuned for more
			announcements 🤍
		</Container>
	);
};

export default Announcements;
