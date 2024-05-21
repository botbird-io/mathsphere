const pages = [
  { name: 'Home', href: '#home' },
  { name:"Courses", href:"#courses"},
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];
const handleClick = (e) => {
    const elem = document.activeElement
    if (elem) {
      elem.blur();
    }
}
function ListItem({ page }) {
    return (<li key={page.name} onClick={handleClick}>
    <a href={page.href} target={page.target} className="">
        {page.name}
    </a>
    </li>); 
}
export default function Navbar() {
  return (
    <div className="navbar fixed top-0 z-10 bg-[#fcb69f]">
      <div className="navbar-start"></div>
      <div className="navbar-center flex">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} aria-label='menu' role="button" className="btn btn-ghost">
            <img src={'/mathsphere_logo.jpeg'} alt='MathSphere Typo Logo' className='h-auto w-36 mix-blend-multiply' />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[11] p-2 shadow bg-base-100 rounded-box w-52">
            {pages.map((page) => (
              <ListItem key={page.name} page={page} />
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <a href='tel:+91' className="btn btn-primary">Enquire Now</a>
      </div>
    </div>  
  );
}