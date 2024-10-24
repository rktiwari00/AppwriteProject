import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

//Auth Class for Appwrite
export class Auth {
  client = new Client(); //Appwrite Client
  account; //Appwrite Account

  //Constructor for Appwrite Auth Class
  constructor() {
    this.client
      .setEndpoint("https://cloud.appwrite.io/v1")
      .setProject(conf.projectId);
    this.account = new Account(this.client);
  }

  //Methods for Appwrite Auth Class

  //Create Account with email and password
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      }
    } catch (error) {
      console.log("Appwrite error::createAccount", error);
    }
  }

  //Login with email and password and get session
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Appwrite error::login", error);
    }
    return null;
  }

  //Get Current User from Appwrite
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite error::getCurrentUser", error);
    }
    return null;
  }

  //Logout from Appwrite
  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite error::logout", error);
    }
    return null;
  }
}

const authService = new Auth();

export default authService;
