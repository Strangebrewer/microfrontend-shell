import api from '../api';
import { authClient } from '../utils/authClient';

export const useGetCurrentUser = () => {
  // const { setUserState } = useUserState();
  async function getCurrentUser() {
    const response = await api.user.me();
    if (response?.data) {
      console.log('response.data in getCurrentUser:::', response.data);
      // setUserState(response.data);
      return response.data;
    }
  }
  return [getCurrentUser];
};

export const useLogin = () => {
  // const { setUserState } = useUserState();
  async function login(credentials: any) {
    const response = await api.user.login(credentials);
    console.log('response.data::: ', response.data)
    if (response?.data) {
      // setUserState(response.data.user);
      // setAuthToken(response.data.accessToken);
      // setRefreshToken(response.data.refreshToken);
      authClient.setTokens(response.data.accessToken, response.data.refreshToken)
    }
  }
  return [login];
};

export const useLogout = () => {
  // const { setUserState } = useUserState();
  // const { setProjects } = useProjectsState();
  // const { setSubjects } = useSubjectsState();
  // const { setTexts } = useTextsState();
  function logout() {
    api.user.logout(authClient.getRefreshToken() || "");
    authClient.logout();
    // resetAuthToken();
    // resetRefreshToken();
    // setUserState(null);
    // setProjects(null);
    // setSubjects(null);
    // setTexts(null);
  }
  return [logout];
};

