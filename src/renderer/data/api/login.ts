const onSignin = async (username: string, password: string) => {
  const userInfo = await window.mtmApi.signIn(username, password);
  return userInfo;
};

const onSignUp = async (username: string, password: string) => {
  const userInfo = await window.mtmApi.signUp(username, password);
  return userInfo;
};

const onGetPrinters = async () => {
  const userInfo = await window.mtmApi.getPrinters();

  console.log("bao", userInfo);

  return userInfo;
};

export { onSignin, onSignUp, onGetPrinters };
