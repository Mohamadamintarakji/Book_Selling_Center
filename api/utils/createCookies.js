const createUserCookies = ({ res, token }) => {
  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(oneDay + Date.now()),
    secure: process.env.NODE_ENV !== "production",
  });
};
const createAdminCookies = ({ res, admin }) => {
  const oneDay = 1000 * 60 * 60 * 24;

  res.cookie("admin", admin, {
    httpOnly: true,
    expires: new Date(oneDay + Date.now()),
    secure: process.env.NODE_ENV !== "production",
  });
};
export { createUserCookies, createAdminCookies };
