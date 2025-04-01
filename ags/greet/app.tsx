import Greet from "gi://AstalGreet"

Greet.login("username", "password", "compositor", (_, res) => {
  try {
    Greet.login_finish(res)
  } catch (err) {
    printerr(err)
  }
})
