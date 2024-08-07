function createUser(firstName = "Guillaume", lastName = "Salva") {
  return Promise.resolve({ firstName: firstName, lastName: lastName });
}

function uploadPhoto(userId = 1) {
  return Promise.resolve({ status: 200, body: `photo-profile-${userId}` });
}

export { uploadPhoto, createUser };
