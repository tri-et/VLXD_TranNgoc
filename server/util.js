export const _auth = authUser => {
  if (!authUser) {
    throw new Error('Vui lòng đăng nhập lại!')
  }
}
