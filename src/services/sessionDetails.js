export const getSessionData = () => {
  //fetching session info of the logged in User
  const userId = JSON.parse(sessionStorage.getItem("userId"));
  const accessToken = JSON.parse(sessionStorage.getItem("accessToken").trim());

  return { accessToken, userId };
};

export const setSessionData = (configData) => {
  const { accessToken, userId } = configData;
  sessionStorage.setItem("accessToken", JSON.stringify(accessToken));
  sessionStorage.setItem("userId", JSON.stringify(userId));

  return;
};
