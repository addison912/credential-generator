let SignUp = {
  firstPage: {
    fill: function() {
      document.getElementById("firstName").value = credentials[0].first;
      document.getElementById("lastName").value = credentials[0].last;
      document.getElementById("username").value = credentials[0].uid;
      document.getElementById("firstName").value = credentials[0].first;
      document.querySelectorAll('[type="password"]').forEach(input => {
        input.value = credentials[0].pw;
      });
      document.getElementById("accountDetailsNext").click();
    }
  }
};
