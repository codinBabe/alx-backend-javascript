function createUser() {
  return Promise.resolve({ firstName: 'Guillaume', lastName: 'Salva' });
}

function uploadPhoto() {
  return Promise.resolve({ status: 200, body: `photo-profile-1` });
}

export { uploadPhoto, createUser };
