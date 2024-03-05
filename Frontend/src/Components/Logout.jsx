import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();
    function setCookie(name, value, daysToExpire) {
        let date = new Date();
        date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
        document.cookie =
          name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
    }
    function getCookie(name) {
      let cookieArray = document.cookie.split('; ');
      let cookie = cookieArray.find((row) => row.startsWith(name + '='));
      return cookie ? cookie.split('=')[1] : null;
  }
    const signOut=()=>{
      console.log("Test",getCookie('username'))
        setCookie('username', "", 0)
        console.log("Test",getCookie('username'))
        navigate('/')
    }
  return (
    <div id='Body'>
        <div id='Body-content'>
      <h1>Log Out</h1>
      <button onClick={signOut}>Log Out</button></div>
    </div>
  )
}

export default Logout