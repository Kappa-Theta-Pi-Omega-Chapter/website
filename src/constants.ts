const HOME = "/";
const ABOUT_US = "/about";
const RUSH = "/rush";
const MEMBERS = "/members";
const CONTACT_US = "/contact";

export const ROUTES = {
  HOME,
  ABOUT_US,
  RUSH,
  MEMBERS,
  CONTACT_US,
};

export const NAVBAR_ROUTES = [
    { route: ROUTES.ABOUT_US, text: "About Us" },
    { route: ROUTES.RUSH, text: "Rush" },
    { route: ROUTES.MEMBERS, text: "Members" },
    { route: ROUTES.CONTACT_US, text: "Contact" },
];
