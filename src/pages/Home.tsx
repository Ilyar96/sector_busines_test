import React from "react";
import Container from "../components/container/Container";
import SearchInput from "../components/search-input/SearchInput";

const Home = () => {
	return (
		<div>
			<section className="app">
				<Container>
					<SearchInput />
				</Container>
			</section>
		</div>
	);
};

export default Home;
