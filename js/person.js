export default class Person {
  constructor(name, email, github) {
    this._name = name || "";
    this._email = email || "";
    this._github = github || "";
    this._file = null;
  }

  getName() {
    return this._name;
  }

  setName(name) {
    this._name = name;
  }

  getEmail() {
    return this._email;
  }

  setEmail(email) {
    this._email = email;
  }

  getGithub() {
    return this._github;
  }

  setGithub(github) {
    this._github = github;
  }

  setFile(files) {
    this._file = files[0]; // Get the first file
  }

  getFile() {
    if (this._file) {
      return URL.createObjectURL(this._file); // Create a URL for the file
    }
    return null;
  }
}
