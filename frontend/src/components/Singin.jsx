import React from 'react'

export default function Singin() {
  return (
    <>
    <div className="container">
        <h2>Sign In</h2>
        <form action="process_signin.php" method="post">
            <div className="form-group">
                <label htmlForfor="username">Username:</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div class="form-group">
                <input type="submit" value="Sign In"/>
            </div>
        </form>
    </div>
    </>
  )
}
