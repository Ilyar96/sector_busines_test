import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { User } from "../../../components/users-table/UsersTable.type";

export const fetchUsers = createAsyncThunk<User[], undefined>(
	"users/fetchUsers",
	async () => {
		const { data } = await axios.get<User[]>(
			"https://jsonplaceholder.typicode.com/posts"
		);

		return data;
	}
);
