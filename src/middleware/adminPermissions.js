const adminPermission = (req, res, next) => {
  const userRole = req.userData.role;
<<<<<<< HEAD
<<<<<<< HEAD
  if (userRole !== 'super-admin') {
=======
  if (userRole.toLowerCase() !== 'super-admin') {
>>>>>>> feat(super-admin permissions): super-admin permissions
=======
  if (userRole !== 'super-admin') {
>>>>>>> feat(Role based functionality): implement role based functionality
    return res.status(403).json({
      error: 'You do not have permission to perform this action'
    });
  }
  next();
};

export default adminPermission;