import logo1 from './assets/logo1.jpeg';

export default function Header() {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
      <div className='container'>
        <a className='navbar-brand' href='/'>
          <div className='d-flex'>
            <img src={logo1} alt='logo' width="45" className='mr-2' />
            <div>Project Management</div>
          </div>
        </a>
      </div>
    </nav>
  );
}