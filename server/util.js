export const _auth = authUser => {
  if (!authUser) {
    throw new Error('You are not authenticated!')
  }
}
