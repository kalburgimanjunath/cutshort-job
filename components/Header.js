import Menu from './Menu';
export default function Header() {
  const menus = [
    { title: 'Dashboard', link: './dashboard' },
    { title: 'View Jobs', link: './viewjobs' },
    { title: 'Messages', link: './messages' },
    { title: 'Plans', link: './plans' },
    { title: 'Credits', link: './credits' },
    { title: 'Settings', link: './settings' },
  ];
  const menus2 = ['Plan', 'Rewards', 'Messages', 'Notification', 'Profile'];
  return (
    <div className="flex justify-between shadow-md  bg-pink-300">
      <Menu menus={menus} />
      <Menu menus={menus2} />
    </div>
  );
}
