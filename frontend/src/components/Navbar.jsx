import { Link , useNavigate} from "react-router-dom";

export default function Navbar() {
  const token = localStorage.getItem('token')
  const navigateTo = useNavigate();

 const removeToken = ()=>{
     alert("log out ?")
     localStorage.clear('token');
     navigateTo('/login')
 }

  return (
    <div className="navbar">
      <Link className="link" to="/">
        {" "}
        <div className="logo">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="30pt"
            height="30pt"
            viewBox="0 0 1280.000000 1225.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,1225.000000) scale(0.100000,-0.100000)"
              fill="#ffffff"
              stroke="none"
            >
              <path
                d="M3540 10900 l-2855 -1349 -3 -220 -2 -221 5720 0 5720 0 -2 221 -3
220 -2858 1350 c-1571 742 -2858 1349 -2860 1348 -1 0 -1287 -607 -2857 -1349z"
              />
              <path
                d="M1785 8897 c-3 -6 -4 -170 -3 -362 l3 -350 4615 0 4615 0 0 360 0
360 -4613 3 c-3696 2 -4614 0 -4617 -11z"
              />
              <path
                d="M2206 7948 c-3 -18 -10 -258 -16 -533 -6 -275 -15 -666 -20 -870 -5
-203 -14 -554 -20 -780 -6 -225 -15 -588 -20 -805 -5 -217 -14 -579 -20 -805
-6 -225 -15 -576 -20 -780 -5 -203 -13 -513 -16 -687 l-7 -318 673 0 672 0 -6
168 c-6 132 -156 5380 -156 5429 0 10 -100 13 -520 13 l-519 0 -5 -32z"
              />
              <path
                d="M4646 7878 c-3 -57 -10 -308 -16 -558 -6 -250 -15 -626 -20 -835 -5
-209 -14 -563 -20 -787 -5 -225 -15 -589 -20 -810 -50 -1969 -60 -2382 -60
-2445 l0 -73 670 0 670 0 0 33 c0 27 -38 1373 -80 2817 -6 195 -15 508 -20
695 -6 187 -19 660 -30 1050 -10 391 -22 779 -26 863 l-6 152 -518 0 -518 0
-6 -102z"
              />
              <path
                d="M7086 7818 c-6 -141 -136 -5346 -136 -5420 l0 -28 670 0 670 0 0 38
c1 86 -151 5395 -156 5480 l-6 92 -518 0 -518 0 -6 -162z"
              />
              <path
                d="M9530 7948 c0 -18 -7 -292 -15 -608 -16 -609 -17 -674 -65 -2580 -5
-220 -14 -580 -20 -800 -5 -220 -14 -581 -20 -802 -5 -222 -12 -490 -16 -595
l-6 -193 671 0 671 0 0 53 c1 105 -151 5493 -156 5525 l-5 32 -519 0 -520 0 0
-32z"
              />
              <path
                d="M1220 1805 l0 -366 -307 1 -308 1 -3 -360 -2 -361 -300 0 -300 0 0
-360 0 -360 6400 0 6400 0 0 360 0 360 -300 0 -300 0 -2 361 -3 360 -307 -1
-308 -1 0 366 0 365 -5180 0 -5180 0 0 -365z"
              />
            </g>
          </svg>
        </div>{" "}
        </Link>
        {token?<button onClick={removeToken}>log out</button>:<div>
      <Link className="link" to="/singin">
        <div className="singin">Singin</div>{" "}
      </Link>
      <Link className="link" to="/login">
        <div className="singin">Login</div>{" "}
      </Link>
      </div>
}
    </div>
  );
}
