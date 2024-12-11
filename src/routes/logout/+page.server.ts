export const load = async ({cookies}) => {
cookies?.delete('token', {path: '/'});
return { success: true, message: "You have successfully logged out." };
}