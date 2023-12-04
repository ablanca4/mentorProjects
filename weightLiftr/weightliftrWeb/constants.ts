export type MenuItem = {
  id: string;
  title: string;
  path: string;
};
export const MenuItemsArray: MenuItem[] = [
  { id: "home", title: "HOME", path: "home" },
  { id: "contact", title: "CONTACT", path: "contact" },
  { id: "about", title: "ABOUT", path: "about" },
  { id: "login", title: "LOGIN/SIGNUP", path: "register" },
];
