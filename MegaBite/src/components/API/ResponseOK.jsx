const ResponseOK = (response) => {
  const code = response.status;
  if (code == 200 || code == 201 || code == 204) {
    return true;
  } else {
    return false;
  }
};

export default ResponseOK;
