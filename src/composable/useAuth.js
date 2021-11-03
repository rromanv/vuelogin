import { ref } from "vue";

const isAuthenticated = ref(false);

const user = ref("");

const usersFromDB = [
  { username: "admin", password: "admin", name: "Administrator" },
  { username: "rromanve", password: "rromanve", name: "Rodolfo" },
];

const useAuth = () => {
  const login = (username, password) => {
    const userFromDB = usersFromDB.find(
      (user) => user.username === username && user.password === password
    );

    if (userFromDB) {
      isAuthenticated.value = true;
      user.value = userFromDB.name;
    }
  };

  const logout = () => {
    isAuthenticated.value = false;
    user.value = "";
  };

  return { isAuthenticated, login, logout, user };
};

export default useAuth;
