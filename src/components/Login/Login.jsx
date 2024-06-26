import React, { useState } from 'react'
import toast from 'react-hot-toast'

function Login() {

  const [emailAddress, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = (e) => {
    e.preventDefault()

    if (validate()) {
      fetch(`http://localhost:3000/api/v1/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailAddress, password }),
      })
        .then((res) => {
          console.log(res)
          if (!res.ok) {
            console.log('Network response was not ok');
          }
          return res.json();
        })
        .then((resp) => {
          console.log(resp);
          toast.success("Login successful!");
        })
        .catch((err) => {
          console.error(err);
          toast.error("Login failed: " + err.message);
        });
    }
  }


  const validate = () => {
    let result = true
    if (emailAddress === '' || emailAddress === null) {
      result = false
      console.log("email not match")
      toast.error("please enter valid emailAddress")
    }

    if (password === '' || password === null) {
      result = false
      console.log("pass not match")
      toast.error("Credentials does not match....")
    }
  }
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>
          <form onSubmit={login}>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">Email</label>
              <input
                className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
                type="email"
                id="email"
                name="email"
                value={emailAddress} onChange={e => setEmail(e.target.value)}

              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700" htmlFor="password">Password</label>
              <input
                className="w-full px-3 py-2 border rounded text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
                type="password"
                id="password"
                name="password"
                value={password} onChange={e => setPassword(e.target.value)}

              />
            </div>
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
