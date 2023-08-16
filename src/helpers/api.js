import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import { AUTH_CREDENTIALS } from "@/helpers/credentials";

const mock = new MockAdapter(axios)

mock.onGet("/login").reply(200, AUTH_CREDENTIALS);

export const api = axios.create({});
